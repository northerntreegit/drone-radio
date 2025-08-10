namespace radioCore {
    export function init(): void {
        // 初始化你的 radio 驱动
        // 关闭 CRC、关闭 whitening 等,以便跟nrf24L01、si24r1等模块通信
    }

    export function shutdown(): void {
        // 打开CRC、whitening功能，恢复原有radio
    }
}
