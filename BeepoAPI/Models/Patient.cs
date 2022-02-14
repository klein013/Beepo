using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BeepoAPI.Models
{
    public class Patient
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [StringLength(50)]
        [Required]
        public string Lastname { get; set; }

        [StringLength(50)]
        [Required]
        public string Firstname { get; set; }

        [StringLength(50)]
        public string Middlename { get; set; }

        [StringLength(10)]
        public string Gender { get; set; }

        public DateTime Birthdate { get; set; }

        [StringLength(30)]
        [Required]
        public string Username { get; set; }

        [StringLength(32)]
        [Required]
        public string Userpass { get; set; }

        public List<Appointment> Appointments { get; set; }
    }
}
