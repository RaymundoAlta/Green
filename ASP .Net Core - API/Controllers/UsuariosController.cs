using DataAccess;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Models;
using System.Collections.Generic;

namespace GreenLeavesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private IConfiguration config;

        public UsuariosController(IConfiguration _configuration)
        {
            config = _configuration;
        }
        
        [HttpPost]
        public bool Insert(Usuario usuario)
        {
            daUsuarios da = new daUsuarios();
            var stringconnection = config.GetConnectionString("mainConnection");
            var response = da.Insert(usuario, stringconnection);

            return response;
        }
        
        [HttpGet("listaprueba")]
        public IEnumerable<CiudadEstado> GetList() 
        {
            var list = new List<CiudadEstado>() { 
                new CiudadEstado { Value = 1, Description = "Orizaba pueblo mágico" },
                new CiudadEstado { Value = 2, Description = "Córdoba ciudad del café" },
                new CiudadEstado { Value = 3, Description = "Omealca pueblo cañero" }
            };

            return list;
        }
    }
}
