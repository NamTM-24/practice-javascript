//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if (!series) {
      throw new Error("series cannot be empty");
    }
    this.series = series;
  }

  slices(sliceLength) {
    const res = [];
    for (let i = 0; i <= this.series.length - sliceLength; i++) {
      const slice = this.series.substring(i, i + sliceLength);
      res.push(slice);
    }
    return res;
  }
}
