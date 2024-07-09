using System;
using System.ComponentModel.DataAnnotations;

namespace EmployeeManagementSystem.Models
{
using System;

    public class Employee
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Last Name is required.")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last Name is required.")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid Email Address.")]
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Position { get; set; }
        public string Department { get; set; }
    }

}
