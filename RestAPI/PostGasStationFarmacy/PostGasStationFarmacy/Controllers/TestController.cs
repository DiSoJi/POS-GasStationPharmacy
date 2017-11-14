using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using System.Web.Http.Results;
using System.Web.Mvc;
using PostGasStationFarmacy.Models;
//using EntityFramework;


namespace PostGasStationFarmacy.Controllers
{
    public class TestController : ApiController
    {
        //public IEnumerable<test>
        public JObject Get()
        {
            JObject response =
                new JObject(
                new JProperty("Code", 200),
                new JProperty("Description", "Succesfull")
                );
            return response;
        }

        public JObject Post(int x)
        {
            Class1 test = new Class1();
            JObject response =  test.Test(x);
            return response;
        }
    }
}
