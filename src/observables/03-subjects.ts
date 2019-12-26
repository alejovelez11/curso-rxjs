import {Observable, Observer, Subject} from "rxjs"

const observer:Observer<any> = {
    next: value => console.log("next", value),
    error: error => console.log("error", error),
    complete: () => console.log("completado")
    
}

const intervalo$ = new Observable<number>(subs=>{
    const intervalID = setInterval(()=>subs.next(Math.random()),1000)
    return () => clearInterval(intervalID)
})

// el subject el para distrubuir la misma informacion a todos los Subscriptions
const subject$ = new Subject
intervalo$.subscribe(subject$)
// const subs1 = intervalo$.subscribe(resp=> console.log("subs 1", resp))
// const subs2 = intervalo$.subscribe(resp=> console.log("subs 2", resp))

const subs1 = subject$.subscribe(resp=> console.log("subs 1", resp))
const subs2 = subject$.subscribe(resp=> console.log("subs 2", resp))

setTimeout(() => {
    subject$.next(10)
    subject$.complete()
}, 3500);