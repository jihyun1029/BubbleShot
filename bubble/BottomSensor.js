class BottomSensor extends Sensor {
  /*
    부모인 Sensor에게 물려받은 재산 중,
    tick()은 현재 left센서에 적용할 수 없다..
    따라서 tick() 은 각 센서별도 코드를 작성하자
  */
  // 공.x + 5, 공.y + 공.height
  tick() {
    this.x = ball.x + 5;
    this.y = ball.y + ball.height;
  }
}