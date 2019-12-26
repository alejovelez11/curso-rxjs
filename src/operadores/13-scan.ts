 
import { range, from, fromEvent, of, interval } from "rxjs";
import { filter, map, pluck, tap, take, first, takeWhile, takeUntil, skip, distinct, debounceTime, distinctUntilChanged, throttleTime, catchError, scan } from 'rxjs/operators';
   

// el scan funciona como un acumulador
// Es como reduce, pero emite la acumulación actual cada vez que la fuente emite un valor.


const numeros = [1,2,3,4,5]
from(numeros).pipe(
    scan((acu, curr) => acu + curr, 0)
).subscribe( console.log )