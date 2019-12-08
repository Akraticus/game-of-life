import { Grid } from "../grid";
import { Rule } from "../rule";
import { ArraysEqual } from "../util";

test("getArea() returns 3x3 grid with values", () => {
    let cells = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    let grid = new Grid(cells);
    let area = grid.GetArea(1, 1);
    expect(area[0].length).toBe(3);
    expect(area.length).toBe(3);
})

test("getArea() returns 3x3 area with undefined for cells outside of bounds", () => {
    let cells = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    let grid = new Grid(cells);
    // top left corner
    let area = grid.GetArea(0, 0);
    expect(area[0].length).toBe(3);
    expect(area.length).toBe(3);

    // top right corner
    area = grid.GetArea(2, 0);
    expect(area[0].length).toBe(3);
    expect(area.length).toBe(3);

    // bottom left corner
    area = grid.GetArea(0, 2);
    expect(area[0].length).toBe(3);
    expect(area.length).toBe(3);

    // bottom right corner
    area = grid.GetArea(2, 2);
    expect(area[0].length).toBe(3);
    expect(area.length).toBe(3);
})

test("transformByRules() returns expected grid", () => {
    let cells = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    let grid = new Grid(cells);
    let ruleArea = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    let rules = [new Rule(1, ruleArea)];
    let result = grid.TransformByRules(rules);
    let expectedResult = [
        [0,0,0],
        [0,1,0],
        [0,0,0]
    ];
    expect(ArraysEqual(result.Cells, expectedResult)).toBe(true);
})

test("transformByRules() returns expected grid - advanced", () => {
    let cells = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [0, 0, 0, 0, 0]
    ];
    let grid = new Grid(cells);

    let rule1 = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    let rule2 = [
        [undefined, undefined, undefined],
        [undefined, 0, 0],
        [undefined, 0, 0]
    ];

    let rule3 = [
        [0, 0, 0],
        [1, 0, 1],
        [0, 0, 0]
    ];

    let rules = [
        new Rule(1, rule1),
        new Rule(1, rule2),
        new Rule(1, rule3)
    ];

    let result = grid.TransformByRules(rules);
    let expectedResult = [
        [1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0]
    ];
    expect(ArraysEqual(result.Cells, expectedResult)).toBe(true);
})