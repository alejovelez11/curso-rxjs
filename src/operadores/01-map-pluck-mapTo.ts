// import {Observable, Observer, Subject} from "rxjs"

// const observer:Observer<any> = {
//     next: value => console.log("next", value),
//     error: error => console.log("error", error),
//     complete: () => console.log("completado")
    
// }

import { range,fromEvent } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";

// range(1,5).pipe(
//     map<number, number>(value => value * 10)
// )
// .subscribe(console.log)

// El map transforma la data


const keyup$ = fromEvent<KeyboardEvent>(document,"keyup")

const keyupcode$ = keyup$.pipe(
    map(e=>e.code)
)
// el pluck extrae los valores de las propiedades de objecto que yo le indico
const keyupPluck$ = keyup$.pipe(
    pluck("target","baseURI")
)
const keyupMapTo$ = keyup$.pipe(
    mapTo("tecla presionada")
)

keyupcode$.subscribe(code=> console.log("map", code) )
keyupPluck$.subscribe(code=> console.log("pluck", code) )
keyupMapTo$.subscribe(code=> console.log("mapTo", code) )
