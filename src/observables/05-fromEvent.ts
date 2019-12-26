// import {Observable, Observer, Subject} from "rxjs"

// const observer:Observer<any> = {
//     next: value => console.log("next", value),
//     error: error => console.log("error", error),
//     complete: () => console.log("completado")
    
// }

import { fromEvent } from "rxjs"

// eventos del dom
 const src1$ = fromEvent<MouseEvent>(document, "click")
 const src2$ = fromEvent<KeyboardEvent>(document, "keyup")
 const obs = {
    next: val => console.log("next",val)
 }

 src1$.subscribe(event=>{
     console.log(event.x);
     console.log(event.y);
     
 })

 src2$.subscribe(evento=>{
     console.log(evento.key);  
 })