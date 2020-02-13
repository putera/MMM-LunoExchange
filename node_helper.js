/*

    Luno Exchange Marketprice
    ====================================

    Developer : Zulkifli Mohamed (putera)
    E-mail : mr.putera@gmail.com

*/

var NodeHelper = require('node_helper');
var request = require('request');
var async = require('async');

module.exports = NodeHelper.create(
{
    start: function() {
        console.log('Luno Exchange Marketprice module started...');
    },

    getPrice: function(currency) {
        var self = this;
        var priceBuy = 0.00; var priceSell = 0.00; var lastTrade = 0.00;
        currency = currency.toUpperCase();

        var urlTicker = 'https://www.luno.com/ajax/1/ticker?pair=XBT' + currency;

        async.parallel({
            market: function(callback) {
                request({ url: urlTicker, method: 'GET' }, function(error, response, body) {
                    if (!error && response.statusCode == 200) {
                        callback(error, body);
                    }
                });
            }
    	},
        function(error, result) {
            if (error) {
                console.log('[MMM-LUNO-EXCHANGE] ' + error);
            }

            var r = JSON.parse(result.market);
            if (r) {
                priceBuy = r.bid;
                priceSell = r.ask;
                lastTrade = r.last_trade;
            }

            var price = {buy: priceBuy, sell: priceSell, last_trade: lastTrade};
            self.sendSocketNotification('PRICE_RESULT', price);
        });
    },

    socketNotificationReceived: function(notification, payload)
    {
        if (notification === 'GET_PRICE') {
            this.getPrice(payload);
        }
    }
});
