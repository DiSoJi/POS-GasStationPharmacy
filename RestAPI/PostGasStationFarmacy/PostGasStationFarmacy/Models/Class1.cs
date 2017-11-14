using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Npgsql;
using Newtonsoft.Json.Linq;

namespace PostGasStationFarmacy.Models
{
    public class Class1
    {
        public JObject Test(int x){
            // Obtain connection string information from the portal
            //
            string Host = "post-gas-station-farmacy.postgres.database.azure.com";
            string User = "katrax@post-gas-station-farmacy";
            string DBname = "postgres";
            string Password = "29Efren03";
            string Port = "5432";
            // Build connection string using parameters from portal
            //
            string connString =  String.Format(
                       "Server={0}; User Id={1}; Database={2}; Port={3}; Password={4};",
                       Host, User, DBname, Port, Password);
            var conn = new NpgsqlConnection(connString);
            Console.Out.WriteLine("Opening connection");
            conn.Open();

            var command = conn.CreateCommand();
            command.CommandText =
            String.Format("INSERT INTO TEST (ID, Nombre) VALUES ({0}, {1});",
                x,
                "\'banana\'"
                );

            JObject response =
                new JObject(
                new JProperty("Code", 200),
                new JProperty("Description", "Succesfull")
                );
            return response;
        }
    }
}