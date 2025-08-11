//% color=#0fbc11
namespace DroneRadio {
    //% block="硬件测试P0闪烁" 
    export function test(): void {
        // 调用底层硬件操作，让P0脚闪烁
        nativeTest()
    }

    //% shim=RemoteRadio_nativeTest
    function nativeTest(): void {
        // 这里会调用 C++ 代码进行P0引脚闪烁操作
    }
}