'use strict';

export type Routine = IterableIterator<any>;

/** Yield continuously for a number of seconds. */
export function* waitForSeconds(seconds: number): IterableIterator<any> {
  const startTime = new Date().getTime();
  const endTime = startTime + seconds * 1000;
  while (new Date().getTime() < endTime) { yield; }
}

/** Manage a collection of coroutine-like generator functions. */
export class RoutineManager {
  /** The collection of active routines. */
  private _routines = new Set<Routine>();

  /** Get the number of active routines. */
  public getSize(): number {
    return this._routines.size;
  }

  /** Whether a routine instance is currently active and scheduled to update. */
  public isActive(routine: Routine): boolean {
    return this._routines.has(routine);
  }

  /** Start a routine instance. */
  public start(routine: Routine): void {
    this._routines.add(routine);
  }

  /** Stop a routine instance if it is active. */
  public stop(routine: Routine): void {
    this._routines.delete(routine);
  }

  /** Stop all active routines. */
  public stopAll(): void {
    this._routines.clear();
  }

  /** Update all active routines and stop them if they are finished. */
  public updateAll(): void {
    for (const routine of this._routines) {
      if (!routine.next().done) { continue; }
      this.stop(routine);
    }
  }
}
