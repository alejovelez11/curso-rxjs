import {Observable, Observer} from "rxjs"

const observer:Observer<any> = {
    next: value => console.log("next", value),
    error: error => console.log("error", error),
    complete: () => console.log("completado")
}

const intervalo$ = new Observable<number>(subs=>{
    let cont = 0
    // crear un contador
    const interval = setInterval(() => {
        cont++
        subs.next(cont)
        console.log(cont);
    }, 1000);
    setTimeout(() => {
        subs.complete()
    }, 2500);
    return () => {
        clearInterval(interval)
        console.log("Intervalo destruido");
        
    }
})
const subs1 = intervalo$.subscribe(observer)
const subs2 = intervalo$.subscribe(observer)
const subs3 = intervalo$.subscribe(observer)

setTimeout(() => {
    subs1.unsubscribe()
    subs2.unsubscribe()
    subs3.unsubscribe()
    console.log("completado");
    
}, 6000);
