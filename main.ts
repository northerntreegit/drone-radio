//% color=#0fbc11
namespace DroneRadio {
    //% block="硬件测试并显示笑脸" 
    //% blockSetVariable=icon
    export function test(): number {
        // 调用底层硬件操作
        nativeTest()
        // 返回笑脸图标代码
        return 1  // IconNames.Happy 的值是 1
    }

    //% shim=RemoteRadio_nativeTest
    function nativeTest(): void {
        // 这里会调用 C++ 代码进行硬件操作
    }
}