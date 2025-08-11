#include "pxt.h"

extern "C" {

void RemoteRadio_nativeTest() {
    // 硬件底层操作：控制 P0 引脚闪烁
    
    // 设置 P0 为输出模式
    NRF_GPIO->DIRSET = (1 << 0);
    
    // P0 引脚闪烁 5 次（可以连接 LED 观察）
    for (int i = 0; i < 5; ++i) {
        NRF_GPIO->OUTSET = (1 << 0); // 高电平
        wait_us(300000);              // 等待 300ms
        NRF_GPIO->OUTCLR = (1 << 0); // 低电平
        wait_us(300000);              // 等待 300ms
    }
    
    // 完成后保持低电平
    NRF_GPIO->OUTCLR = (1 << 0);
}

}
