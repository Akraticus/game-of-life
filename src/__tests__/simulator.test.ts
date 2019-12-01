import {Simulator  } from "../simulator";
import { Grid } from "../grid";
import {  arraysEqual} from "../util";

test("simulator seed is added to iterations", () => {
    let cells = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    let seed = new Grid(cells);
    let sim = new Simulator(seed, []);

    // first element of iterations is seed
    expect(sim.iterations.shift()).toBe(seed);
})