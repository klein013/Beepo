using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using BeepoAPI.Interfaces;
using BeepoAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BeepoAPI.SQLData
{
    public class AppointmentSQL : IAppointment
    {
        private BeepoExamContext _dbContext;

        public AppointmentSQL(BeepoExamContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Appointment AddAppointment(Appointment appt)
        {
            appt.Employee = _dbContext.Employees.First(emp => emp.Id == appt.Employee.Id);
            appt.Patient = _dbContext.Patients.First(pat => pat.Id == appt.Patient.Id);
            _dbContext.Appointments.Add(appt);
            _dbContext.SaveChanges();
            return appt;
        }

        public void DeleteAppointment(Appointment appt)
        { 
            _dbContext.Appointments.Remove(appt);
            _dbContext.SaveChanges();
            
        }

        public Appointment EditAppoinment(Appointment appt)
        {
            throw new NotImplementedException();
        }

        public Appointment GetAppointment(int id)
        {
            var appointment = _dbContext.Appointments.Find(id);
            return appointment;
        }

        public List<Appointment> GetAppointments()
        {
            var appointments = _dbContext.Appointments
                  .Join(
                      _dbContext.Employees,
                      appt => appt.Employee,
                      emp => emp,
                      (appt, emp) => new
                      {
                          Id = appt.Id,
                          Checkuptype = appt.Checkuptype,
                          AppointmentDate = appt.AppointmentDate,
                          Comment = appt.Comment,
                          Appstatus = appt.Appstatus,
                          Patient = appt.Patient,
                          Employee = emp,

                      }
                  )
                  .Join(
                      _dbContext.Patients,
                      appt => appt.Patient,
                      pat => pat,
                      (appt, pat) => new Appointment
                      {
                          Id = appt.Id,
                          Checkuptype = appt.Checkuptype,
                          AppointmentDate = appt.AppointmentDate,
                          Comment = appt.Comment,
                          Appstatus = appt.Appstatus,
                          Patient = pat,
                          Employee = appt.Employee,
                      }
                  );
            return appointments.ToList();
        }

        public List<Appointment> GetAppointmentByDate(DateTime date)
        {
            return _dbContext.Appointments.Where(appt => appt.AppointmentDate.Date == date.Date)
                .OrderBy(appt => appt.AppointmentDate)
                .ToList();
        }
    }
}
