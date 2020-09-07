using JJ2020.DOMAIN.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace JJ2020.BLL.Services
{
    public class NoteService
    {
        private IConfiguration config;
        private BaseService baseSvc;

        public NoteService(IConfiguration _config)
        {
            config = _config;
            baseSvc = new BaseService(config);
        }

        public IEnumerable<Note> GetNotes(int id_user)
        {
            var param = PrepParamGet(id_user);
            var result = baseSvc.ExecuteProcGet<Note>("STP_JJ2020_NOTE_GET", param);

            return result;
        }

        private Dictionary<string, object> PrepParamGet(int id_user)
        {
            var param = new Dictionary<string, object>
            {
                { "@id_user", id_user},
                { "@id", 0 }
            };

            return param;
        }
    }
}
