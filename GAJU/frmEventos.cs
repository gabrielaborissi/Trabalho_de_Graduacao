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
    public partial class frmEventos : Form
    {
        string sintoma1 = "";
        string sintoma2 = "";
        string sintoma3 = "";
        string sintoma4 = "";
        string sintoma5 = "";
        string sintoma6 = "";
        string sintoma7 = "";
        string sintoma8 = "";
        string ciclo = "";
        string data;
        SqlConnection con;
        private void frmRegComp_Load(object sender, EventArgs e)
        {
            Conexao conexao = new Conexao();
            con = new SqlConnection(conexao.getStr());
        }

        public frmEventos()
        {
            InitializeComponent();
        }


        private void btnNovoComp_Click(object sender, EventArgs e)
        {
            frmRegComp frmRegComp = new frmRegComp();
            
            frmRegComp.ShowDialog();
           ;
        }

        private void btnSalvar_Click(object sender, EventArgs e)
        {
            if( data == "" || data == null)
            {
                MessageBox.Show("Selecione uma data");
            }
            else
            {
                insereSintoma();
            }
            

        }

        private void insereSintoma ()
        {
            if (chkOK.Checked)
            {
                sintoma1 = "ESTA TUDO BEM";
            }

            if (chkSeio.Checked)
            {
                sintoma2 = "DOR NO SEIO";
            }
            if (chkFadiga.Checked)
            {
                sintoma3 = "FADIGA";
            }
            if (chkColica.Checked)
            {
                sintoma4 = "COLICA";
            }
            if (chkCabeca.Checked)
            {
                sintoma5 = "DOR DE CABECA";
            }
            if (chkAcne.Checked)
            {
                sintoma6 = "ACNE";
            }
            if (rdnFora.Checked)
            {
                sintoma7 = "NÃO TOMEI";
            }
            if (rdnPontual.Checked)
            {
                sintoma8 = "TOMEI PONTUALMENTE";
            }
            if (chkCiclo.Checked)
            {
                ciclo = "CICLO";
            }

            if (chkOK.Checked == false && chkSeio.Checked == false && chkFadiga.Checked == false
                && chkColica.Checked == false && chkCabeca.Checked == false
                && chkAcne.Checked == false && rdnFora.Checked == false && rdnPontual.Checked == false && chkCiclo.Checked == false)
            {
                MessageBox.Show("Informe ao menos um sintoma");
            }
            else {
                Registrar(); }



        }

        private void Registrar()
        {
            string sql = "";
            sql = "INSERT INTO sintomas " +
                "(ID_USER, DT_SINT, SINTOMA1, SINTOMA2, SINTOMA3, SINTOMA4, SINTOMA5, SINTOMA6, SINTOMA7, SINTOMA8, CICLO) " +
                "VALUES (@id_user, @dt_sint ,@sintoma1, @sintoma2, @sintoma3, @sintoma4, @sintoma5, @sintoma6, @sintoma7, @sintoma8, @ciclo)";

            SqlCommand cm;
            cm = new SqlCommand(sql, con);


            cm.Parameters.Add("id_user", SqlDbType.Int).Value = login.getUserId();
            cm.Parameters.Add("dt_sint", SqlDbType.VarChar).Value = data;
            cm.Parameters.Add("sintoma1", SqlDbType.VarChar).Value = sintoma1;
            cm.Parameters.Add("sintoma2", SqlDbType.VarChar).Value = sintoma2;
            cm.Parameters.Add("sintoma3", SqlDbType.VarChar).Value = sintoma3;
            cm.Parameters.Add("sintoma4", SqlDbType.VarChar).Value = sintoma4;
            cm.Parameters.Add("sintoma5", SqlDbType.VarChar).Value = sintoma5;
            cm.Parameters.Add("sintoma6", SqlDbType.VarChar).Value = sintoma6;
            cm.Parameters.Add("sintoma7", SqlDbType.VarChar).Value = sintoma7;
            cm.Parameters.Add("sintoma8", SqlDbType.VarChar).Value = sintoma8;
            cm.Parameters.Add("ciclo", SqlDbType.VarChar).Value = ciclo;

            con.Open();
            int ret = cm.ExecuteNonQuery();
            if (ret > 0)
            {
                MessageBox.Show("Os sintomas foram inseridos");
                //Aqui coloca o limpar               
            }
            con.Close();
        }

        private void frmEventos_Load(object sender, EventArgs e)
        {
            Conexao conexao = new Conexao();
            con = new SqlConnection(conexao.getStr());
        }

        public void setData(string data)
        {
            this.data = data;   
        }
    }
}
