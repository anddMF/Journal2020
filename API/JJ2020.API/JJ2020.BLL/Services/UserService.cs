using JJ2020.DOMAIN.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

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

        public User PostUser(User user)
        {
            var param = PrepParamPost(user);

            var res = baseSvc.ExecuteProc("STP_JJ2020_USER_INSERT", param);

            var result = GetUser(user.EMAIL, user.U_PASSWORD);

            return result.LastOrDefault();
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

        private Dictionary<string, object> PrepParamPost(User user)
        {
            var param = new Dictionary<string, object>
            {
                { "@id", 0 },
                { "@id_theme", user.ID_THEME },
                { "@id_country", user.ID_COUNTRY },
                { "@email", user.EMAIL },
                { "@u_password", user.U_PASSWORD },
                { "@name_user", user.NAME_USER },
                { "@age", user.AGE },
                { "@active", user.ACTIVE },
                { "@dt_creation", user.DT_CREATION },
                { "@url_photo", user.URL_PHOTO }
            };

            return param;
        }
    }
}
