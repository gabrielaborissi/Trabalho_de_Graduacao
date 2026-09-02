using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace GAJU
{
    public partial class frmRecSenha : Form
    {
        SqlConnection con;
        public frmRecSenha()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            alteraSenha();
        }

        private void alteraSenha()
        {
            string sql = "";
            sql = "UPDATE cadastro SET " +
              "SENHA=@senha" +
              " WHERE email=@email";

            SqlCommand cm;
            cm = new SqlCommand(sql, con);
            cm.Parameters.Add("email", SqlDbType.VarChar).Value = txtEmail.Text;
            cm.Parameters.Add("senha", SqlDbType.VarChar).Value = txtNSenha.Text;
            

            con.Open();
            int ret = cm.ExecuteNonQuery();
            if (ret > 0)
            {
                MessageBox.Show("A senha foi alterada!!");
                //Aqui coloca o limpar
                //limpar();
            }
            con.Close();
        }

        private void frmRecSenha_Load(object sender, EventArgs e)
        {
            Conexao conexao = new Conexao();
            con = new SqlConnection(conexao.getStr());
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void txtEmail_TextChanged(object sender, EventArgs e)
        {

        }

        private void label2_Click(object sender, EventArgs e)
        {

        }

        private void txtNSenha_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
