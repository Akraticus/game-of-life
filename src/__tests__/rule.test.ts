import { Rule } from "../rule";

test("isMatch() returns true", () => {
    let area = new Array<Array<number>>(3);
    let fasit = new Array<Array<number>>(3);
    let row = [0,0,0];
    area = area.fill(row.slice());
    fasit = fasit.fill(row.slice());

    let rule = new Rule(1, area);
    expect(rule.getResultState()).toBe(1);
    expect(rule.isMatch(fasit)).toBe(true);
})

test("isMatch() returns false", () => {
    let area = new Array<Array<number>>(3);
    let fasit = new Array<Array<number>>(3);
    let row = [0,0,0];
    area = area.fill(row.slice());
    let falseRow = [0,1,0];
    fasit = fasit.fill(falseRow.slice());

    let rule = new Rule(1, area);
    expect(rule.getResultState()).toBe(1);
    expect(rule.isMatch(fasit)).toBe(false);
})

test("isMatch() handles undefined as values", () => {
    let area = new Array<Array<number>>(3);
    let fasit = new Array<Array<number>>(3);
    let row = [0,undefined,0];
    area = area.fill(row.slice());
    fasit = fasit.fill(row.slice());

    let rule = new Rule(1, area);
    expect(rule.getResultState()).toBe(1);
    expect(rule.isMatch(fasit)).toBe(true);
})