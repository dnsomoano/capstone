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

        // GET api/profiles
        [HttpGet]
        public ActionResult<IEnumerable<Profiles>> Get()
        {
            return this.db.Profiles;
        }

        // GET api/profiles/{id}
        [HttpGet("{id}")]
        public ActionResult<Profiles> Get(int id)
        {
            // returns first value that matches id
            return this.db.Profiles.FirstOrDefault(f => f.Id == id);
        }

        // POST api/values
        // [HttpPost]
        // public Profiles Post([FromBody] string email, userName, Address)
        // {
        //     Profiles.EmailAddress = email;
        // }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
