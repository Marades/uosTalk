const mysql = require('mysql')
const config = require('../config/db.json')

global.pool = mysql.createPool(config.mysql)

Date.prototype.mysql = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};

// MariaSql 을 위한 Dateformat. (mysql과 mariasql은 유사하기 때문에 동일한 포맷임)
function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}	