using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Text;

namespace JJ2020.INFRA.Database
{
    public class ConnectionFactory
    {
        private SqlConnection Connection;
        private IConfiguration config;
        private string connString;

        public ConnectionFactory(IConfiguration _config)
        {
            config = _config;
            connString = config.GetConnectionString("SQLdb");
        }

        private DbConnection GetConnection()
        {

            if (Connection == null)
                Connection = new SqlConnection(connString);

            if (Connection.State != ConnectionState.Open)
                Connection.Open();

            return Connection;
        }

        public DbCommand GetCommand()
        {
            //return GetConnection().CreateCommand();
            return GetConnection().CreateCommand();
        }

        public void Dispose()
        {
            if (Connection != null && Connection.State == ConnectionState.Open)
                Connection.Close();
            Connection.Dispose();
        }

        public DbDataReader GetReader(string cmdText,
            CommandType cmdType = CommandType.Text,
            Dictionary<string, object> parametros = null
            )
        {
            using (var cmd = this.GetCommand())
            {
                cmd.CommandText = cmdText;
                cmd.CommandType = cmdType;

                if (parametros != null)
                {
                    foreach (var pr in parametros)
                    {
                        var parameter = cmd.CreateParameter();
                        parameter.ParameterName = pr.Key;
                        parameter.Value = pr.Value;
                        cmd.Parameters.Add(parameter);
                    }
                }

                return cmd.ExecuteReader(); //SELECT, PROC QUE RETORNEM TABELA (n LINHAS E n COLUNAS)
            }
        }

        public bool ExecuteNonQuery(string cmdText,
            CommandType cmdType = CommandType.Text,
            Dictionary<string, object> parametros = null)
        {
            try
            {
                using (var cmd = this.GetCommand())
                {
                    cmd.CommandText = cmdText;
                    cmd.CommandType = cmdType;

                    if (parametros != null)
                    {
                        foreach (var pr in parametros)
                        {
                            var parameter = cmd.CreateParameter();
                            parameter.ParameterName = pr.Key;
                            parameter.Value = pr.Value;
                            cmd.Parameters.Add(parameter);
                        }
                    }

                    cmd.ExecuteNonQuery(); //INSERT, DELETE, UPDATE, PROC SEM RETORNO
                    return true;
                }
            }
            catch
            {
                return false;
            }
        }

        public object ExecuteScalar(string cmdText,
            CommandType cmdType = CommandType.Text,
            Dictionary<string, object> parametros = null)
        {
            try
            {
                using (var cmd = this.GetCommand())
                {
                    cmd.CommandText = cmdText;
                    cmd.CommandType = cmdType;

                    if (parametros != null)
                    {
                        foreach (var pr in parametros)
                        {
                            var parameter = cmd.CreateParameter();
                            parameter.ParameterName = pr.Key;
                            parameter.Value = pr.Value;
                            cmd.Parameters.Add(parameter);
                        }
                    }

                    return cmd.ExecuteScalar();
                }
            }
            catch (Exception ex)
            {
                //TODO: tratamento exception
                throw ex;
            }
        }
    }
}
