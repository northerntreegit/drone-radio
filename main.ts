//% weight=100 color=#0fbc11 icon=""
namespace remoteRadio {
    let stringHandler: (msg: string) => void = null
    let numberHandler: (num: number) => void = null

     /**
     * 打开 RemoteRadio
     */
    //% block
    export function enable(): void {
        radioCore.init()
    }
    
    /**
     * 关闭 RemoteRadio
     */
    //% block
    export function disable(): void {
        radioCore.shutdown()
    }
    
}


