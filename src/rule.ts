export interface IRule {
    ResultState: number;
    IsMatch(area: Array<Array<number>>): boolean;
}

/**
 * Matches the given area against a target pattern.
 */
export class PatternRule implements IRule {
    private _area: Array<Array<number>>;
    private _resultState: number;

    constructor(resultState: number, area: Array<Array<number>>) {
        this._resultState = resultState;
        this._area = area;
    }

    public get ResultState(): number { return this._resultState; }

    public get Area(): Array<Array<number>> { return this._area.slice(); }

    /**
     * Tests each cell in the parameter-area against each corresponding cell in the rule-area.
     * Cells that are undefined in the rule are skipped.
     * @param area The area to match agains the rule.
     */
    IsMatch(area: Array<Array<number>>): boolean {
        for (var ix = 0; ix < 3; ix++) {
            let row = area[ix];
            let ruleRow = this._area[ix];
            for (var iy = 0; iy < 3; iy++) {
                let ruleCell = ruleRow[iy];
                if (ruleCell === undefined) continue;

                if (row[iy] !== ruleCell) return false;
            }
        }

        return true;
    }
}

/**
 * Counts the number of an expected value surrounding a target cell in an area.
 */
export class CountRule implements IRule {
    private _comparisonValue: number;
    private _operator:CountOperator;
    private _valueAmount:number;
    private _resultState: number;

    constructor(comparisonValue: number, operator:CountOperator, valueAmount:number, resultState: number) {
        this._comparisonValue = comparisonValue;
        this._operator = operator;
        this._valueAmount = valueAmount;
        this._resultState = resultState;
    }

    public get ComparisonValue(): number { return this._comparisonValue; }

    public get Operator(): CountOperator { return this._operator; }

    public get ResultState(): number { return this._resultState; }

    IsMatch(area: number[][]): boolean {
        let amount = 0;
        for(let ix = 0; ix < 3; ix++){
            for(let iy = 0; iy < 3; iy++){
                if(area[ix][iy] === this._comparisonValue) amount++;
            }
        }

        switch(this._operator){
            case CountOperator.Above:
                return this._valueAmount < amount;
            case CountOperator.Below:
                return this._valueAmount > amount;
            case CountOperator.Equal:
                return this._valueAmount === amount;
        }

        return false;
    }
}

export enum CountOperator{
    Above,
    Below,
    Equal
}