export class Grid {
    /// single cell at x, y => Cells[x][y]
    private Cells: Array<Array<number>>;

    constructor(sizeX: number, sizeY: number) {
        this.Cells = new Array<Array<number>>(sizeX);
        let row = new Array<number>(sizeY).fill(0);
        this.Cells = this.Cells.fill(row.slice());
    }

    /**
     * Gets the 3x3 area surrounding the cell at [x,y].
     * Returns cells as undefined if outside of bounds of grid.
     * @param x x-axis position on the grid of the center cell
     * @param y y-axis position on the grid of the center cell
     */
    getArea(x: number, y: number) {
        let area = new Array<Array<number>>(3);

        let areaIndex = 0;
        for (let ix = x - 1; ix <= x + 1; ix++) {
            let sourceRow = this.Cells[ix];

            let areaRow = [];
            let rowIndex = 0;
            for (let iy = y - 1; iy <= y + 1; iy++) {
                // if we have no source row, the entire row is undefined
                if (!sourceRow) {
                    areaRow[rowIndex++] = undefined;
                    continue;
                }
                // copy over the values we find
                areaRow[rowIndex++] = sourceRow[iy];
            }

            // store the generated row
            area[areaIndex++] = areaRow;
        }

        return area;
    }
}