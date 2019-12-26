
import { range, from, fromEvent, of, interval, Observable, Subject } from 'rxjs';
import { filter, map, pluck, tap, take, first, takeWhile, takeUntil, skip, distinct, debounceTime, distinctUntilChanged, throttleTime, catchError, scan, mergeAll, startWith, endWith, reduce } from 'rxjs/operators';
import { ajax } from "rxjs/ajax";
/**
 * Ejercicio: Realizar que los dos observables finales, 
 * emitan exactamente el mismo valor
 * 
 * Tip: Hot Observable? subjects?
 */

(() =>{

    // == NO TOCAR este bloque ====================
    const reloj$ = interval(1000).pipe(
      take(5),
      map( val => Math.round(Math.random() * 100) )
    );
    // No tocar la creación del observable
    // ============================================
  
      
    const subject$ = new Subject()
    reloj$.subscribe(subject$)
    
    // Estos dos observables deben de emitir exactamente los mismos valores
    subject$.subscribe( val => console.log('obs1', val) );
    subject$.subscribe( val => console.log('obs2', val) );
  
  
  
  
  
  })();
  
  
  