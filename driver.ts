namespace radioCore {
    export function init(): void {
        // 初始化你的 radio 驱动
        // 关闭 CRC、关闭 whitening 等，方便与nrf24L01进行交互
    }

    export function shutdown(): void {
        // 打开CRC、打开whitening功能，恢复原radio功能
    }
}
