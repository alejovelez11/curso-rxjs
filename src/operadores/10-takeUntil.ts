
import { range, from, fromEvent, of, interval } from "rxjs";
import { filter, map, pluck, tap, take, first, takeWhile, takeUntil } from 'rxjs/operators';
const click$ = fromEvent<MouseEvent>(document, "click")

const boton = document.createElement("button")
boton.innerHTML="detenerTime"
document.querySelector("body").append(boton)
const counter$ = interval(1000)
const clickBtn$ = fromEvent(boton, "click")

// ejecuta un observable hasta que otra sea emitido por primera vez


counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log("next", val),
    complete:() => console.log("complete")
})