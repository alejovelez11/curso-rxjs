
import { range, from, fromEvent, of, interval } from "rxjs";
import { filter, map, pluck, tap, take, first, takeWhile, takeUntil, skip, distinct, distinctUntilChanged } from 'rxjs/operators';

// distinctUntilChanged revisa si el ultimo valor emitido es igual al actual, si es igual no lo emite


const numeros$ = of<number | string>(1,"1",1,3,3,2,2,4,4,5,3,1,"1").pipe(
    distinctUntilChanged()
)
numeros$.subscribe( console.log )


interface Personaje {
    nombre:string
}

const personajes:Personaje[] = [
    {
        nombre:"megaman"
    },
    {
        nombre:"zero"
    },
    {
        nombre:"aquaman"
    },
    {
        nombre:"megaman"
    },
    {
        nombre:"megaman"
    },
]

from(personajes).pipe(
    // distinct(p => p.nombre)
    distinctUntilChanged((an,act)=>an.nombre === act.nombre)
)
.subscribe( console.log )
