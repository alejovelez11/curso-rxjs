
import { range, from, fromEvent } from "rxjs";
import { filter, map, pluck, tap } from 'rxjs/operators';
const texto = document.createElement("div")
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum arcu eget quam pulvinar maximus. Morbi placerat arcu eget magna consectetur, eget rutrum justo accumsan. Etiam condimentum posuere nisi, sed lacinia nulla egestas vel. In non accumsan dolor, eget ornare tortor. Nullam nec odio vitae diam rutrum rutrum. Ut rhoncus tincidunt sapien eget pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel feugiat orci. Etiam elementum at nulla sed tempor.
<br><br>
Proin efficitur aliquam lorem. Sed in lorem tempus, dignissim sapien aliquet, imperdiet ipsum. Donec convallis, urna eget dignissim venenatis, urna nunc egestas erat, nec sagittis eros magna venenatis lectus. Praesent id ipsum quis purus suscipit cursus. Sed ac ligula est. Quisque ac enim neque. Cras eget nisl enim. Aenean vitae velit sed urna congue tincidunt in ac libero. Maecenas elementum odio ac ante viverra faucibus. Vestibulum faucibus massa et vestibulum aliquet. Donec ultrices mi non neque interdum, fermentum malesuada metus malesuada. Fusce sed neque nulla.
<br><br>
Duis interdum euismod ipsum. Sed tellus turpis, ullamcorper aliquet mattis vitae, blandit id elit. Nullam lacinia egestas diam, at placerat magna scelerisque vitae. Suspendisse tristique ex molestie tristique finibus. Phasellus vitae justo in neque congue efficitur. Aenean at orci pellentesque, volutpat justo in, pellentesque tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br><br>
Morbi sed turpis a nisl tempus rutrum. Phasellus tincidunt ligula ante, eu aliquet tortor feugiat in. Suspendisse in semper ipsum. Sed facilisis porttitor tortor, a mattis lorem maximus vitae. Nullam auctor mi nunc, et porttitor dui dapibus sed. Nunc a augue ullamcorper, placerat purus et, commodo ipsum. Sed interdum, orci in placerat sagittis, nibh erat varius metus, sit amet molestie sem lacus in velit. Maecenas tristique nisl eget urna volutpat lobortis. Morbi bibendum vestibulum semper. Integer sodales nisl non imperdiet faucibus. Sed volutpat nisi eget libero aliquam pharetra. Ut est justo, porta pharetra felis quis, tempus luctus nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique aliquet libero non tristique.
<br><br>
Aenean malesuada tincidunt nulla, eu tempus sem fringilla ac. Nullam a libero sit amet tellus mollis volutpat. Duis consequat, nulla eget pulvinar tincidunt, est metus aliquam tortor, sed ultrices enim est in odio. Nullam maximus tellus sed erat molestie commodo. Praesent tellus lorem, fringilla ac augue mollis, sagittis aliquam magna. Sed efficitur felis id lorem mattis, quis luctus magna luctus. Quisque dignissim, lectus ut vestibulum commodo, arcu massa finibus quam, a tincidunt tellus nulla ut orci. Vestibulum ipsum purus, fermentum non lorem sit amet, vulputate vestibulum turpis.
<br><br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et erat sit amet neque viverra tincidunt eu eget nisi. Ut velit sem, tincidunt a nibh a, finibus porttitor arcu. Suspendisse cursus libero eget metus volutpat venenatis. Nam augue dolor, varius non accumsan a, bibendum non elit. Aliquam vehicula euismod purus, non tempor leo tempus nec. Quisque ut lectus eros. Sed elementum consequat metus, eget pellentesque diam pharetra sed. Quisque sit amet vestibulum odio, nec efficitur diam.
<br><br>
Mauris efficitur pharetra tortor interdum molestie. Donec sollicitudin sed lectus eu posuere. Aenean auctor augue odio, in consequat ligula egestas sed. Fusce tristique lacus massa, ac hendrerit nisl euismod sed. Donec orci erat, mattis dictum arcu non, interdum convallis eros. Donec non dolor quam. Proin porta enim ut ligula vestibulum, eget congue ligula vulputate. Maecenas vel auctor odio. Cras at volutpat eros, non malesuada velit. Integer rhoncus in enim sit amet sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt commodo ante tempor pharetra. Donec mattis congue convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec imperdiet justo sit amet neque semper, eu sollicitudin eros auctor.
<br><br>
Suspendisse a nisi eu odio sodales luctus. Pellentesque ante ex, aliquam vitae orci ac, venenatis porta augue. Fusce blandit, nunc sed mattis fermentum, ligula urna tristique lectus, quis iaculis eros sapien id orci. Vestibulum quis risus vitae ex congue laoreet sollicitudin quis massa. Duis ut elementum magna. Vivamus tincidunt justo sed elementum tincidunt. Ut nec quam dapibus, eleifend leo at, auctor nibh. Morbi porta feugiat laoreet. Nunc sed neque et mauris blandit dignissim. Donec tempus magna turpis, nec placerat neque gravida et.
<br><br>
Vestibulum at urna lacus. Aliquam luctus molestie tortor, ac fringilla arcu mattis dapibus. Cras in libero eros. Vivamus ut velit eros. Suspendisse augue enim, auctor nec enim eu, interdum semper turpis. Cras varius efficitur ipsum, sed vestibulum purus tristique sit amet. Pellentesque luctus elementum velit vel porttitor. Suspendisse vitae erat elit. Sed varius libero mi, non feugiat ipsum volutpat nec. Maecenas efficitur orci gravida enim auctor, a pulvinar neque rutrum.
<br><br>
Etiam rhoncus mi a semper maximus. Maecenas consequat a massa eget mollis. Sed nibh metus, congue et velit et, semper placerat eros. Pellentesque ullamcorper nisi diam, in pellentesque ipsum fringilla et. In vel urna ligula. Ut ullamcorper nibh a mauris mattis posuere quis ac dui. Sed pellentesque a dolor sit amet sagittis. Curabitur porta orci pretium, cursus orci in, ornare mi. Nam faucibus ut nunc at iaculis. Donec posuere, leo eu vehicula euismod, ipsum metus accumsan tellus, vitae viverra magna massa et enim. Fusce faucibus arcu ut est hendrerit commodo. Morbi feugiat turpis est, in dapibus dolor auctor quis. Nulla pellentesque nisi iaculis orci eleifend, sit amet ultricies ante molestie. Vivamus faucibus sit amet arcu sed dictum.
`

const body = document.querySelector("body")
body.append(texto)


const progressBar = document.createElement("div")
progressBar.setAttribute("class","progress-bar")

body.append(progressBar)



const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement
    // console.log({scrollTop,scrollHeight,clientHeight});
    return (scrollTop / (scrollHeight - clientHeight)) * 100
}


const scroll$ = fromEvent(document,"scroll")
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event))
)

progress$.subscribe(porcen=>{
    progressBar.style.width = `${porcen}%`
})

