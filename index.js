/* nodejs:true */

function DSN() {
}

module.exports = {
    parse: function(dsn) {
        var m = /^(mysql|pgsql):(.*)/.exec(dsn);
        var rest;
        var o = new DSN();
        if (!m) return null;

        o.protocol = m[1];

        rest = m[2].split(/[:;]/);

        rest.forEach(function(param) {
            var m = /(.*)=(.*)/.exec(param);
            
            if (m[1].match(/^(host|port|dbname|user(name)?|password)$/)) {
                if (m[1] == 'dbname') m[1] = 'database';
                if (m[1] == 'username') m[1] = 'user';
                o[m[1]] = m[2];
            }
            
        });

        return o;
    }
};
