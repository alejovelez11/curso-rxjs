
import { range, from, fromEvent, of } from "rxjs";
import { filter, map, pluck, tap, take } from 'rxjs/operators';


const numeros$ = of(1,2,3,4,5).pipe(
    take(2)
)

numeros$.subscribe( console.log )