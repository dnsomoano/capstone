using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;

namespace capstone.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class ProfilesController : ControllerBase
    {
        private string _getUserId(System.Security.Claims.ClaimsPrincipal user)
        {
            var userId = user.Claims.First(f => f.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Value;
            return userId;
        }

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

        [HttpGet]
        public IOrderedQueryable<Profiles> Get()
        {
            var _userId = _getUserId(User);
            var events = this.db.Profiles.Where(w => w.UserId == _userId).OrderBy(o => o.Events)
            .ThenBy(t => t.DateCreated);
            return events;

        }//END

        // GET api/profiles
        // [HttpGet]
        // public ActionResult<IEnumerable<Profiles>> Get()
        // {
        //     // returns all profiles
        //     return this.db.Profiles;
        // }//END

        // GET api/profiles/{id}
        [HttpGet("{id}")]
        public ActionResult<Profiles> Get(int id)
        {
            // returns first value that matches id
            return this.db.Profiles.FirstOrDefault(f => f.Id == id);
        }//END

        // TODO fix input for email and username, address works fine.
        // POST api/profiles
        [HttpPost]
        public Profiles Post([FromBody] string value)
        {
            var profile = new Profiles { };
            this.db.Profiles.Add(profile);
            this.db.SaveChanges();
            return profile;
        }//END

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
