using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace B1rdanisman.Models
{
    public class Birdanisman
    {
        public int Id { get; set; }
        public string AdSoyad { get; set; }
        public string Email { get; set; }
        public string SirketAdi { get; set; }
        public string Mesaj { get; set; }
        public DateTime Tarih { get; set; }
    }
}