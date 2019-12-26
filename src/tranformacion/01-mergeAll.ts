
import { range, from, fromEvent, of, interval, Observable } from 'rxjs';
import { filter, map, pluck, tap, take, first, takeWhile, takeUntil, skip, distinct, debounceTime, distinctUntilChanged, throttleTime, catchError, scan, mergeAll } from 'rxjs/operators';
import { ajax } from "rxjs/ajax";
import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';

const body = document.querySelector("body")
const textInput = document.createElement("input")
const orderList = document.createElement("ol")
body.append(textInput, orderList)


const mostrarUser = (usuarios:GithubUser[]) =>{
    orderList.innerHTML = ""
    console.log(usuarios);
    for(const usuario of usuarios){
        const li = document.createElement("li")
        const img = document.createElement("img")
        img.src = usuario.avatar_url
        const anchor = document.createElement("a")
        anchor.href= usuario.html_url
        anchor.text= "Ver pagina"
        anchor.target= "_blank"

        li.append(img)
        li.append(usuario.login + " ")
        li.append(anchor)
        orderList.append(li)
    }
}

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup")
input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, String>("target","value"),
    map<String, Observable<GithubUsersResp>>(texto=> ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
    mergeAll<GithubUsersResp>(),
    pluck<GithubUsersResp, GithubUser[]>("items")
).subscribe(mostrarUser)

