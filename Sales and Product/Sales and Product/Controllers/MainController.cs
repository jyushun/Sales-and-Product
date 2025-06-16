using CsvHelper.Configuration;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sales_and_Product.Models;
using System.Formats.Asn1;
using System.Globalization;

namespace Sales_and_Product.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MainController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetData()
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Data", "Sales and Product.csv");
            try
            {
                var config = new CsvConfiguration(CultureInfo.InvariantCulture)
                {
                    PrepareHeaderForMatch = args => args.Header.Replace(" ", "")
                };

                using var reader = new StreamReader(filePath);
                using var csv = new CsvHelper.CsvReader(reader, config);

                var newSalesItem = csv.GetRecords<SalesItems>().ToList();

                return Ok(newSalesItem);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}

