using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace JJ2020.DOMAIN.Models
{
    public class Theme
    {
        [JsonProperty("id")]
        public int ID { get; set; }

        [JsonProperty("name_theme")]
        public string NAME_THEME { get; set; }

        [JsonProperty("color_1")]
        public string COLOR_1 { get; set; }

        [JsonProperty("color_2")]
        public string COLOR_2 { get; set; }

        [JsonProperty("color_3")]
        public string COLOR_3 { get; set; }

        [JsonProperty("color_4")]
        public string COLOR_4 { get; set; }

        [JsonProperty("color_5")]
        public string COLOR_5 { get; set; }

    }
}
