using System;
using System.Collections.Generic;
using System.Text;

namespace JJ2020.DOMAIN.Models
{
    public class Note
    {
        public int ID { get; set; }
        public int ID_USER { get; set; }
        public int ID_USER_SHARED { get; set; }
        public string TITLE { get; set; }
        public string NOTE_TEXT { get; set; }
        public bool ACTIVE { get; set; }
        public bool FAVORITE { get; set; }
        public string TAG { get; set; }
        public DateTime DT_CREATION { get; set; }
        public DateTime DT_EDIT { get; set; }

        public User main_user { get; set; }
        public User shared_user { get; set; }
    }
}
