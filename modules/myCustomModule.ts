
import {ICustom, Custom} from '../classes/custom'
var customCollection:ICustom[] = require('../custom.json')

let obj = {} as any

obj.getData = function() {
    if(customCollection.length > 0 ) {
        return customCollection
    }
}

export default obj

