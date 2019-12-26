
import { range, from, fromEvent, of, interval, Observable, Subject } from 'rxjs';
import { filter, map, pluck, tap, take, first, takeWhile, takeUntil, skip, distinct, debounceTime, distinctUntilChanged, throttleTime, catchError, scan, mergeAll, startWith, endWith, reduce } from 'rxjs/operators';
import { ajax } from "rxjs/ajax";

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

    const inicio = 7;
    const countdown$ = interval(700).pipe(
        map(i => inicio - i),
        take(inicio)
    );
    

    // No tocar esta línea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================


})();

		