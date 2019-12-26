
import { range, from, fromEvent, of } from "rxjs";
import { filter, map, pluck, tap, take, first, takeWhile } from 'rxjs/operators';
const click$ = fromEvent<MouseEvent>(document, "click")


// EL observer emite valores hasta que se cumpla una condicion


click$.pipe(
    map(({x, y})=>({x, y})),
    // takeWhile(({y})=> y <= 150)
    takeWhile(({y})=> y <= 150, true)
    
)
.subscribe({
    next: val => console.log("next", val),
    complete:() => console.log("complete")
})