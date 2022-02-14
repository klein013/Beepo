  using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BeepoAPI.Interfaces;
using BeepoAPI.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BeepoAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AppointmentController : Controller
    {
        private IAppointment _appointment;

        public AppointmentController(IAppointment appointment)
        {
            _appointment = appointment;
        }

        [HttpGet]
        public IActionResult GetAppointments()
        {
            return Ok(_appointment.GetAppointments());
        }

        [HttpGet("{id}")]
        public IActionResult GetAppointment(int id)
        {
            return Ok(_appointment.GetAppointment(id));
        }

        [HttpPost]
        public IActionResult AddAppointment(Appointment appt)
        {
            _appointment.AddAppointment(appt);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path+"/"+appt.Id,appt);
        }

        [HttpPut("{id}")]
        public void Put(int id, Appointment appt)
        {
            var appointment = _appointment.GetAppointment(id);

            if(appointment != null)
            {
                appt.Id = appointment.Id;
                _appointment.EditAppoinment(appt);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var appointment = _appointment.GetAppointment(id);

            if(appointment != null)
            {
                _appointment.DeleteAppointment(appointment);
                return Ok(appointment);
            }

            return NotFound($"Appointment {id} was not found");
        }

        [HttpGet("{date}")]
        public IActionResult GetAppointmentByDate(string date)
        {
            return Ok(_appointment.GetAppointmentByDate(DateTime.Parse(date)));
        }
    }
}
