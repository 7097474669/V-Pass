using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SalesProjectWebApi.Models
{
    public class DistributorModel
    {
        public int ID { get; set; }
        public string MemberID { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string EmailID { get; set; }
        public Nullable<long> PhoneNo { get; set; }
        public string FirmName { get; set; }
        public string Adress { get; set; }
        public string TINNo { get; set; }
        public string PANNo { get; set; }
        public string IFSC { get; set; }
        public Nullable<long> BankAcNo { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string SecurityQuestion { get; set; }
        public string SecurityAnswer { get; set; }
        public Nullable<bool> isActive { get; set; }
    }
}