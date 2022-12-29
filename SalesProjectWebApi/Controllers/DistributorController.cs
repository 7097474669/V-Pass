using SalesProjectWebApi.Models;
using SalesProjectWebApi.Repo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SalesProjectWebApi.Controllers
{
<<<<<<< Updated upstream:SalesProjectWebApi/Controllers/UserProController.cs
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class UserProController : ApiController
=======
    public class DistributorController : ApiController
>>>>>>> Stashed changes:SalesProjectWebApi/Controllers/DistributorController.cs
    {
        public readonly Distributor Dist;
        public DistributorController()
        {

        }
        public DistributorController(Distributor user)
        {
            this.Dist = user;

        }
        [Route("api/SalesProject/GetDistributor")]
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
         public IHttpActionResult Create(DistributorModel add)
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

        [Route("api/SalesProject/GetAuthorizerProfiles")]
        [HttpGet]
        public IHttpActionResult GetAuthorizerProfiles()
        {
            var sal = user.GetAuthorizerProfiles();
            if(sal != null)
            {
                return Ok(sal);
            }
            return NotFound();
        }

        [Route("api/SalesProject/UpdateAuthorizer")]
        [HttpPost]
        public IHttpActionResult UpdateAuthorizer(AuthorizerProfile auth)
        {
            var sal = user.UpdateAuthorizer(auth);
            if(sal != null)
            {
                return Ok(sal);
            }
            return NotFound();
        }


    }
}
