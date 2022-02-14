using System;
using System.Collections.Generic;
using BeepoAPI.Models;

namespace BeepoAPI.Interfaces
{
    public interface IPatient
    {
        List<Patient> GetPatients();

        Patient GetPatient(int id);

        Patient AddPatient(Patient patient);

        Patient EditPatient(Patient patient);

        void DeletePatient(Patient patient);

        Patient LoginPatient(Patient patient);
    }
}
