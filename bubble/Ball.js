class Ball extends GameObject {
  constructor(container, width, height, x, y, velX, velY, bg, flag) {
    super(container, width, height, x, y, velX, velY, bg);

    this.leftSensor = new LeftSensor(this.container, 2, 30, this.x - 2, this.y + 7, "purple", flag);
    this.rightSensor = new RightSensor(this.container, 2, 30, this.x + this.width, this.y + 7, "purple", flag);
    this.topSensor = new TopSensor(this.container, 30, 2, this.x + 5, this.y - 2, "purple", flag);
    this.bottomSensor = new BottomSensor(this.container, 30, 2, this.x + 5, this.y + this.height, "purple", flag);

    this.r = 90;//공의 각도정보 360
    this.flag=flag; //현재 공의 움직임 가능성 여부를 결정

    if(this.flag){
      this.createAngle();
    }

    this.sensorArray=[];
    this.sensorArray.push(this.leftSensor);
    this.sensorArray.push(this.rightSensor);
    this.sensorArray.push(this.topSensor);
    this.sensorArray.push(this.bottomSensor);
  }

  //공 중앙에 각도기 생성하기
  createAngle() {
    this.angleDiv = document.createElement("div");
    this.angleDiv.style.width = 40 + "px";
    this.angleDiv.style.height = 40 + "px";

    this.angleDiv.style.position = "absolute";
    this.angleDiv.style.left = 220 + "px";
    this.angleDiv.style.top = 470 + "px";

    // this.angleDiv.style.background = "black";

    this.angleDivImg = document.createElement("img");
    this.angleDivImg.src = "./images/arrow.png";
    this.angleDivImg.style.width = 100 + "%";
    this.angleDivImg.style.transform="scaleY(-1)";

    this.container.appendChild(this.angleDiv);
    this.angleDiv.appendChild(this.angleDivImg);

    this.fireFlag = false;
  }

  //볼이 보유한 각도기의 각도조절 렌더링
  renderAngle() {
    this.angleDiv.style.transform = "rotate(" + (this.r + 90) + "deg)";
  }

  tick() {
    if(this.flag){
           
      if (this.fireFlag) {
        this.x += 1;
        let radians = this.r * Math.PI / 180;
        let tan = Math.tan(radians);
        this.y -= Math.abs(tan);
        // console.log(this.y);
      }
      
      // this.y = Math.tan(30 * Math.PI/180);
      
      // 공이 보유한 센서막대들에 대해서도 tick()
      this.leftSensor.tick(); // 오버라이딩한 tick() 메서드
      this.leftSensor.render(); // Sensor부모의 render() 메서드
      
      this.rightSensor.tick();
      this.rightSensor.render();
      
      this.topSensor.tick();
      this.topSensor.render();
      
      this.bottomSensor.tick();
      this.bottomSensor.render();
      

      this.renderAngle();
      
      // this.hitCheck();
    }
    
  }
}