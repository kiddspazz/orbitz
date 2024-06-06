class V {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  minus(v) {
    return new V(this.x - v.x, this.y - v.y);
  }

  plus(v) {
    return new V(this.x + v.x, this.y + v.y);
  }

  times(int) {
    return new V(this.x * int, this.y * int);
  }

  norm() {
    return new V(this.x / this.length(), this.y / this.length());
  }

  length() {
    return (Math.sqrt((this.x * this.x) + (this.y * this.y)));
  }

  rotate(angle) {
    return new V(
      this.x * (Math.cos(angle)) - this.y * (Math.sin(angle)),
      this.y * (Math.cos(angle)) + this.x * (Math.sin(angle)),
    );
  }
}

export default V;
