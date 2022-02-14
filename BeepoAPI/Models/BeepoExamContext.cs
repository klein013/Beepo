using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

#nullable disable

namespace BeepoAPI.Models
{
    public class BeepoExamContext : DbContext
    {
        public BeepoExamContext(DbContextOptions<BeepoExamContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Appointment>()
                .HasOne(p => p.Patient)
                .WithMany(a => a.Appointments);

            modelBuilder.Entity<Appointment>()
                .HasOne(p => p.Employee)
                .WithMany(a => a.Appointments);
        }

        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Patient> Patients { get; set; }
    }
}
