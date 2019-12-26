
import { range, from, fromEvent, of, interval } from "rxjs";
import { filter, map, pluck, tap, take, first, takeWhile, takeUntil, skip } from 'rxjs/operators';
const click$ = fromEvent<MouseEvent>(document, "click")

const boton = document.createElement("button")
boton.innerHTML="detenerTime"
document.querySelector("body").append(boton)
const counter$ = interval(1000)
// const clickBtn$ = fromEvent(boton, "click")
// El skip es para saltarse valores emitidos


const clickBtn$ = fromEvent(boton, "click").pipe(
    skip(1)
)

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log("next", val),
    complete:() => console.log("complete")
})