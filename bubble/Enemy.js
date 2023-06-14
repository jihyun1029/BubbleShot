class Enemy extends GameObject {
  constructor(container, width, height, x, y, velX, velY, bg) {
    super(container, width, height, x, y, velX, velY, bg);

    this.leftSensor = new LeftSensor(this.container, 2, 30, this.x - 2, this.y + 7, "purple");
    this.rightSensor = new RightSensor(this.container, 2, 30, this.x + this.width, this.y + 7, "purple");
    this.topSensor = new TopSensor(this.container, 30, 2, this.x + 5, this.y - 2, "purple");
    this.bottomSensor = new BottomSensor(this.container, 30, 2, this.x + 5, this.y + this.height, "purple");
  }

  tick() {
    // 공이 보유한 센서막대들에 대해서도 tick()
    this.leftSensor.tick(); // 오버라이딩한 tick() 메서드
    this.leftSensor.render(); // Sensor부모의 render() 메서드

    this.rightSensor.tick();
    this.rightSensor.render();

    this.topSensor.tick();
    this.topSensor.render();

    this.bottomSensor.tick();
    this.bottomSensor.render();
  }
}