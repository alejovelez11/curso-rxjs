// import {Observable, Observer, Subject} from "rxjs"

// const observer:Observer<any> = {
//     next: value => console.log("next", value),
//     error: error => console.log("error", error),
//     complete: () => console.log("completado")
    
// }

import { interval, timer } from "rxjs";


const obs = {
    next: val => console.log("next", val),
    complete: () => console.log("complete")
}

const hoyen5 = new Date() //ahora
hoyen5.setSeconds(hoyen5.getSeconds()+5)

const interval$ = interval(1000)
// const timer$ = timer(2000)
const timer$ = timer(hoyen5)
console.log("Inicio");
// interval$.subscribe(obs)
timer$.subscribe(obs)
console.log("fin");