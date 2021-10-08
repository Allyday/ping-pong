import { CanvasNode } from './CanvasNode.js';

export class Ball extends CanvasNode {
  constructor(id, canvas, sizeRatio, color) {
    super(id, canvas.width / 2, canvas.height / 2, canvas.width * sizeRatio, canvas.width * sizeRatio, color);
    this.angle = Math.random() * Math.PI / 2 - Math.PI / 4; // 90 degree range, turned to the right (towards p2)
  }
};
