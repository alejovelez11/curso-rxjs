// import {Observable, Observer, Subject} from "rxjs"

// const observer:Observer<any> = {
//     next: value => console.log("next", value),
//     error: error => console.log("error", error),
//     complete: () => console.log("completado")
    
// }

import { of, range, asyncScheduler } from "rxjs";

// const src$ = of(1,2,3,4,5,6)
console.log("inicio");
const src$ = range(1, 5, asyncScheduler)
src$.subscribe( console.log )
console.log("fin");