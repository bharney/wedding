using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using wedding.Models;

namespace wedding.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private IConfiguration _config;
        public SampleDataController(IConfiguration configuration)
        {
            _config = configuration;
        }
        [HttpPost("[action]")]
        public async Task<IActionResult> RSVPAsync([FromBody] Guest guest)
        {
            if (ModelState.IsValid)
            {
                RSVP Rsvp = new RSVP(guest.SelectedValue[0],
                                    Convert.ToBoolean(guest.SelectedValue[1]),
                                    guest.Name,
                                    guest.Email,
                                    guest.Phone,
                                    guest.Message);

                EmailingService emailingService = new EmailingService(_config);
                await emailingService.SendConfirmationEmail(Rsvp);

                return Ok();
            }

            return BadRequest("Sorry, RSVP not formatted correctly.");
        }

        [HttpPost("[action]")]
        public async Task ContactAsync([FromBody] Contact guest)
        {
            if (ModelState.IsValid)
            {
                GuestBook Guest = new GuestBook(guest.Name,
                                               guest.Email,
                                               guest.Phone,
                                               guest.Message);
                EmailingService emailingService = new EmailingService(_config);
                await emailingService.SendConfirmationEmail(Guest);
            }
        }
    }

    public class Contact
    {
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Message { get; set; }
    }

    public class Guest
    {
        [Required]
        public string[] SelectedValue { get; set; }
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Message { get; set; }
    }
}
