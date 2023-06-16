class TopSensor extends Sensor {
  constructor(container, width, height, x, y, bg, flag){
    super(container, width, height, x, y, bg, flag);
  }
  /*
    부모인 Sensor에게 물려받은 재산 중,
    tick()은 현재 left센서에 적용할 수 없다..
    따라서 tick() 은 각 센서별도 코드를 작성하자
  */

  hitCheck() {
    // 적군 수 만큼 반복하면서 공와 각각의 적군간 충돌체크
    for (let i = 0; i < enemyArray.length; i++) {
      for (let j = 0; j < enemyArray[i].length; j++) {
        let result = collisionCheck(this, enemyArray[i][j]);

        //마주치면
        if (result) {
          this.flag=false; //공 그자리에 멈추기
          this.angleDiv.removeChild(this.angleDivImg);//공이 보유한 화살표도 제거
          this.y = enemyArray[i][j].y + this.height;
          break;
        }
      }
    }
  }

  // 공.x + 5, 공.y - 2
  tick() {

    if(this.flag){

      this.hitCheck();

      this.x = ball.x + 5;
      this.y = ball.y - 2;

    }
  }
}