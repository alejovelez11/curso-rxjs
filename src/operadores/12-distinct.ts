
import { range, from, fromEvent, of, interval } from "rxjs";
import { filter, map, pluck, tap, take, first, takeWhile, takeUntil, skip, distinct } from 'rxjs/operators';


const numeros$ = of(1,1,3,3,2,2,4,4,5,3,1).pipe(
    distinct()
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
        nombre:"iron man"
    },
    {
        nombre:"megaman"
    },
]

from(personajes).pipe(
    distinct(p => p.nombre)
)
.subscribe( console.log )
