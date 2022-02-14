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
    public class PatientController : Controller
    {
        private IPatient _patient;

        public PatientController(IPatient patient)
        {
            _patient = patient;
        }

        [HttpGet]
        public IActionResult GetPatients()
        {
            return Ok(_patient.GetPatients());
        }

        [HttpGet("{id}")]
        public IActionResult GetEmployee(int id)
        {
            return Ok(_patient.GetPatient(id));
        }

        [HttpPost]
        public IActionResult AddPatient(Patient pat)
        {
            var patient = _patient.AddPatient(pat);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + patient.Id, patient);
        }

        [HttpPut("{id}")]
        public IActionResult EditPatient(int id, Patient pat)
        {
            var patient = _patient.GetPatient(id);

            if (patient != null)
            {
                pat.Id = patient.Id;
                _patient.EditPatient(pat);
                return Ok(pat);
            }

            return NotFound($"Employee {id} was not found");
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePatient(int id)
        {
            var patient = _patient.GetPatient(id);

            if (patient != null)
            {
                _patient.DeletePatient(patient);
                return Ok();
            }

            return NotFound($"Employee {id} was not found");
        }

        [HttpPost("login")]
        public IActionResult LoginPatient(Patient pat)
        {
            var patient = _patient.LoginPatient(pat);

            if (patient != null)
            {
                return Ok(patient);
            }

            return NotFound($"Patient was not found");
        }
    }
}
