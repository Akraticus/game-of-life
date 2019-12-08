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

    /**
     * Tests each cell in the parameter-area against each corresponding cell in the rule-area.
     * Cells that are undefined in the rule are skipped.
     * @param area The area to match agains the rule.
     */
    IsMatch(area: Array<Array<number>>): boolean {        
        for(var ix = 0; ix < 3; ix++){
            let row = area[ix];
            let ruleRow = this._area[ix];
            for(var iy = 0; iy < 3; iy++){
                let ruleCell = ruleRow[iy];
                if(ruleCell === undefined) continue;
                
                if(row[iy] !== ruleCell) return false;
            }
        }

        return true;
    }
}