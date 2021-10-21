"use strict";
exports.__esModule = true;
var Stock = /** @class */ (function () {
    function Stock() {
        this.StockData = require('./assets/stock.json');
        this.TransactionData = require('./assets/transactions.json');
    }
    Stock.prototype.getStockLevel = function (input) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var stocks = _this.StockData.filter(function (obj) { return obj.sku === input; });
            var transactions = _this.TransactionData.filter(function (obj) { return obj.sku === input; });
            if (stocks.length === 0 && transactions.length === 0)
                reject('SKU NOT FOUND IN STOCKS & TRANSACTIONS');
            var stockCount = (stocks.length > 0) ? stocks[0].stock : 0;
            var stockLevel = transactions.reduce(function (level, value) {
                if (value.type === 'order')
                    level -= value.qty;
                else if (value.type === 'refund')
                    level += value.qty;
                return level;
            }, stockCount);
            resolve({ sku: input, qty: ((stockLevel > 0) ? stockLevel : 0) });
        });
    };
    return Stock;
}());
exports["default"] = Stock;
