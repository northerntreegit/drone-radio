#include "pxt.h"

extern "C" {

void RemoteRadio_nativeInit() {
    NRF_RADIO->CRCCNF = 0;
    NRF_RADIO->PCNF1 &= ~(1 << 25);
}

void RemoteRadio_nativeShutdown() {
    NRF_RADIO->CRCCNF = 1;
    NRF_RADIO->PCNF1 |= (1 << 25);
}

void RemoteRadio_nativeTest() {
    // 设置 P0 为输出模式
        NRF_GPIO->DIRSET = (1 << 0);

        // 输出 50Hz 方波，持续 5 秒（约 250 个周期）
        for (int i = 0; i < 250; ++i) {
            NRF_GPIO->OUTSET = (1 << 0); // 高电平
            wait_us(10000);              // 等待 10ms
            NRF_GPIO->OUTCLR = (1 << 0); // 低电平
            wait_us(10000);              // 等待 10ms
        }
}

}
