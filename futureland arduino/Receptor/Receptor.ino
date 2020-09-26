#include "heltec.h"

#define BAND    433E6  //Frecuencia de trabajo

void setup() {
  Heltec.begin(false /*DisplayEnable*/, true /*LoRa*/, true /*Serial*/, true /*PABOOST*/, BAND /*long BAND*/);
}

void loop() {
  int packetSize = LoRa.parsePacket();
  if (packetSize) {
    while (LoRa.available()) {
      Serial.print((String)LoRa.read()); //Imprime valor recibido
    }
  }
}
Serial.available()
