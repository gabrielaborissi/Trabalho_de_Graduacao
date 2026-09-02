using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GAJU
{

    public static class login
    {
        private static Int64 idUser;

        public static Int64 getUserId()
        {
            return idUser;
        }

        public static void setId(Int64 id)
        {
            idUser = id;
        }
    }
    internal class Conexao
    {
        private string str = "";

        public Conexao()
        {
            str = "Data Source = 127.0.0.1,1433;";
            str += "Initial catalog=GAJU;";
            str += "User Id=sa;";
            str += "Password=1234567890";
        }

        public string getStr()
        {
            return str;
        }


    }
}
