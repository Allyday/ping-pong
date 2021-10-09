export class CanvasNode {
  constructor(id, x, y, width, height, color, velocity) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocity = velocity;
  }

  #isWithinWidthsOf(node) {
    return (this.x + this.width >= node.x) && (this.x <= node.x + node.width);
  }

  #isWithinHeightsOf(node) {
    return (this.y + this.height >= node.y) && (this.y <= node.y + node.height);
  }

  collidesWith(node) {
    return this.#isWithinWidthsOf(node) && this.#isWithinHeightsOf(node);
  }

  hitsCeiling() {
    return this.y <= 0;
  }

  hitsFloor(canvas) {
    return this.y + this.height >= canvas.height;
  }

  accelerate(a = 1.1) {
    this.velocity *= a;
  }

  moves(vector, limitNodes) {
    if (!limitNodes) {
      this.x += vector.x * this.velocity;
      this.y += vector.y * this.velocity;
    } else {
      const { leftLimit, rightLimit } = limitNodes;
      
      let newX;
      const calculatedNewX = this.x + vector.x * this.velocity;
      /* prevent ball & paddle overlap when collide */
      if (vector.x < 0 && this.#isWithinHeightsOf(leftLimit))
        newX = Math.max(calculatedNewX, leftLimit.x + leftLimit.width);
      else if (vector.x > 0 && this.#isWithinHeightsOf(rightLimit))
        newX = Math.min(calculatedNewX, rightLimit.x - this.width);
      else newX = calculatedNewX;

      this.x = newX;
      this.y += vector.y * this.velocity;
    }
  }
};
