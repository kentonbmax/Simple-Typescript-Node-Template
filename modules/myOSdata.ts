import { stringify } from "querystring";

const os = require('os');

export interface IOSdata {
    type: string;
    cpuSpeed: number;
    cpuModel: string;
    hostName: string;
    totalMemory: number;

}
export function getOSData(): IOSdata  {
    const cpuDat = os.cpus();
    return {
        type: os.type(),
        cpuSpeed: cpuDat.speed,
        cpuModel: cpuDat.model,
        hostName: os.hostname(),
        totalMemory: os.totalmem()

    }
}