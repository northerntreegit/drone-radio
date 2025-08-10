namespace radioCore {
    export function init(): void {
        // 初始化你的 radio 驱动
        // 设置频道、关闭 CRC、关闭 whitening 等
    }

    export function shutdown(): void {
        // 停止接收、关闭 SPI、释放资源等
    }
}
