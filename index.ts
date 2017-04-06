// injecting our modules
import lodashModule from './modules/myLodashModule'
import * as momentModule from './modules/myMomentModule'
import config from './modules/myJsonConfig'

console.log(lodashModule.findByIndex(1))
console.log(momentModule.getCurrentDate())
console.log(config.Port)
