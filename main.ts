//% weight=100 color=#0fbc11 icon="\uf1eb"
namespace LN_Drone {
    //% block="启用远程无线电"
    //% group="无线电控制"
    export function enable_remote(): void {
        RemoteRadio.init()
    }

    //% block="禁用远程无线电"
    //% group="无线电控制"
    export function disable_remote(): void {
        RemoteRadio.shutdown()
    }

    //% block="测试远程无线电"
    //% group="无线电控制"
    export function test_remote(): void {
        RemoteRadio.test()
    }
}