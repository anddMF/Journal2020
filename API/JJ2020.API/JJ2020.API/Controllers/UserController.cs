using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JJ2020.BLL.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace JJ2020.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IConfiguration config;

        public UserController(IConfiguration _config)
        {
            config = _config;
        }

        [HttpGet]
        public IActionResult GetUser( string email, string password)
        {
            try
            {
                if (String.IsNullOrEmpty(email) || String.IsNullOrEmpty(password))
                    return BadRequest("invalid parameters");

                var svc = new UserService(config);
                var result = svc.GetUser(email, password);

                if (result.Count() < 1)
                    return NotFound();

                return Ok(result);

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}