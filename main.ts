//% weight=100 color=#0fbc11 icon=""
namespace LN_Drone {
    /** 打开 RemoteRadio */
    //% block
    export function enable_remote(): void {
        RemoteRadio.init()
    }

    /** 关闭 RemoteRadio */
    //% block
    export function disable_remote(): void {
        RemoteRadio.shutdown()
    }

    /** 测试 RemoteRadio */
    //% block
    export function test_remote(): void {
        RemoteRadio.test()
    }
}









