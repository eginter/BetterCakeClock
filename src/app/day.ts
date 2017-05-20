/**
 * Created by eginter on 5/20/17.
 */
export class Day {
  public hours: number;
  public minutes: number;
  constructor(
    public date: Date
  ) {  }

  getTotalMinutes(): number {
    let total = 0;
    if (this.hours) {
      total += this.hours * 60;
    }
    if (this.minutes) {
      total += this.minutes;
    }
    return total;
  }
}
