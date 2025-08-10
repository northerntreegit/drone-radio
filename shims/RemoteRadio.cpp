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
    ;
}

}
