using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace JJ2020.DOMAIN.Models
{
    public class Note
    {
        [JsonProperty("id")]
        public int ID { get; set; }

        [JsonProperty("id_user")]
        public int ID_USER { get; set; }

        [JsonProperty("id_user_shared")]
        public int ID_USER_SHARED { get; set; }

        [JsonProperty("title")]
        public string TITLE { get; set; }

        [JsonProperty("note_text")]
        public string NOTE_TEXT { get; set; }

        [JsonProperty("active")]
        public UInt64 ACTIVE { get; set; }

        [JsonProperty("favorite")]
        public UInt64 FAVORITE { get; set; }

        [JsonProperty("tag")]
        public string TAG { get; set; }

        [JsonProperty("dt_creation")]
        public DateTime DT_CREATION { get; set; }

        [JsonProperty("dt_edit")]
        public DateTime DT_EDIT { get; set; }

        [JsonProperty("main_user")]
        public User main_user { get; set; }

        [JsonProperty("shared_user")]
        public User shared_user { get; set; }
    }
}
