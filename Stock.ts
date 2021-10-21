export default class Stock{

    StockData : any;
    TransactionData : any;

    getStockLevel(input : string){
        return new Promise<{sku:string , qty:number}>((resolve,reject) => {
            let stocks = this.StockData.filter((obj) => obj.sku === input); 
            let transactions = this.TransactionData.filter((obj) => obj.sku === input); 
            if(stocks.length === 0 && transactions.length === 0) reject('SKU NOT FOUND IN STOCKS & TRANSACTIONS');
            let stockCount = (stocks.length > 0) ? stocks[0].stock : 0;
            let stockLevel = transactions.reduce( (level , value) => {
                if(value.type === 'order')
                level -= value.qty;
                else if (value.type === 'refund')
                level += value.qty;
                return level;
            },stockCount);
            resolve( { sku : input , qty : ((stockLevel > 0) ? stockLevel : 0)} );
        });
    }

    constructor() {
        this.StockData = require('./assets/stock.json');
        this.TransactionData = require('./assets/transactions.json');
    }
}