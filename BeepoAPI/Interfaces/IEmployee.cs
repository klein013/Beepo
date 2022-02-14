using System;
using System.Collections.Generic;
using BeepoAPI.Models;

namespace BeepoAPI.Interfaces
{
    public interface IEmployee
    {
        List<Employee> GetEmployees();

        Employee GetEmployee(int id);

        Employee AddEmployee(Employee emp);

        Employee EditEmployee(Employee emp);

        void DeleteEmployee(Employee emp);

        Employee LoginEmployee(Employee emp);

        List<Employee> GetDoctors();
    }
}
