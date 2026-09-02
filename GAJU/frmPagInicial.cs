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
    public partial class frmPagInicial : Form
    {
        string data;
        SqlConnection con;
        public frmPagInicial()
        {
            InitializeComponent();
        }

        private void menuStrip1_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {

        }

        private void frmPagInicial_Load(object sender, EventArgs e)
        {
            Conexao conexao = new Conexao();
            con = new SqlConnection(conexao.getStr());
        }

        private void btnReg_Click(object sender, EventArgs e)
        {
            frmEventos frmEventos = new frmEventos();
            frmEventos.setData(data);
            
            frmEventos.ShowDialog();
           
        }

        private void btnFiltro_Click(object sender, EventArgs e)
        {
            if (data == "" || data == null)
            {
                MessageBox.Show("Selecione uma data");
            }
            else
            {
                buscaEvento();
                buscaSintoma();
            }


            

        }

        private void buscaEvento()
        {
            SqlCommand cm;
            DataTable dt = new DataTable(); //Representa uma tabela
            SqlDataAdapter da = new SqlDataAdapter(); //Funções para manipular dados
            string sql = "select tipo,descricao,dt_evento from evento where dt_evento = @dt_evento and id_user = @id_user";
            cm = new SqlCommand(sql, con);
            cm.Parameters.Add("id_user" , SqlDbType .Int).Value = login.getUserId();
            cm.Parameters.Add("dt_evento", SqlDbType.VarChar).Value = data;
            

            da.SelectCommand = cm;

            da.Fill(dt);

            dtvEvento.DataSource = null;
            dtvEvento.DataSource = dt;
        }

        private void buscaSintoma()
        {
            SqlCommand cm;
            DataTable dt = new DataTable(); //Representa uma tabela
            SqlDataAdapter da = new SqlDataAdapter(); //Funções para manipular dados
            string sql = "select sintoma1,sintoma2,sintoma3,sintoma4,sintoma5,sintoma6,sintoma7,sintoma8,ciclo from sintomas where dt_sint = @dt_sint and id_user = @id_user";
            cm = new SqlCommand(sql, con);
            cm.Parameters.Add("id_user", SqlDbType.Int).Value = login.getUserId();
            cm.Parameters.Add("dt_sint", SqlDbType.VarChar).Value = data;


            da.SelectCommand = cm;

            da.Fill(dt);

            dtvSintoma.DataSource = null;
            dtvSintoma.DataSource = dt;
        }

        private void monthCalendar1_DateChanged(object sender, DateRangeEventArgs e)
        {
            data = e.Start.ToShortDateString();
        }

        private void monthCalendar1_DateSelected(object sender, DateRangeEventArgs e)
        {
            
        }

        private void dateTimePicker1_ValueChanged(object sender, EventArgs e)
        {
            
            
        }
    }
}
