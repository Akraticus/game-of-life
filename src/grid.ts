import { PatternRule, IRule } from "./rule";

export class Grid {
    /// single cell at x, y => Cells[x][y]
    private _cells: Array<Array<number>>;

    constructor(cells:Array<Array<number>>) {
        this._cells = cells;
    }

    public get Cells():Array<Array<number>> { return this._cells.slice();}

    /**
     * Gets the 3x3 area surrounding the cell at [x,y].
     * Returns cells as undefined if outside of bounds of grid.
     * @param x x-axis position on the grid of the center cell
     * @param y y-axis position on the grid of the center cell
     */
    GetArea(x: number, y: number) {
        let area = new Array<Array<number>>(3);

        let areaIndex = 0;
        for (let ix = x - 1; ix <= x + 1; ix++) {
            let sourceRow = this._cells[ix];

            let areaRow = [];
            let rowIndex = 0;
            for (let iy = y - 1; iy <= y + 1; iy++) {
                // if we have no source row, the entire row is undefined
                if (!sourceRow) {
                    areaRow[rowIndex++] = null;
                    continue;
                }
                // copy over the values we find
                areaRow[rowIndex++] = sourceRow[iy] !== undefined ? sourceRow[iy] : null;
            }

            // store the generated row
            area[areaIndex++] = areaRow;
        }

        return area;
    }

    /**
     * Iterates over the entire collection of cells, and transforms them by the first applicable rule in the set of rules.
     * If no applicable rule is found for a cell, it retains its original value.
     * Returns a new Grid-object with the transformed cells.
     * @param rules 
     */
    TransformByRules(rules:Array<IRule>):Grid{
        let newCells = new Array<Array<number>>(this._cells.length);

        for(let xi = 0; xi < this._cells.length; xi++){
            let row = this._cells[xi];
            let newRow = row.slice();
            for(let yi = 0; yi < row.length; yi++){
                let cellArea = this.GetArea(xi, yi);
                // find the first rule that matches the cell area
                let rule = rules.find(rule => rule.IsMatch(cellArea));
                if(rule) newRow[yi] = rule.ResultState
            }

            newCells[xi] = newRow;
        }

        return new Grid(newCells);
    }
}