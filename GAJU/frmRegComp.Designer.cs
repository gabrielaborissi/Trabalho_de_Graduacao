namespace GAJU
{
    partial class frmRegComp
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
            this.lblRegComp = new System.Windows.Forms.Label();
            this.lblTipo = new System.Windows.Forms.Label();
            this.lblDesc = new System.Windows.Forms.Label();
            this.lblData = new System.Windows.Forms.Label();
            this.txtTipo = new System.Windows.Forms.TextBox();
            this.txtDesc = new System.Windows.Forms.TextBox();
            this.txtData = new System.Windows.Forms.TextBox();
            this.btnSalvar = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // lblRegComp
            // 
            this.lblRegComp.AutoSize = true;
            this.lblRegComp.BackColor = System.Drawing.Color.Transparent;
            this.lblRegComp.Font = new System.Drawing.Font("Modern No. 20", 27.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblRegComp.ForeColor = System.Drawing.Color.MediumVioletRed;
            this.lblRegComp.Location = new System.Drawing.Point(85, 46);
            this.lblRegComp.Name = "lblRegComp";
            this.lblRegComp.Size = new System.Drawing.Size(517, 38);
            this.lblRegComp.TabIndex = 0;
            this.lblRegComp.Text = "REGISTRAR COMPROMISSO";
            this.lblRegComp.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // lblTipo
            // 
            this.lblTipo.AutoSize = true;
            this.lblTipo.BackColor = System.Drawing.Color.Transparent;
            this.lblTipo.Font = new System.Drawing.Font("Modern No. 20", 24F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTipo.ForeColor = System.Drawing.Color.MediumVioletRed;
            this.lblTipo.Location = new System.Drawing.Point(70, 146);
            this.lblTipo.Name = "lblTipo";
            this.lblTipo.Size = new System.Drawing.Size(93, 34);
            this.lblTipo.TabIndex = 1;
            this.lblTipo.Text = "TIPO";
            // 
            // lblDesc
            // 
            this.lblDesc.AutoSize = true;
            this.lblDesc.BackColor = System.Drawing.Color.Transparent;
            this.lblDesc.Font = new System.Drawing.Font("Modern No. 20", 24F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblDesc.ForeColor = System.Drawing.Color.MediumVioletRed;
            this.lblDesc.Location = new System.Drawing.Point(70, 194);
            this.lblDesc.Name = "lblDesc";
            this.lblDesc.Size = new System.Drawing.Size(199, 34);
            this.lblDesc.TabIndex = 2;
            this.lblDesc.Text = "DESCRIÇÃO";
            // 
            // lblData
            // 
            this.lblData.AutoSize = true;
            this.lblData.BackColor = System.Drawing.Color.Transparent;
            this.lblData.Font = new System.Drawing.Font("Modern No. 20", 24F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblData.ForeColor = System.Drawing.Color.MediumVioletRed;
            this.lblData.Location = new System.Drawing.Point(70, 241);
            this.lblData.Name = "lblData";
            this.lblData.Size = new System.Drawing.Size(106, 34);
            this.lblData.TabIndex = 3;
            this.lblData.Text = "DATA";
            // 
            // txtTipo
            // 
            this.txtTipo.BackColor = System.Drawing.Color.Pink;
            this.txtTipo.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtTipo.ForeColor = System.Drawing.Color.Orchid;
            this.txtTipo.Location = new System.Drawing.Point(275, 146);
            this.txtTipo.Name = "txtTipo";
            this.txtTipo.Size = new System.Drawing.Size(264, 29);
            this.txtTipo.TabIndex = 4;
            // 
            // txtDesc
            // 
            this.txtDesc.BackColor = System.Drawing.Color.Pink;
            this.txtDesc.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtDesc.ForeColor = System.Drawing.Color.Orchid;
            this.txtDesc.Location = new System.Drawing.Point(275, 194);
            this.txtDesc.Name = "txtDesc";
            this.txtDesc.Size = new System.Drawing.Size(264, 29);
            this.txtDesc.TabIndex = 5;
            // 
            // txtData
            // 
            this.txtData.BackColor = System.Drawing.Color.Pink;
            this.txtData.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtData.ForeColor = System.Drawing.Color.Orchid;
            this.txtData.Location = new System.Drawing.Point(275, 241);
            this.txtData.Name = "txtData";
            this.txtData.Size = new System.Drawing.Size(264, 29);
            this.txtData.TabIndex = 6;
            // 
            // btnSalvar
            // 
            this.btnSalvar.BackColor = System.Drawing.Color.Pink;
            this.btnSalvar.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.btnSalvar.Font = new System.Drawing.Font("Modern No. 20", 27.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnSalvar.ForeColor = System.Drawing.Color.MediumVioletRed;
            this.btnSalvar.Location = new System.Drawing.Point(232, 318);
            this.btnSalvar.Name = "btnSalvar";
            this.btnSalvar.Size = new System.Drawing.Size(206, 43);
            this.btnSalvar.TabIndex = 7;
            this.btnSalvar.Text = "SALVAR";
            this.btnSalvar.UseVisualStyleBackColor = false;
            this.btnSalvar.Click += new System.EventHandler(this.btnSalvar_Click);
            // 
            // frmRegComp
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackgroundImage = global::GAJU.Properties.Resources.gaju_fundo2;
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Stretch;
            this.ClientSize = new System.Drawing.Size(656, 450);
            this.Controls.Add(this.btnSalvar);
            this.Controls.Add(this.txtData);
            this.Controls.Add(this.txtDesc);
            this.Controls.Add(this.txtTipo);
            this.Controls.Add(this.lblData);
            this.Controls.Add(this.lblDesc);
            this.Controls.Add(this.lblTipo);
            this.Controls.Add(this.lblRegComp);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
            this.Name = "frmRegComp";
            this.Text = "frmRegComp";
            this.Load += new System.EventHandler(this.frmRegComp_Load);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label lblRegComp;
        private System.Windows.Forms.Label lblTipo;
        private System.Windows.Forms.Label lblDesc;
        private System.Windows.Forms.Label lblData;
        private System.Windows.Forms.TextBox txtTipo;
        private System.Windows.Forms.TextBox txtDesc;
        private System.Windows.Forms.TextBox txtData;
        private System.Windows.Forms.Button btnSalvar;
    }
}