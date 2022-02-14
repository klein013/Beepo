using System;
using System.Collections.Generic;
using System.Linq;
using BeepoAPI.Interfaces;
using BeepoAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BeepoAPI.SQLData
{
    public class EmployeeSQL : IEmployee
    {
        private BeepoExamContext _dbContext;

        public EmployeeSQL(BeepoExamContext dbContext)
        {
            _dbContext = dbContext; 
        }

        public Employee AddEmployee(Employee emp)
        {
            _dbContext.Employees.Add(emp);
            _dbContext.SaveChanges();
            return emp;
        }

        public void DeleteEmployee(Employee emp)
        {
            _dbContext.Employees.Remove(emp);
            _dbContext.SaveChanges();
        }

        public Employee EditEmployee(Employee emp)
        {
            _dbContext.Employees.Update(emp);
            _dbContext.SaveChanges();
            
            return emp;
        }

        public Employee GetEmployee(int id)
        {
            var emp = _dbContext.Employees.Find(id);
            _dbContext.Entry(emp).State = EntityState.Detached;
            return emp;
        }

        public List<Employee> GetEmployees()
        {
            return _dbContext.Employees.ToList();
        }

        public Employee LoginEmployee(Employee emp)
        {
            return _dbContext.Employees.FirstOrDefault(employee => employee.Username == emp.Username && employee.Userpass == emp.Userpass);
        }

        public List<Employee> GetDoctors()
        {
            return _dbContext.Employees.Where(emp => emp.EmployeeType == "Doctor")
                .OrderBy(emp => emp.Id)
                .ToList();
        }
    }
}
