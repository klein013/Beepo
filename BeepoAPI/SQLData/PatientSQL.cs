using System;
using System.Collections.Generic;
using System.Linq;
using BeepoAPI.Interfaces;
using BeepoAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace BeepoAPI.SQLData
{
    public class PatientSQL : IPatient
    {
        private BeepoExamContext _dbContext;

        public PatientSQL(BeepoExamContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Patient AddPatient(Patient patient)
        {
            _dbContext.Patients.Add(patient);
            _dbContext.SaveChanges();
            return patient;
        }

        public void DeletePatient(Patient patient)
        {
            _dbContext.Patients.Remove(patient);
            _dbContext.SaveChanges();
        }

        public Patient EditPatient(Patient patient)
        {
            _dbContext.Patients.Update(patient);
            _dbContext.SaveChanges();
            return patient;
        }

        public Patient GetPatient(int id)
        {
            var pat = _dbContext.Patients.Find(id);
            _dbContext.Entry(pat).State = EntityState.Detached;
            return pat;
        }

        public List<Patient> GetPatients()
        {
            return _dbContext.Patients.ToList();
        }

        public Patient LoginPatient(Patient patient)
        {
            return _dbContext.Patients.FirstOrDefault(pat => pat.Username == patient.Username && pat.Userpass == patient.Userpass);
        }
    }
}
