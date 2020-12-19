﻿using JJ2020.INFRA.Database;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;

namespace JJ2020.BLL.Services
{
    public class BaseService
    {
        private IConfiguration config;
        public BaseService(IConfiguration _config)
        {
            config = _config;
        }

        public dynamic ExecuteProc(string name, Dictionary<string, object> param)
        {
            var conn = new ConnectionFactory(config);
            var result = conn.ExecuteScalar(name, CommandType.StoredProcedure, param);
            return result;
        }

        public IEnumerable<T> ExecuteProcGet<T>(string name, Dictionary<string, dynamic> param)
        {
            var conn = new ConnectionFactory(config);
            DataTable dt = new DataTable();
            var sqlResult = conn.GetReader(name, CommandType.StoredProcedure, param);
            dt.Load(sqlResult);

            var result = TranslateDataTable<T>(dt);
            return result;
        }

        public IEnumerable<T> GetStuff<T>(string query)
        {
            var conn = new ConnectionFactory(config);
            DataTable dt = new DataTable();
            var sqlResult = conn.GetReader(query);
            dt.Load(sqlResult);

            var result = TranslateDataTable<T>(dt);
            return result;
        }

        public IEnumerable<T> TranslateDataTable<T>(dynamic db)
        {
            var dt = (DataTable)db;

            var columns = dt.Columns.Cast<DataColumn>().Select(d => new { d.DataType, d.ColumnName }).ToList();
            var result = new List<T>();

            foreach(DataRow item in dt.Rows)
            {
                var entity = Activator.CreateInstance(typeof(T));

                foreach(var column in columns)
                {
                    var type = Type.GetTypeCode(column.DataType);
                    var value = item[column.ColumnName];

                    if(value == null || DBNull.Value.Equals(value))
                    {
                        value = ValidateNullValue(column.DataType.Name);
                    }

                    entity?.GetType()?.GetProperty(column.ColumnName).SetValue(entity, value);
                }
                result.Add((T)entity);
            }

            return result;
        }

        private dynamic ValidateNullValue(string type)
        {
            switch (type)
            {
                case "Int32":
                    return 0;

                case "String":
                    return "";

                case "DateTime":
                    return null;

                case "Boolean":
                    return false;

                default:
                    return null;
            }
        }
    }
}
