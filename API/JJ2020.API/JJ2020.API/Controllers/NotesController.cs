using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JJ2020.BLL.Services;
using JJ2020.DOMAIN.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace JJ2020.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private IConfiguration config;

        public NotesController(IConfiguration _config)
        {
            config = _config;
        }

        [HttpGet]
        public IActionResult GetNotes(int id_user)
        {
            try
            {
                if (id_user <= 0 || id_user == null)
                    return BadRequest("paramêtros inválidos");

                var svc = new NoteService(config);
                var result = svc.GetNotes(id_user);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public IActionResult PostNotes(Note note)
        {
            try
            {
                var svc = new NoteService(config);
                var result = svc.PostNote(note);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPut]
        [Route("/notes/{id_user}")]
        public IActionResult PutNotes( [FromRoute] int id_user, [FromBody] Note note)
        {
            try
            {
                var svc = new NoteService(config);
                var result = svc.PostNote(note);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}