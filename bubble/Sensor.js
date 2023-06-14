// 4방향의 센서들의 최상위 객체를 정의한다

class Sensor {
  constructor(container, width, height, x, y, bg) {
    this.container = container;
    this.div;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.bg = bg;

    this.div = document.createElement("div");
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";

    this.div.style.position = "absolute";
    this.div.style.left = this.x + "px";
    this.div.style.top = this.y + "px";
    this.div.style.background = this.bg;

    this.container.appendChild(this.div);
  }
  
  // 만일 java언어였다면 아래의 메서드는 내용없는 추상메서드로 선언해야 하지만,
  // ECMAScript 2015는 아직 추상메서드를 지원하지 않으므로,
  // 아래의 메서드를 그냥 비워만 두자...
  tick() {}

  render() {
    this.div.style.left = this.x + "px";
    this.div.style.top = this.y + "px";
  }
}