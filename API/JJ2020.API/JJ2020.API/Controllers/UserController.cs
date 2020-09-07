using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JJ2020.BLL.Services;
using JJ2020.DOMAIN.Models;
using JJ2020.DOMAIN.ViewModels;
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

        [HttpPost]
        [Route("/auth")]
        public IActionResult GetUser([FromBody] UserViewModel user)
        {
            try
            {
                if (String.IsNullOrEmpty(user.email) || String.IsNullOrEmpty(user.password))
                    return BadRequest("invalid parameters");

                var svc = new UserService(config);
                var result = svc.GetUser(user.email, user.password);

                if (result.Count() < 1)
                    return NotFound();

                return Ok(result);

            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public IActionResult PostUser([FromBody] User user)
        {
            try
            {
                user.ID = 0;
                var svc = new UserService(config);
                var result = svc.PostUser(user);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        public IActionResult PutUser([FromBody] User user)
        {
            try
            {
                var svc = new UserService(config);
                var result = svc.PostUser(user);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}