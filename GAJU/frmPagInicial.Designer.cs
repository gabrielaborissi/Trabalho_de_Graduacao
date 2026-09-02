namespace GAJU
{
    partial class frmPagInicial
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.dtvEvento = new System.Windows.Forms.DataGridView();
            this.btnFiltro = new System.Windows.Forms.Button();
            this.btnReg = new System.Windows.Forms.Button();
            this.monthCalendar1 = new System.Windows.Forms.MonthCalendar();
            this.dtvSintoma = new System.Windows.Forms.DataGridView();
            ((System.ComponentModel.ISupportInitialize)(this.dtvEvento)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dtvSintoma)).BeginInit();
            this.SuspendLayout();
            // 
            // dtvEvento
            // 
            this.dtvEvento.AllowUserToAddRows = false;
            this.dtvEvento.AllowUserToDeleteRows = false;
            this.dtvEvento.BackgroundColor = System.Drawing.Color.Pink;
            this.dtvEvento.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dtvEvento.Location = new System.Drawing.Point(267, 18);
            this.dtvEvento.Name = "dtvEvento";
            this.dtvEvento.ReadOnly = true;
            this.dtvEvento.Size = new System.Drawing.Size(713, 162);
            this.dtvEvento.TabIndex = 7;
            // 
            // btnFiltro
            // 
            this.btnFiltro.BackColor = System.Drawing.Color.Pink;
            this.btnFiltro.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnFiltro.Font = new System.Drawing.Font("Modern No. 20", 27.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnFiltro.ForeColor = System.Drawing.Color.MediumVioletRed;
            this.btnFiltro.Location = new System.Drawing.Point(236, 401);
            this.btnFiltro.Name = "btnFiltro";
            this.btnFiltro.Size = new System.Drawing.Size(261, 45);
            this.btnFiltro.TabIndex = 8;
            this.btnFiltro.Text = "FILTRAR";
            this.btnFiltro.UseVisualStyleBackColor = false;
            this.btnFiltro.Click += new System.EventHandler(this.btnFiltro_Click);
            // 
            // btnReg
            // 
            this.btnReg.BackColor = System.Drawing.Color.Pink;
            this.btnReg.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnReg.Font = new System.Drawing.Font("Modern No. 20", 27.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnReg.ForeColor = System.Drawing.Color.MediumVioletRed;
            this.btnReg.Location = new System.Drawing.Point(517, 401);
            this.btnReg.Name = "btnReg";
            this.btnReg.Size = new System.Drawing.Size(261, 45);
            this.btnReg.TabIndex = 9;
            this.btnReg.Text = "REGISTRAR EVENTO";
            this.btnReg.UseVisualStyleBackColor = false;
            this.btnReg.Click += new System.EventHandler(this.btnReg_Click);
            // 
            // monthCalendar1
            // 
            this.monthCalendar1.BackColor = System.Drawing.Color.White;
            this.monthCalendar1.Location = new System.Drawing.Point(18, 18);
            this.monthCalendar1.Name = "monthCalendar1";
            this.monthCalendar1.TabIndex = 12;
            this.monthCalendar1.DateChanged += new System.Windows.Forms.DateRangeEventHandler(this.monthCalendar1_DateChanged);
            this.monthCalendar1.DateSelected += new System.Windows.Forms.DateRangeEventHandler(this.monthCalendar1_DateSelected);
            // 
            // dtvSintoma
            // 
            this.dtvSintoma.AllowUserToAddRows = false;
            this.dtvSintoma.AllowUserToDeleteRows = false;
            this.dtvSintoma.BackgroundColor = System.Drawing.Color.Pink;
            this.dtvSintoma.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dtvSintoma.Location = new System.Drawing.Point(18, 206);
            this.dtvSintoma.Name = "dtvSintoma";
            this.dtvSintoma.ReadOnly = true;
            this.dtvSintoma.Size = new System.Drawing.Size(962, 150);
            this.dtvSintoma.TabIndex = 13;
            // 
            // frmPagInicial
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackgroundImage = global::GAJU.Properties.Resources.gaju_fundo2;
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(992, 495);
            this.Controls.Add(this.dtvSintoma);
            this.Controls.Add(this.monthCalendar1);
            this.Controls.Add(this.btnReg);
            this.Controls.Add(this.btnFiltro);
            this.Controls.Add(this.dtvEvento);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Name = "frmPagInicial";
            this.Text = "frmPagInicial";
            this.Load += new System.EventHandler(this.frmPagInicial_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dtvEvento)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dtvSintoma)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion
        private System.Windows.Forms.DataGridView dtvEvento;
        private System.Windows.Forms.Button btnFiltro;
        private System.Windows.Forms.Button btnReg;
        private System.Windows.Forms.MonthCalendar monthCalendar1;
        private System.Windows.Forms.DataGridView dtvSintoma;
    }
}