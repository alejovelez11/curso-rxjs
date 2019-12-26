// import {Observable, Observer, Subject} from "rxjs"

// const observer:Observer<any> = {
//     next: value => console.log("next", value),
//     error: error => console.log("error", error),
//     complete: () => console.log("completado")
    
// }

import { range, from, fromEvent } from "rxjs";
import { filter, map } from 'rxjs/operators';

// range(1, 10).pipe(
//     filter(val => val % 2 === 1)
// ).subscribe(resp=> console.log(resp))


// range(1, 10).pipe(
//     filter((val, i) => {
//         console.log("index", i);
        
//        return val % 2 === 1
//     })
// ).subscribe(resp=> console.log(resp))
interface Personaje {
    tipo: String
    nombre: String,
}
const personajes:Personaje[] = [
    {
        tipo: "heroe",
        nombre: "Batman"
    },
    {
        tipo: "heroe",
        nombre: "robbin"
    },
    {
        tipo: "villano",
        nombre: "joker"
    },
]

from(personajes).pipe(
    filter(p => p.tipo === "heroe")
).subscribe(console.log)


const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
    map(event => event.code),
    filter(key => key ==="Enter")
)

keyup$.subscribe(console.log)