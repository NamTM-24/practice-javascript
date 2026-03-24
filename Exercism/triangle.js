//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Triangle {
  constructor(...sides) {
    [this.a, this.b, this.c] = [...sides];
  }
  get isTriangle() {
    return (
      this.a + this.b > this.c &&
      this.b + this.c > this.a &&
      this.a + this.c > this.b
    );
  }
  get isEquilateral() {
    return this.isTriangle && this.a === this.b && this.a === this.c;
  }
  get isIsosceles() {
    return (
      this.isTriangle &&
      (this.a === this.b || this.a === this.c || this.b === this.c)
    );
  }
  get isScalene() {
    return this.isTriangle && !this.isEquilateral && !this.isIsosceles;
  }
}
