export declare type Routine = IterableIterator<any>;
/** Yield continuously for a number of seconds. */
export declare function waitForSeconds(seconds: number): IterableIterator<any>;
/** Manage a collection of coroutine-like generator functions. */
export declare class RoutineManager {
    /** The collection of active routines. */
    private _routines;
    /** Get the number of active routines. */
    getSize(): number;
    /** Whether a routine instance is currently active and scheduled to update. */
    isActive(routine: Routine): boolean;
    /** Start a routine instance. */
    start(routine: Routine): void;
    /** Stop a routine instance if it is active. */
    stop(routine: Routine): void;
    /** Stop all active routines. */
    stopAll(): void;
    /** Update all active routines and stop them if they are finished. */
    updateAll(): void;
}
