## 3 alap pillér:
1. Responsive design:
    - Fluid Layouts
    - Media queries
    - Responsive images
    - Correct units
    - Desktop first vs mobile first
2. Maintainable and scalable code:
    - Clean
    - Easy to understand
    - Growth
    - Reusable
    - How to organise files
    - How to organize files
    - How to structure HTML
3. Web performance
    - Less HTTP request
    - Less code
    - Compress code
    - Use Css preprocessor
    - Less images
    - Compress images

<br><br><br>

## HTML és CSS betöltése
### HTML loading
Load HTML -> Parse HTML -> DOM Model
### CSS loading
Parse HTML -> Load Css -> Parse CSS -> CCS Object Model
### Parse CSS lépései:
- Resolve conflicting CSS declaration(cascade)
- Process final CSS values pl 50% konvertálássa pixelekké


CCS Object Model + DOM Model -> Render tree -> Website rendering -> Final rendered website


## Css parseing phase:

.my-class <--- selector
{
    color: <--- property green <--- declaration value; <--- declaration
} <--- declaration block

!! Cascade
Author - .css files
User - user change something
Browser - default property
<br><br><br>

## 3 szempont ami szerint érvényesűlnek a deklarációk
#### *Melyik deklaráció lesz érvényes az elemre?*

**1. Importance**

1. User !important declaration
2. Author !important declaration
3. Author declaration
4. User declaration
5. Default browser declaration

**2. Spicificity**

1. Inline styles
```html 
<style></style>
```
2. IDs
```css 
#my-id-class {
    display: block;
    color: green;
}
```
3. Classes, pseudo-classes, attribute
```css 
.my-class {
    display: block;
    color: green;
}

/* vagy*/ 

.my-class:hover {
    display: block;
    color: green;
}
```

4. Elements, pseudo-elements ----> a, button vagy ::pseudo-element
```css 
button {
    display: block;
    color: green;
}

/* vagy*/ 

button::pseudo-element {
    display: block;
    color: green;
}
```

**3. Source order**

Amilyen sorrendben vannak leírva

<br><br><br>

## Rem, em, %, vh, vw
% esetében 
1. ha font-size propertyről van szó akkor a szülő elemtől örököltet veszi alapul és azt arányosítja
2. ha lenght típusú pl padding margint kell meghatároznia, akkor a szülő elemének a width-jét veszi alapúl

em esetében
1. ha a font-size propertyről van szó akkor a szülő elemtől viszonyítva veszi az x szeresét pl 2em esetén 2*szülő font-size
2. ha lenght típusról van szó akkor a saját elemének a font-sizeához viszonyítva szorzódik fel pl padding: 2em esetén a 2*az adott elemfont-size propertije amin ez a padding állítódik

rem esetében
a rootban definiált font-sizehoz viszonyit.
pl.: a root font-size: 16px akkor 1 rem = 24pixel bárhol hivatkozunk rá.

A vw és a vh %os aránya a viewportnak, vagy is a megtekintett felületnek.

## CSS öröklődés
Amennyiben nincs konkrét érték ami meghatározza az az már cascádolt érték akkor inheritelheti a szülőtől az értéket, ha az sincs akkor default értéket fog beállítani

pl.:
```css
.parent {
    font-size: 20px;
    line-height: 150%;
} 

.child {
    font-size: 25px; /* akkor öröklődne, ha ez nem lenne megadva*/
    /* az örökölt line-height: 30px lesz a 150% * 30 miatt*/
}
```

A margin a padding és a length-el kapcsolatos propertyk nem örklődnek, de pl backgorund-color, font-family, font-size stb igen.