using System;
using System.Collections.Generic;

namespace capstone.Models
{
    public class Profiles
    {
        public int Id { get; set; }
        public string EmailAddress { get; set; }
        public string UserName { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.Now;
        public string Address { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string UserId { get; set; }
        public List<Events> Events { get; set; }

    }
}