class Entity {
  constructor(speed, size, xPos, yPos, context) {
    this.speed = speed;
    this.width = size;
    this.xPos = xPos;
    this.yPos = yPos;
    this.speedX=speed;
    this.speedY=speed;
    this.color='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    this.context = context;

    this.counter = 0;

    var signHelper = Math.floor(Math.random() * 2);

    if (signHelper == 1) {
      this.sign = -1;
    } else {
      this.sign = 1;
    }
  }

  update() {
    this.context.beginPath();
    this.context.fillStyle=this.color;
    this.context.arc(this.xPos,this.yPos,this.width,0,Math.PI*2,true);
    this.context.closePath();
    this.context.fill();

    if(this.xPos<0 || this.xPos>window.innerWidth) this.speedX=-this.speedX;
    if(this.yPos<0 || this.yPos>window.innerHeight) this.speedY=-this.speedY;

    this.xPos+= this.sign * this.speedX;
    this.yPos+= this.sign * this.speedY;
  }
}
