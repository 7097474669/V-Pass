using SalesProjectWebApi.Models;
using SalesProjectWebApi.Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SalesProjectWebApi.Controllers
{
    public class UserProController : ApiController
    {
        public readonly UserInter user;
        public UserProController()
        {

        }
        public UserProController(UserInter user)
        {
            this.user = user;

        }
        [Route("api/SalesProject/GetUserProfiles")]
        [HttpGet]
        public IHttpActionResult GetUserProfiles()
        {
            var sal = user.GetUserProfiles();
            if(sal.Count == 0)
            {
                return NotFound();
            }
            return Ok(sal);

        }

        [Route("api/SalesProject/Create")]
        [HttpPost]
         public IHttpActionResult Create(Userprofile add)
        {
            var sal = user.Create(add);
            if (sal == null)
            {
               return NotFound();
            }
            return Ok(sal);

          }


        [Route("api/SalesProject/Delete/{ID}")]
        [HttpDelete]
        public IHttpActionResult Delete(int ID)
        {
            var sal = user.Delete(ID);
            if(sal!= null)
            {
                return Ok(sal);
            }
             return  NotFound();
        }


    }
}
