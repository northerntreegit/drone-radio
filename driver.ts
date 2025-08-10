namespace RemoteRadio {
    //% shim=RemoteRadio_nativeInit
    export function init(): void {
        // 初始化你的 radio 驱动
        // 关闭 CRC、关闭 whitening 等，以便跟 nRF24L01、si24r1 等模块通信
    }

    //% shim=RemoteRadio_nativeShutdown
    export function shutdown(): void {
        // 打开 CRC、whitening 功能，恢复原有 radio 设置
    }

    //% shim=RemoteRadio_nativeTest
    export function test(): void {
        // 测试
    }
}

