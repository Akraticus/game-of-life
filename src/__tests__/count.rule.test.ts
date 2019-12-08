import { CountRule, CountOperator } from "../rule";
import { Grid } from "../grid";
import { ArraysEqual } from "../util";

test("Constructor verification", () => {
    let rule = new CountRule(0, CountOperator.Above, 1, 1);
    expect(rule.ComparisonValue).toBe(0);
    expect(rule.Operator).toBe(CountOperator.Above);
    expect(rule.ResultState).toBe(1);
})

test("CountOperator.Above produces correct result", () => {
    let area = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    let grid = new Grid(area);
    let rule = new CountRule(0, CountOperator.Above, 3, 1);

    let fasit = [
        [0,1,0],
        [1,1,1],
        [0,1,0]
    ]

    expect(ArraysEqual(grid.TransformByRules([rule]).Cells, fasit)).toBe(true);
})

test("CountOperator.Below produces correct result", () => {
    let area = [
        [0,1,0],
        [0,0,0],
        [0,0,0]
    ]
    let grid = new Grid(area);
    let rule = new CountRule(1, CountOperator.Below, 1, 1);

    let fasit = [
        [0,1,0],
        [0,0,0],
        [1,1,1]
    ]

    expect(ArraysEqual(grid.TransformByRules([rule]).Cells, fasit)).toBe(true);
})