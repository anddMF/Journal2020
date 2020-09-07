using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace JJ2020.DOMAIN.ViewModels
{
    public class UserViewModel
    {
        [JsonProperty("email")]
        public string email { get; set; }

        [JsonProperty("password")]
        public string password { get; set; }

    }
}
