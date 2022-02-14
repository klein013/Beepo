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
    public class EmployeeController : Controller
    {

        
        private IEmployee _employee;

        public EmployeeController(IEmployee employee)
        {
            _employee = employee;
        }

        [HttpGet("All")]
        public IActionResult GetEmployees()
        {
            return Ok(_employee.GetEmployees());
        }

        
        [HttpGet("All/{id}")]
        public IActionResult GetEmployee(int id)
        {
            return Ok(_employee.GetEmployee(id));
        }

        [HttpPost]
        public IActionResult AddEmployee(Employee emp)
        {
            var employee = _employee.AddEmployee(emp);
            return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host + HttpContext.Request.Path + "/" + employee.Id, employee);
        }

        [HttpPut("{id}")]
        public IActionResult EditEmployee(int id, Employee emp)
        {
            var employee = _employee.GetEmployee(id);

            if (employee != null)
            {
                emp.Id = employee.Id;
                _employee.EditEmployee(emp);
                return Ok(emp);
            }

            return NotFound($"Employee {id} was not found");
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            var employee = _employee.GetEmployee(id);

            if (employee != null)
            {
                _employee.DeleteEmployee(employee);
                return Ok();
            }

            return NotFound($"Employee {id} was not found");
        }

        [HttpPost("login")]
        public IActionResult LoginEmployee(Employee emp)
        {
            var employee = _employee.LoginEmployee(emp);

            if (employee != null)
            {
                return Ok(employee);
            }

            return NotFound($"Employee was not found");
        }

        [HttpGet("doctors")]
        public IActionResult GetDoctors()
        {
            return Ok(_employee.GetDoctors());
        }
    }
}
