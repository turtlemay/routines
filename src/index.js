'use strict';
/** Yield continuously for a number of seconds. */
function* waitForSeconds(seconds) {
    const startTime = new Date().getTime();
    const endTime = startTime + seconds * 1000;
    while (new Date().getTime() < endTime)
        yield;
}
exports.waitForSeconds = waitForSeconds;
/** Manage a collection of coroutine-like generator functions. */
class RoutineManager {
    constructor() {
        /** The collection of active routines. */
        this._routines = new Set();
    }
    /** Get the number of active routines. */
    getSize() {
        return this._routines.size;
    }
    /** Whether a routine instance is currently active and scheduled to update. */
    isActive(routine) {
        return this._routines.has(routine);
    }
    /** Start a routine instance. */
    start(routine) {
        this._routines.add(routine);
    }
    /** Stop a routine instance if it is active. */
    stop(routine) {
        this._routines.delete(routine);
    }
    /** Stop all active routines. */
    stopAll() {
        for (const routine of this._routines) {
            this.stop(routine);
        }
    }
    /** Update all active routines and stop them if they are finished. */
    updateAll() {
        for (const routine of this._routines) {
            if (!routine.next().done)
                continue;
            this.stop(routine);
        }
    }
}
exports.RoutineManager = RoutineManager;
