#include "pxt.h"

extern "C" {

void RemoteRadio_nativeTest() {
    // 硬件底层操作示例：控制 P0 引脚
    
    // 设置 P0 为输出模式
    NRF_GPIO->DIRSET = (1 << 0);
    
    // 快速闪烁 P0 引脚 3 次（可以连接 LED 观察）
    for (int i = 0; i < 3; ++i) {
        NRF_GPIO->OUTSET = (1 << 0); // 高电平
        wait_us(200000);              // 等待 200ms
        NRF_GPIO->OUTCLR = (1 << 0); // 低电平
        wait_us(200000);              // 等待 200ms
    }
    
    // 可以添加更多硬件操作：
    // - 直接操作无线电寄存器
    // - 控制其他 GPIO 引脚
    // - 读取硬件传感器数据
}

}
