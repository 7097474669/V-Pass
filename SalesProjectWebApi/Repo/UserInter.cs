using SalesProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SalesProjectWebApi.Repo
{
    public interface UserInter
    {
        List<Userprofile> GetUserProfiles();

        string Create(Userprofile add);

        string Delete(int ID);

        List<AuthorizerProfile> GetAuthorizerProfiles();

        string UpdateAuthorizer(AuthorizerProfile auth);
    }


}
