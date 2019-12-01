import { arraysEqual } from "./util";

export class Rule {
    private Area: Array<Array<number>>;
    private ResultState: number;

    constructor(resultState: number, area: Array<Array<number>>) {
        this.ResultState = resultState;
        this.Area = area;
    }

    getResultState(): number { return this.ResultState; }

    getArea(): Array<Array<number>> { return this.Area; }

    isMatch(area: Array<Array<number>>): boolean {
        return arraysEqual(this.Area, area);
    }
}