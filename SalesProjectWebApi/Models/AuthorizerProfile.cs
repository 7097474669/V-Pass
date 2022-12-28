using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SalesProjectWebApi.Models
{
    public class AuthorizerProfile
    {
        public int ID { get; set; }
        public string MemberID { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Conact_Number { get; set; }
        public string Address { get; set; }
    }
}