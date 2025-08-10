//% weight=100 color=#0fbc11 icon=""
namespace LN_Drone {
    let stringHandler: (msg: string) => void = null
    let numberHandler: (num: number) => void = null

     /**
     * 打开 RemoteRadio
     */
    //% block
    export function enable_remote(): void {
        radioCore.init()
    }
    
    /**
     * 关闭 RemoteRadio
     */
    //% block
    export function disable_remote(): void {
        radioCore.shutdown()
    }
    
}




