using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Rest_Api.Controllers
{
    [Route("client")]
    public class ClientController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
