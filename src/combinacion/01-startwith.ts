
import { range, from, fromEvent, of, interval, Observable } from 'rxjs';
import { filter, map, pluck, tap, take, first, takeWhile, takeUntil, skip, distinct, debounceTime, distinctUntilChanged, throttleTime, catchError, scan, mergeAll, startWith, endWith } from 'rxjs/operators';
import { ajax } from "rxjs/ajax";

const numeros$ = of(1,2,3).pipe(
    startWith(0)
)
numeros$.subscribe(console.log)