import { Grid } from "./grid";
import { Rule } from "./rule";
import {  IEvent, EventDispatcher} from "strongly-typed-events";

export class Simulator{
    private _iterations:Array<Grid>;
    private _rules:Array<Rule>;
    private _onIterationEvent = new EventDispatcher<Simulator, number>();

    constructor(seed:Grid, rules:Array<Rule>){
        this._iterations = new Array<Grid>(seed);
        this._rules = rules;
    }

    public get iterations():Array<Grid>{ return this._iterations.slice();}

    public get onIteration():IEvent<Simulator, number>{
        return this._onIterationEvent.asEvent();
    }
}