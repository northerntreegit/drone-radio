//% weight=100 color=#0fbc11 icon=""
namespace remoteRadio {
    /**
     * 发送字符串消息
     */
    //% block
    export function sendMessage(msg: string): void {
        radio.sendString(msg)
    }

    /**
     * 设置频道
     */
    //% block
    export function setChannel(channel: number): void {
        radio.setGroup(channel)
    }
}
