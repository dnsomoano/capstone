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

        public class ResponseObject
        {
            public bool WasSuccessful { get; set; }
            public Object result { get; set; }
        }

        // GET api/search
        // [HttpGet]
        // public ActionResult<IEnumerable<Profiles>> Get()
        // {
        //     // returns all profiles
        //     return this.db.Profiles;
        // }

        // // GET api/search?q={title}
        // [HttpGet("{q}")]
        // public ActionResult<ResponseObject> Get([FromQuery] string q)
        // {
        //     var _rv = new ResponseObject
        //     {
        //         WasSuccessful = true,
        //         result = this.db
        //         .Profiles
        //         .Where(f => f.UserName.Contains(q) || f.EmailAddress.Contains(q))
        //         .OrderBy(o => o.UserName),
        //     };
        //     if (q != null)
        //     {
        //         return _rv;
        //     }
        //     else
        //     {
        //         _rv.WasSuccessful = false;
        //         _rv.result = "Question not found";
        //         return _rv;
        //     }
        // }
    }
}
