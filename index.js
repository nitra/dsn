'use strict'

module.exports = {
  parse: function (dsn) {
    var m = /^(\w+):(.*)/.exec(dsn)
    var rest
    var o = {}
    if (!m) return null

    o.protocol = m[1]

    rest = m[2].split(';')

    rest.forEach(function (param) {
      var m = /(.*)=(.*)/.exec(param)
      switch (m[1]) {
        case 'dbname':
          m[1] = 'database'
          break
        case 'username':
          m[1] = 'user'
          break
        case 'host':
          if (m[2].includes(':')) {
            var parsedHost = m[2].split(':')
            // Host value
            m[2] = parsedHost[0]
            // Port value
            o['port'] = parsedHost[1]
          }
          break
      }

      o[m[1]] = m[2]
    })

    return o
  }
}
