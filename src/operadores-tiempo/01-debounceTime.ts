
import { range, from, fromEvent, of, interval } from "rxjs";
import { filter, map, pluck, tap, take, first, takeWhile, takeUntil, skip, distinct, debounceTime, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent(document,"click")
click$.pipe(
    debounceTime(3000)
)
//.subscribe( console.log ) 

// debounceTime es para evitar numerosas emisiones de eventos


// Ejemplo 2
const input = document.createElement("input")
document.querySelector("body").append(input)

const input$ = fromEvent(input,"keyup").pipe(
    debounceTime(1000),
    pluck("target","value"),
    distinctUntilChanged()
)
input$.subscribe(console.log)