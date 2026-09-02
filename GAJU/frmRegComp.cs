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
    public partial class frmRegComp : Form
    {
        SqlConnection con;
        public frmRegComp()
        {
            InitializeComponent();
        }

        private void frmRegComp_Load(object sender, EventArgs e)
        {
            Conexao conexao = new Conexao();
            con = new SqlConnection(conexao.getStr());
        }

        private void btnSalvar_Click(object sender, EventArgs e)
        {
            if (txtData.Text == "")
            {
                MessageBox.Show("Informe a Data");
            }
            else if (txtDesc.Text == "")
            {
                MessageBox.Show("Informe a Descrição");
            }
            else if (txtTipo.Text == "")
            {
                MessageBox.Show("Informe o Tipo");
            }
            else
            {
                regEvento();
            }
        }

        private void regEvento()
        {
            string sql = "";
            sql = "INSERT INTO EVENTO " +
                "(ID_USER, TIPO, DESCRICAO, DT_EVENTO) " +
                "VALUES (@id_user, @tipo, @descricao, @dt_evento)";

            SqlCommand cm;
            cm = new SqlCommand(sql, con);
            cm.Parameters.Add("id_user", SqlDbType.Int).Value = login.getUserId();
            cm.Parameters.Add("tipo", SqlDbType.VarChar).Value = txtTipo.Text;
            cm.Parameters.Add("descricao", SqlDbType.VarChar).Value = txtDesc.Text;
            cm.Parameters.Add("dt_evento", SqlDbType.Date).Value = txtData.Text;

            con.Open();
            int ret = cm.ExecuteNonQuery();
            if (ret > 0)
            {
                MessageBox.Show("O evento foi inserido!!");
                //Aqui coloca o limpar
                limpar();
            }
            con.Close();

        }

        private void limpar()
        {
            txtData.Text = "";
            txtDesc.Text = "";
            txtTipo.Text = "";

        }

    }
}
