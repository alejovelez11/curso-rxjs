// import {Observable, Observer, Subject} from "rxjs"

// const observer:Observer<any> = {
//     next: value => console.log("next", value),
//     error: error => console.log("error", error),
//     complete: () => console.log("completado")
    
// }

import { range, from, fromEvent } from "rxjs";
import { filter, map, pluck, tap } from 'rxjs/operators';

const numeros$ = range(1,5)

numeros$.pipe(
    tap(x=> console.log("antes", x))
)
.subscribe(val => console.log(val))
