// injecting our modules
import lodashModule from './modules/myLodashModule'
import * as momentModule from './modules/myMomentModule'
import config from './modules/myJsonConfig'
import customModule from './modules/myCustomModule'
import * as _ from 'lodash'
import * as osData from './modules/myOSdata'
const os = require('os');
const EOL = os.EOL;

const OS_DATA = osData.getOSData();

console.log(lodashModule.findByIndex(1))
console.log(momentModule.getCurrentDate())
console.log('Convert moment to Date', new Date(momentModule.getCurrentDate().toISOString()))
console.log('Port:' + config.Port + 'Environment:' + config.Environment)
console.log(customModule.getData())
console.log('get Walker object from JSON array', _.find(customModule.getData(), {name: 'Walker'}))
console.log(`Your System Data: ${EOL}
            OS: ${OS_DATA.type} ${EOL} 
            CPU_NAME: ${OS_DATA.cpuModel} ${EOL} 
            CPU_SPPED: ${OS_DATA.cpuSpeed} ${EOL}
            HOST_NAME: ${OS_DATA.hostName} ${EOL} 
            TOTAL_MEMORY: ${OS_DATA.totalMemory} ${EOL}`)