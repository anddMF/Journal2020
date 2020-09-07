using JJ2020.DOMAIN.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace JJ2020.BLL.Services
{
    public class UserService
    {
        private IConfiguration config;
        private BaseService baseSvc;

        public UserService(IConfiguration _config)
        {
            config = _config;
            baseSvc = new BaseService(config);
        }

        public IEnumerable<User> GetUser(string email, string password)
        {
            var param = PrepParamGet(email, password);

            var result = baseSvc.ExecuteProcGet<User>("STP_JJ2020_USER_GET", param);
            return result;
        }

        private Dictionary<string, object> PrepParamGet(string email, string password)
        {
            var param = new Dictionary<string, object>
            {
                { "@email", email },
                { "@pass", password }
            };

            return param;
        }
    }
}
