
import { range, from, fromEvent, of } from "rxjs";
import { filter, map, pluck, tap, take, first } from 'rxjs/operators';
const click$ = fromEvent<MouseEvent>(document, "click")


// Muestra el valor emitido si se cumple una condicion

click$.pipe(
    // map(e=>({
    //     clientY:e.clientY,
    //     clientX:e.clientX
    // }))
    map(({clientX, clientY})=>({clientY, clientX})),
    first(e => e.clientY >= 150)
).subscribe({
    next: val => console.log("next", val),
    complete: () => console.log("complete")
})

