//------------------------------------------------------------------------------
// <auto-generated>
//    Este código se generó a partir de una plantilla.
//
//    Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//    Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EntityFramework
{
    using System;
    using System.Collections.Generic;
    
    public partial class empleado
    {
        public empleado()
        {
            this.apertura_caja = new HashSet<apertura_caja>();
            this.rol_empleado = new HashSet<rol_empleado>();
            this.sucursal = new HashSet<sucursal>();
        }
    
        public int cedula { get; set; }
        public System.DateTime fnacimiento { get; set; }
        public string contraseÃ_a { get; set; }
        public string nombre1 { get; set; }
        public string nombre2 { get; set; }
        public string apellido1 { get; set; }
        public string apellido2 { get; set; }
        public string provincia { get; set; }
        public string canton { get; set; }
        public string distrito { get; set; }
        public string indicaciones { get; set; }
        public Nullable<int> telefono { get; set; }
        public Nullable<int> idcompaÃ_ia { get; set; }
        public Nullable<int> idsucursal { get; set; }
        public string activo { get; set; }
    
        public virtual ICollection<apertura_caja> apertura_caja { get; set; }
        public virtual compaÃ_ia compaÃ_ia { get; set; }
        public virtual ICollection<rol_empleado> rol_empleado { get; set; }
        public virtual ICollection<sucursal> sucursal { get; set; }
        public virtual sucursal sucursal1 { get; set; }
    }
}
