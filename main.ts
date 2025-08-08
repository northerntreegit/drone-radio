//% weight=100 color=#0fbc11 icon=""
namespace remoteRadio {
    let stringHandler: (msg: string) => void = null
    let numberHandler: (num: number) => void = null

    /**
     * 设置频道
     */
    //% block
    export function setChannel(channel: number): void {
        // 替换为你自己的底层驱动
        radioCore.setGroup(channel)
    }

    /**
     * 发送字符串消息
     */
    //% block
    export function sendMessage(msg: string): void {
        radioCore.sendRaw(msg)
    }

    /**
     * 接收到字符串时
     */
    //% block
    export function onReceivedMessage(handler: (msg: string) => void): void {
        stringHandler = handler
        radioCore.onReceive((raw: string) => {
            if (stringHandler) stringHandler(raw)
        })
    }

    /**
     * 发送数字
     */
    //% block
    export function sendNumber(num: number): void {
        radioCore.sendRaw(num.toString())
    }

    /**
     * 接收到数字时
     */
    //% block
    export function onReceivedNumber(handler: (num: number) => void): void {
        numberHandler = handler
        radioCore.onReceive((raw: string) => {
            let parsed = parseFloat(raw)
            if (!isNaN(parsed) && numberHandler) numberHandler(parsed)
        })
    }

    /**
     * 设置发送功率（0-7）
     */
    //% block
    export function setTransmitPower(level: number): void {
        radioCore.setPower(level)
    }

    /**
     * 设置接收缓冲区大小
     */
    //% block
    export function setBufferSize(size: number): void {
        radioCore.setBufferSize(size)
    }
}

