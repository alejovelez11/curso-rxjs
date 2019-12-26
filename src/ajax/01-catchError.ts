
import { range, from, fromEvent, of, interval } from "rxjs";
import { filter, map, pluck, tap, take, first, takeWhile, takeUntil, skip, distinct, debounceTime, distinctUntilChanged, throttleTime, catchError } from 'rxjs/operators';
import { ajax } from "rxjs/ajax";


const url = "https://api.github.com/users?per_page=5"

