using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Drawing.Text;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace GAJU
{
    public partial class Pagina1 : Form
    {
        SqlConnection con;

        public Pagina1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            Conexao conexao = new Conexao();
            con = new SqlConnection(conexao.getStr());
        }

        private void btnRecSenha_Click(object sender, EventArgs e)
        {
            frmRecSenha frmRecSenha = new frmRecSenha();

            frmRecSenha.ShowDialog();


        }

        private void btnEntrar_Click(object sender, EventArgs e)
        {
            Int64 id = 0;

            id = VerifLogin();

            if(id == 0)
            {
                MessageBox.Show("USUARIO NAO CADASTRADO");
            }
            else
            {
                login.setId(id);

                frmPagInicial frmPagInicial = new frmPagInicial();
                this.Hide();
                frmPagInicial.ShowDialog();
                this.Close();
            }



        }

        private void btnCadastro_Click(object sender, EventArgs e)
        {
           frmCadastro frmCadastro = new frmCadastro();

            frmCadastro.ShowDialog();
        }

        private Int64 VerifLogin()
        {
            Int64 id_user = 0;

            SqlCommand cm;
            DataTable dt = new DataTable(); //Representa uma tabela
            SqlDataAdapter da = new SqlDataAdapter(); //Funções para manipular dados
            string sql = "SELECT id_user FROM CADASTRO WHERE email=@email and senha=@senha";

            cm = new SqlCommand(sql, con);
            cm.Parameters.Add("email", SqlDbType.VarChar).Value = txtUser.Text;
            cm.Parameters.Add("senha", SqlDbType.VarChar).Value = txtSenha.Text;//trocar


            da.SelectCommand = cm;

            da.Fill(dt);

            if (dt.Rows.Count > 0)
            {
                id_user = Convert.ToInt64(dt.Rows[0][0].ToString());
            }
            else
            {
                id_user = 0;
            }

            return id_user;

        }


    }
}
