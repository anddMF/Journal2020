using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace JJ2020.DOMAIN.Models
{
    public class Country
    {
        [JsonProperty("id")]
        public int ID { get; set; }

        [JsonProperty("name_country")]
        public string NAME_COUNTRY { get; set; }

    }
}
