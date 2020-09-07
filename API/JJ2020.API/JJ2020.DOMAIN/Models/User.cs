using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace JJ2020.DOMAIN.Models
{
    public class User
    {
        [JsonProperty("id")]
        public int ID { get; set; }

        [JsonProperty("id_theme")]
        public int? ID_THEME { get; set; }

        [JsonProperty("id_country")]
        public int? ID_COUNTRY { get; set; }

        [JsonProperty("email")]
        public string EMAIL { get; set; }

        [JsonProperty("u_password")]
        public string U_PASSWORD { get; set; }

        [JsonProperty("name_user")]
        public string NAME_USER { get; set; }

        [JsonProperty("age")]
        public DateTime? AGE { get; set; }

        [JsonProperty("active")]
        public bool ACTIVE { get; set; }

        [JsonProperty("dt_creation")]
        public DateTime DT_CREATION { get; set; }

        [JsonProperty("url_photo")]
        public string URL_PHOTO { get; set; }

        [JsonProperty("country_name")]
        public string NAME_COUNTRY { get; set; }

        [JsonProperty("theme")]
        public Theme theme { get; set; }

        [JsonProperty("country")]
        public Country country { get; set; }

    }
}
