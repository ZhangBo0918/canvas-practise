window.getDirection = (callback) => {
  const keyCodeMap = {
    38: 'up',
    87: 'up',
    39: 'right',
    68: 'right',
    40: 'down',
    83: 'down',
    37: 'left',
    65: 'left'
  };
  let key = '';
  window.addEventListener('keydown', e => {
    console.log(e.key, e.keyCode);
    key = keyCodeMap[e.keyCode] || '';
    callback(key);
  }, false);
}

class Arrow {
  constructor(x = 0, y = 0, color = 'hotpink', angle = 0) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.angle = angle;
  }
  common(ctx) {
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    ctx.moveTo(-20, -10);
    ctx.lineTo(0, -10);
    ctx.lineTo(0, -20);
    ctx.lineTo(20, 0);
    ctx.lineTo(0, 20);
    ctx.lineTo(0, 10);
    ctx.lineTo(-20, 10);
    ctx.closePath();
  }
  /**
   * @param {CanvasRenderingContext2D} ctx
  */
  stroke(ctx) {
    ctx.save();
    this.common(ctx);
    ctx.strokeStyle = this.color;
    ctx.stroke();
    ctx.restore();
  }
  fill(ctx) {
    ctx.save();
    this.common(ctx);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

class Ball {
  constructor(x = 0, y = 0, radius = 20, color = 'hotpink', scale = 1) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.scale = scale;
  }
  common(ctx, isFill = false) {
    ctx.save();
    ctx.scale(typeof this.scale === 'number' ? this.scale : this.scale[0], typeof this.scale === 'number' ? this.scale : this.scale[1])
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.closePath();
    if (isFill) {
      ctx.fillStyle = this.color;
      ctx.fill();
    } else {
      ctx.strokeStyle = this.color;
      ctx.stroke();
    }
    ctx.restore();
  }
  stroke(ctx) {
    this.common(ctx);
  }
  fill(ctx) {
    this.common(ctx, true);
  }
}
