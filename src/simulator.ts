import { Grid } from "./grid";
import { PatternRule, IRule } from "./rule";
import {  IEvent, EventDispatcher} from "strongly-typed-events";

export class Simulator{
    private _iterations:Array<Grid>;
    private _rules:Array<IRule>;
    private _onIterationEvent = new EventDispatcher<Simulator, number>();

    constructor(seed:Grid, rules:Array<IRule>){
        this._iterations = new Array<Grid>(seed);
        this._rules = rules;
    }

    public get Iterations():Array<Grid>{ return this._iterations.slice();}

    /**
     * Async event when a new iteration has finished.
     */
    public get OnIteration():IEvent<Simulator, number>{
        return this._onIterationEvent.asEvent();
    }

    /**
     * Increments the iteration once.
     */
    public Iterate() {
        let current = this._iterations[this._iterations.length - 1];
        let newIteration = current.TransformByRules(this._rules);
        this._iterations.push(newIteration);
        this._onIterationEvent.dispatchAsync(this, this._iterations.length - 1);
    }
}