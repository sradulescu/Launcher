'use strict'

const os = require('os')

exports.globalModuleConfig = {
  name: '$global',
  config: [{
    fields: [
      {
        name: 'logLevel',
        display: 'Log Level',
        type: 'values',
        default: 'INFO',
        values: ['DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL']
      },
      {
        name: 'netConnection',
        display: 'Network Connection',
        type: 'values',
        values: Object.keys(os.networkInterfaces()),
        descriptions: Object.values(os.networkInterfaces())
      }
    ]
  }]
}
