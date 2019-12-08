import { ArraysEqual } from "./util";

export class Rule {
    private _area: Array<Array<number>>;
    private _resultState: number;

    constructor(resultState: number, area: Array<Array<number>>) {
        this._resultState = resultState;
        this._area = area;
    }

    public get ResultState():number { return this._resultState;}

    public get Area():Array<Array<number>> { return this._area.slice(); }

    IsMatch(area: Array<Array<number>>): boolean {
        return ArraysEqual(this._area, area);
    }
}