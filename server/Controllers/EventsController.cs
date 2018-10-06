using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using capstone.Models;

namespace capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        public DailyMapContext db { get; set; }

        public EventsController()
        {
            this.db = new DailyMapContext();
        }

        public class EventsModel
        {
            public string name { get; set; }
            public string address { get; set; }
        }

        // GET api/events
        [HttpGet]
        public ActionResult<IEnumerable<Events>> Get()
        {
            // returns all events
            return this.db.Events;
        }

        // GET api/events/{id}
        [HttpGet("{id}")]
        public ActionResult<Events> Get(int id)
        {
            // returns first value that matches id
            return this.db.Events.FirstOrDefault(f => f.Id == id);
        }

        // TODO fix input for name and location, plus time start and end.
        // POST api/events
        //     [HttpPost]
        //     public Events Post([FromBody] EventsModel data)
        //     {
        //         var event = new Events
        //             {
        //                 EventName = data.name,
        //                 EventAddress = data.address
        // };
        //             this.db.Events.Add(event);
        //             this.db.SaveChanges();
        //             return event;
        // }

        // TODO fix patch request for profile
        // TODO possibly add a patch request for email, username, and address
        // PATCH api/events/{id}
        // [HttpPatch("{id}")]
        // public Events Patch(int id, [FromBody] string value)
        // {
        //     var editedValue = this.db.Events.Where(f => f.EmailAddress.Contains(value) || f.UserName.Contains(value) || f.Address.Contains(value));
        //     this.db.SaveChanges(editedValue);
        //     return editedValue;
        // }

        // TODO fix DELETE for events, maybe change params using event name
        // DELETE api/events/{id}
        // [HttpDelete("{id}")]
        // public ActionResult<IEnumerable<Events>> Delete(int id)
        // {
        //     var event = this.db.Events.FirstOrDefault(f => f.Id == id);
        //     this.db.Events.Remove(event);
        //     this.db.SaveChanges();
        //     return this.db.Events;
        // }
    }
}
