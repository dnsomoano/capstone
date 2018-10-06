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
        
        public ProfilesController() {
            this.db = new DailyMapContext();
        }
        
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Profiles>> Get()
        {
            return this.db.Profiles;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public Profiles Post([FromBody] string email, userName, Address)
        {
            Profiles.EmailAddress = email;
        }

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
