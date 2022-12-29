using SalesProjectWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SalesProjectWebApi.Repo
{
<<<<<<< Updated upstream
    public class UserClass : UserInter
=======

    public interface UserInter
    {
        List<DistributorModel> GetUserProfiles();

        string Create(DistributorModel add);

        string Delete(int ID);
    }



    public class UserClass:UserInter
>>>>>>> Stashed changes
    {
        SalesProjectEntities sale = new SalesProjectEntities();

        public List<UserProfile> GetUserProfiles()
        {
            throw new NotImplementedException();
        }

<<<<<<< Updated upstream
        List<Userprofile> UserInter.GetUserProfiles()
        {
            var list = sale.UserProfiles.Select(s => new Userprofile()
=======
        List<DistributorModel> UserInter.GetUserProfiles()
        { 
            var list =sale.UserProfiles.Select(s => new DistributorModel()
>>>>>>> Stashed changes
            {
                ID = s.ID,
                MemberID = s.MemberID,
                FirstName = s.FirstName,
                MiddleName = s.MiddleName,
                LastName = s.LastName,
                Contact = s.Contact,
                Adress = s.Adress,
                TIN_No = s.TIN_No,
                PAN_No = s.PAN_No,
                Bank_IFSC_Code = s.Bank_IFSC_Code,
                Credit_Limit = s.Credit_Limit,
                EmailID = s.EmailID,
                LoginID = s.LoginID,
                Password = s.Password,
                SecurityQuestion = s.SecurityQuestion,
                SecurityAnswer = s.SecurityAnswer,
                IsActive = s.IsActive
            }).ToList<DistributorModel>();
            sale.Dispose();
            return list;
        }

<<<<<<< Updated upstream
        string UserInter.Create(Userprofile add)
=======
        string  UserInter.Create(DistributorModel add)
>>>>>>> Stashed changes
        {
            var salelist = sale.UserProfiles.Where(s => s.ID == add.ID).FirstOrDefault();
            if (salelist == null)
            {
                sale.UserProfiles.Add(new UserProfile()
                {
                    ID = add.ID,
                    MemberID = add.MemberID,
                    FirstName = add.FirstName,
                    MiddleName = add.MiddleName,
                    LastName = add.LastName,
                    Contact = add.Contact,
                    Adress = add.Adress,
                    TIN_No = add.TIN_No,
                    PAN_No = add.PAN_No,
                    Bank_IFSC_Code = add.Bank_IFSC_Code,
                    Credit_Limit = add.Credit_Limit,
                    EmailID = add.EmailID,
                    LoginID = add.LoginID,
                    Password = add.Password,
                    SecurityQuestion = add.SecurityQuestion,
                    SecurityAnswer = add.SecurityAnswer,
                    IsActive = add.IsActive

                });
                sale.SaveChanges();
                sale.Dispose();
                return "Added";
            }
            else {
                salelist.ID = add.ID;
                salelist.MemberID = add.MemberID;
                salelist.FirstName = add.FirstName;
                salelist.MiddleName = add.MiddleName;
                salelist.LastName = add.LastName;
                salelist.Contact = add.Contact;
                salelist.Adress = add.Adress;
                salelist.TIN_No = add.TIN_No;
                salelist.PAN_No = add.PAN_No;
                salelist.Bank_IFSC_Code = add.Bank_IFSC_Code;
                salelist.Credit_Limit = add.Credit_Limit;
                salelist.EmailID = add.EmailID;
                salelist.LoginID = add.LoginID;
                salelist.Password = add.Password;
                salelist.SecurityQuestion = add.SecurityQuestion;
                salelist.SecurityAnswer = add.SecurityAnswer;
                salelist.IsActive = add.IsActive;

            }
            sale.SaveChanges();
            sale.Dispose();
            return "Updated";
        }

        string UserInter.Delete(int ID)
        {
            var salelist = sale.UserProfiles.Where(e => e.ID == ID).FirstOrDefault();
            if (salelist != null)
            {
                sale.UserProfiles.Remove(salelist);
            };
            sale.SaveChanges();
            sale.Dispose();
            return "Deleted";
        }

        List<AuthorizerProfile> UserInter.GetAuthorizerProfiles()
        {
            var salelist = sale.Authorizer_Profiles.Select(e => new AuthorizerProfile()
            {
                ID = e.ID,
                MemberID = e.MemberID,
                First_Name = e.First_Name,
                Last_Name = e.Last_Name,
                Conact_Number = e.Conact_Number,
                Address = e.Address
            }).ToList<AuthorizerProfile>();
            sale.Dispose();
            return salelist;
        }

        string UserInter.UpdateAuthorizer(AuthorizerProfile auth)
        {
            var salelist = sale.Authorizer_Profiles.Where(e => e.ID == auth.ID).FirstOrDefault();
            if(salelist == null)
            {
                sale.Authorizer_Profiles.Add(new Authorizer_Profile()
                {

                    ID = auth.ID,
                    MemberID = auth.MemberID,
                    First_Name = auth.First_Name,
                    Last_Name = auth.Last_Name,
                    Conact_Number = auth.Conact_Number,
                    Address = auth.Address
                });
                sale.SaveChanges();
                sale.Dispose();
                return "Added";
            }
            else
            {
                salelist.ID = auth.ID;
                salelist.MemberID = auth.MemberID;
                salelist.First_Name = auth.First_Name;
                salelist.Last_Name = auth.Last_Name;
                salelist.Conact_Number = auth.Conact_Number;
                salelist.Address = auth.Address;


                sale.SaveChanges();
                sale.Dispose();
                return "updated";
            }
        }

    }
}