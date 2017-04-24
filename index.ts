// injecting our modules
import lodashModule from './modules/myLodashModule'
import * as momentModule from './modules/myMomentModule'
import config from './modules/myJsonConfig'
import customModule from './modules/myCustomModule'
import * as _ from 'lodash'

console.log(lodashModule.findByIndex(1))
console.log(momentModule.getCurrentDate())
console.log('Convert moment to Date', new Date(momentModule.getCurrentDate().toISOString()))
console.log('Port:' + config.Port + 'Environment:' + config.Environment)
console.log(customModule.getData())
console.log('get Walker object from JSON array', _.find(customModule.getData(), {name: 'Walker'}))
