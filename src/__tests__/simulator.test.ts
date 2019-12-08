import {Simulator  } from "../simulator";
import { Grid } from "../grid";
import {  ArraysEqual} from "../util";
import { Rule } from "../rule";

test("simulator seed is added to iterations", () => {
    let cells = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    let seed = new Grid(cells);
    let sim = new Simulator(seed, []);

    // first element of iterations is seed
    expect(sim.Iterations.shift()).toBe(seed);
})

test("simulator seed is added to iterations", async () => {
    let cells = [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]
    ]
    let seed = new Grid(cells);
    
    let ruleCells = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    let rules = [
        new Rule(1, ruleCells)
    ];

    let sim = new Simulator(seed, rules);

    let expectedResult = [
        [0,0,0,0,0],
        [0,1,1,1,0],
        [0,1,1,1,0],
        [0,1,1,1,0],
        [0,0,0,0,0]
    ]

    sim.Iterate();
    expect(ArraysEqual(sim.Iterations.pop().Cells, expectedResult)).toBe(true);
})