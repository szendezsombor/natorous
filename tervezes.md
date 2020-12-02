## Tervezési előkészület
Moduláris építő elemek tervezése amiből épül az interface
Összefogva a layout által
Újra hasznosíthatóak legyenek ezek több projekt között
Függetlenek legyenek, hogy bárhol lehessen használni az oldalakon
Atomic design:
A felépítés atom szerű struktúrát alkot
atomok -> molekulák -> organizmusok -> templatek -> oldalak

## Építés(Build)
- Block Element Modifier (BEM) 
```css
    .block {} /* ez a komponens megfelelője */
    .block__element {} /* ha kivesszük ezeket a blokkból, nem lesz semmilyen jelentése */
    .block__element--modifier {} /* módosító elem, pl btn--round*/
```

## Fájl struktúra (Architect)
7-1 pattern:
7 sass fájl és 1 fő sass fájl ami importálja az összes sass fájlt, ezzel egy nagy css fájlt létrehozva.
base/ - product definitions ??
components/ - komponenseket rakjuk ide
layout/ - ide a layoutok kerülnek
pages/ - a pagek kerülnek ide
themes/ - témák kerülnek ide
abstracts/ - ?
vendors/ - 3rd partyktól jövő css-ek kerülnek ide

## Tervezési lépések fontos alapjai
1. Fluid grids and layouts: %-ot használjunk pixel helyett
2. Flexible, responsive images
3. Media queries