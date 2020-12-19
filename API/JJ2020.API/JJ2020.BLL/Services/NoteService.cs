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

        public IEnumerable<Note> GetNotes(int id_user, int id_note = 0)
        {
            var param = PrepParamGet(id_user);
            var result = baseSvc.ExecuteProcGet<Note>("STP_JJ2020_NOTE_GET", param);

            return result;
        }

        public IEnumerable<Note> PostNote(Note note)
        {
            var param = PrepParamPost(note);

            var res = baseSvc.ExecuteProc("STP_JJ2020_NOTE_INSERT", param);

            if (note.ID > 0)
                return GetNotes(note.ID_USER, note.ID);
            else
                return GetNotes(note.ID_USER);
        }

        private Dictionary<string, object> PrepParamGet(int id_user)
        {
            var param = new Dictionary<string, object>
            {
                { "pid_user", id_user},
                { "pid", 0 }
            };

            return param;
        }

        private Dictionary<string, object> PrepParamPost(Note note)
        {
            var active = Convert.ToBoolean(note.ACTIVE);
            var favorite = Convert.ToBoolean(note.FAVORITE);
            var param = new Dictionary<string, object>
            {
                { "Pid", note.ID },
                { "Pid_user", note.ID_USER },
                { "Ptitle", note.TITLE == "" ? null : note.TITLE },
                { "Pnote_text", note.NOTE_TEXT == "" ? null : note.NOTE_TEXT},
                { "Pactive", active },
                { "Pfavorite", favorite },
                { "Ptag", note.TAG == "" ? null : note.TAG },
                { "Pdt_creation", note.ID == 0 ? DateTime.Now : note.DT_CREATION },
                { "Pdt_edit", DateTime.Now }
            };

            if (note.ID_USER_SHARED == 0)
                param.Add("Pid_user_shared", null);
            else
                param.Add("Pid_user_shared", note.ID_USER_SHARED);
            
            return param;
        }
    }
}
