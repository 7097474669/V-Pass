//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SalesProjectWebApi
{
    using System;
    using System.Collections.Generic;
    
    public partial class UserProfile
    {
        public int ID { get; set; }
        public string MemberID { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public Nullable<int> Contact { get; set; }
        public string Adress { get; set; }
        public string TIN_No { get; set; }
        public string PAN_No { get; set; }
        public string Bank_IFSC_Code { get; set; }
        public string Credit_Limit { get; set; }
        public string EmailID { get; set; }
        public string LoginID { get; set; }
        public string Password { get; set; }
        public string SecurityQuestion { get; set; }
        public string SecurityAnswer { get; set; }
        public Nullable<bool> IsActive { get; set; }
    }
}
