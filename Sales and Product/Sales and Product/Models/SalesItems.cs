namespace Sales_and_Product.Models
{
    public class SalesItems
    {        
        public string? ProductName { get; set; }
        public string? Manufacturer { get; set; }
        public string? Color { get; set; }
        public string? Brand { get; set; }
        public DateTime? OrderDate { get; set; }
        public string? FiscalMonthOfYearName { get; set; }
        public int? SalesQuantity { get; set; }
        public double? SalesAmount { get; set; }
        public int? CustomerCount { get; set; }
        public int? DeliveredQuantity { get; set; }
    }
}
