export interface SalesItem {
    ProductName: string;
    Manufacturer: string;
    Color: string;
    Brand: string;
    OrderDate: Date;
    FiscalMonthOfYearNames: string;
    SalesQuantity: number;
    SalesAmount: DoubleRange;
    CustomerCount: number
    DeliveredQuantity: number
}