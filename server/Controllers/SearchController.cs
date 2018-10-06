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
    public class SearchController : ControllerBase
    {
        public DailyMapContext db { get; set; }

        public SearchController()
        {
            this.db = new DailyMapContext();
        }

        // public class SearchModel
        // {
        //     public string emailAddress { get; set; }
        //     public string userName { get; set; }
        //     public string address { get; set; }
        // }

        // GET api/search
        [HttpGet]
        public ActionResult<IEnumerable<Profiles>> Get()
        {
            // returns all profiles
            return this.db.Profiles;
        }

        // GET api/search/{id}
        [HttpGet("{id}")]
        public ActionResult<Profiles> Get(int id)
        {
            // returns first value that matches id
            return this.db.Profiles.FirstOrDefault(f => f.Id == id);
        }
        // GET api/search/{id}
        [HttpGet("{user}")]
        public ActionResult<Profiles> Get(string user)
        {
            // returns first value that matches id
            return this.db.Profiles.FirstOrDefault(f => f.UserName == user);
        }
    }
}
