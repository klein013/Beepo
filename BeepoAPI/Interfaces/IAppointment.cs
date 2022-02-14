using System;
using System.Collections.Generic;
using BeepoAPI.Models;

namespace BeepoAPI.Interfaces
{
    public interface IAppointment
    {
        List<Appointment> GetAppointments();

        Appointment GetAppointment(int id);

        Appointment AddAppointment(Appointment appt);

        Appointment EditAppoinment(Appointment appt);

        void DeleteAppointment(Appointment appt);

        List<Appointment> GetAppointmentByDate(DateTime date);
    }
}
