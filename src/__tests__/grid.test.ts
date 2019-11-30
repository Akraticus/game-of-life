import { Grid } from "../grid";

test("getArea() returns 3x3 grid with values", () => {
    let grid = new Grid(3, 3);
    let area = grid.getArea(1, 1);
    expect(area[0].length).toBe(3);
    expect(area.length).toBe(3);
})

test("getArea() returns 3x3 area with undefined for cells outside of bounds", () => {
    let grid = new Grid(3, 3);
    // top left corner
    let area = grid.getArea(0, 0);
    expect(area[0].length).toBe(3);
    expect(area.length).toBe(3);

    // top right corner
    area = grid.getArea(2, 0);
    expect(area[0].length).toBe(3);
    expect(area.length).toBe(3);

    // bottom left corner
    area = grid.getArea(0, 2);
    expect(area[0].length).toBe(3);
    expect(area.length).toBe(3);
    
    // bottom right corner
    area = grid.getArea(2, 2);
    expect(area[0].length).toBe(3);
    expect(area.length).toBe(3);
})