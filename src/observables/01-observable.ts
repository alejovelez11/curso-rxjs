import {Observable, Observer} from "rxjs"

const observer:Observer<any> = {
    next: value => console.log("next", value),
    error: error => console.log("error", error),
    complete: () => console.log("completado")
    
}


// const obs$ = Observable.create()
const obs$ = new Observable<string>(subs=>{
    subs.next("hola")
    subs.next("mundo")
    subs.complete()
})


// obs$.subscribe(resp=> console.log(resp))
// obs$.subscribe(
//     valor => console.log("next: ", valor),
//     error => console.warn("error: ", error),
//     () => console.log("completado")
    
// )
obs$.subscribe(observer)

