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
    public partial class frmCadastro : Form
    {

        SqlConnection con;
        public frmCadastro()
        {
            InitializeComponent();
        }

        private void frmCadastro_Load(object sender, EventArgs e)
        {
            Conexao conexao = new Conexao();
            con = new SqlConnection(conexao.getStr());
        }

        private void btnConfirmar_Click(object sender, EventArgs e)
        {
            if(txtNome.Text == "")
            {
                MessageBox.Show("Informe o nome do usuário");
            }
            else if (txtFone.Text == "")
            {
                MessageBox.Show("Informe o telefone do usuário");
            }
            else if (txtEmail.Text == "")
            {
                MessageBox.Show("Informe o email do usuário");
            }
            else if (txtSenha.Text == "")
            {
                MessageBox.Show("Informe a senha do usuário");
            } else
            {
                buscaEmail();

            }
        }

        
        private void limpar()
        {
            txtNome.Text = "";
            txtEmail.Text = "";
            txtFone.Text = "";
            txtSenha.Text = "";

        }

        private void buscaEmail()
        {
            SqlCommand cm;
            DataTable dt = new DataTable(); //Representa uma tabela
            SqlDataAdapter da = new SqlDataAdapter(); //Funções para manipular dados
            string sql = "select * from cadastro where email like @email";

            cm = new SqlCommand(sql, con);
            cm.Parameters.Add("email", SqlDbType.VarChar).Value = txtEmail.Text + "%";

            da.SelectCommand = cm;

            da.Fill(dt);

            if (dt.Rows.Count > 0)
            {
                MessageBox.Show("Esse e-mail já foi cadastro. Informe um diferente");
            }
            else { regCadastro(); }
            
        }

        private void regCadastro()
        {
            string sql = "";
            sql = "INSERT INTO CADASTRO " +
                "(NOME, EMAIL, FONE, SENHA) " +
                "VALUES (@nome, @email, @fone, @senha)";

            SqlCommand cm;
            cm = new SqlCommand(sql, con);
            cm.Parameters.Add("nome", SqlDbType.VarChar).Value = txtNome.Text;
            cm.Parameters.Add("email", SqlDbType.VarChar).Value = txtEmail.Text;
            cm.Parameters.Add("fone", SqlDbType.VarChar).Value = txtFone.Text;
            cm.Parameters.Add("senha", SqlDbType.VarChar).Value = txtSenha.Text;

            con.Open();
            int ret = cm.ExecuteNonQuery();
            if (ret > 0)
            {
                MessageBox.Show("O cadastro foi inserido!!");
                //Aqui coloca o limpar
                limpar();
            }


        }
    }
}
