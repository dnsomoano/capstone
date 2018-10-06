using System;

namespace capstone.Models
{
    public class Events
    {
        public int Id { get; set; }
        public string EventName { get; set; }
        public DateTime TimeStart { get; set; }
        public DateTime TimeEnd { get; set; }
        public string EventAddress { get; set; }
        public double EventLatitude { get; set; }
        public double EventLongitude { get; set; }
        public bool IsFinished { get; set; }
        public int ProfilesId { get; set; }
        public virtual Profiles Profiles { get; set; }
    }
}