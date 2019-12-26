// import {Observable, Observer, Subject} from "rxjs"

// const observer:Observer<any> = {
//     next: value => console.log("next", value),
//     error: error => console.log("error", error),
//     complete: () => console.log("completado")
    
// }

import { of } from "rxjs";

// const obs$ = of(1,2,3,4,5,6)
const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true))
obs$.subscribe( 
    next => console.log("next", next),
    null,
    () => console.log("terminamos")
)
