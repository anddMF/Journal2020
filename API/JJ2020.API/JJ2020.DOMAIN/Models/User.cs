using System;
using System.Collections.Generic;
using System.Text;

namespace JJ2020.DOMAIN.Models
{
    public class User
    {
        public int ID { get; set; }
        public int ID_THEME { get; set; }
        public int ID_COUNTRY { get; set; }
        public string EMAIL { get; set; }
        public string U_PASSWORD { get; set; }
        public string NAME_USER { get; set; }
        public DateTime AGE { get; set; }
        public bool ACTIVE { get; set; }
        public DateTime DT_CREATION { get; set; }
        public string URL_PHOTO { get; set; }

        public Theme theme { get; set; }
        public Country country { get; set; }

    }
}
