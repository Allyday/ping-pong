import { CanvasNode } from './CanvasNode.js';

export class Ball extends CanvasNode {
  constructor(id, canvas, sizeRatio, color, maxBounceAngle, velocity) {
    super(
      id,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width * sizeRatio,
      canvas.width * sizeRatio,
      color,
      velocity,
    );
    this.angle = Math.random() * Math.PI / 2 - Math.PI / 4; // 90 degree range, turned to the right (towards p2)
    this.maxBounceAngle = maxBounceAngle;
  }

  bouncesFrom(node) {
    /* bounceIntensity = how far the collision is from the center */
    const relativeHeightDiff = (node.y + (node.height / 2)) - this.y;
    const bounceIntensity = relativeHeightDiff / (node.height / 2);
    const bounceAngle = bounceIntensity * this.maxBounceAngle;
    /**
     * deflect ball to the left if it was going right and vice versa
     * only applies for collision with vertical nodes
     */
    this.angle = Math.abs(this.angle) > Math.PI / 2 ? bounceAngle : Math.PI - bounceAngle;
  }
};
