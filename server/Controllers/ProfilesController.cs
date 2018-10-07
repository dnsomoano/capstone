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
    public class ProfilesController : ControllerBase
    {
        public DailyMapContext db { get; set; }

        public ProfilesController()
        {
            this.db = new DailyMapContext();
        }

        public class ProfilesModel
        {
            public string emailAddress { get; set; }
            public string userName { get; set; }
            public string address { get; set; }
        }

        // GET api/profiles
        [HttpGet]
        public ActionResult<IEnumerable<Profiles>> Get()
        {
            // returns all profiles
            return this.db.Profiles;
        }

        // GET api/profiles/{id}
        [HttpGet("{id}")]
        public ActionResult<Profiles> Get(int id)
        {
            // returns first value that matches id
            return this.db.Profiles.FirstOrDefault(f => f.Id == id);
        }

        // TODO fix input for email and username, address works fine.
        // POST api/profiles
        // [HttpPost]
        // public ActionResult<Profiles> Post([FromQuery] string q, [FromBody] string value)
        // {
        //     var profile = new Profiles { };
        //     this.db.Profiles.Add(profile);
        //     this.db.SaveChanges();
        //     return profile;
        // }

        // TODO fix patch request for profile
        // TODO possibly add a patch request for email, username, and address
        // PATCH api/profiles?q={email}
        // PATCH api/profiles?q={user}
        // PATCH api/profiles?q={address}
        [HttpPatch("{id,q}")]
        public ActionResult<Profiles> Patch([FromQuery] int id, string q, [FromBody] string value)
        {
            this.db.Profiles.FirstOrDefault(f => f.Id == id);
            var profile = new Profiles { };
            if (q == "email")
            {
                profile.EmailAddress = value;
            }
            else if (q == "address")
            {
                profile.Address = value;
            }
            else if (q == "user")
            {
                profile.UserName = value;
            }
            // else
            // {
            //     return "wrong parameter in query!";
            // }
            this.db.Profiles.Add(profile);
            this.db.SaveChanges();
            return profile;
        }

        // DELETE api/profiles/{id}
        [HttpDelete("{id}")]
        public ActionResult<IEnumerable<Profiles>> Delete(int id)
        {
            var profile = this.db.Profiles.FirstOrDefault(f => f.Id == id);
            this.db.Profiles.Remove(profile);
            this.db.SaveChanges();
            return this.db.Profiles;
        }
    }
}
