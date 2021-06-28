# Uppdrag

Hello World behöver hjälp med att göra klart hemsidan till Ågesta's musikfestival! De tidigare kodarna har lagt en grund men försvann för några dagar sedan spårlöst. Vilken tur att ni finns här och kan hjälpa oss! Här nedan finns det listat allt som behöver göras för att finalisera sidan!

****************************** HTML *********************************

## 1.1: Namn till festivalen
Just nu har musikfestivalen inget namn! Detta måste fixas!

**Uppdrag:** Lägg till en stor huvudrubrik i index.html.

```HTML
<h1>
  Huvudrubrik!
</h1>
```

### 1.2: Underrubrik
Det skulle vara trevligt med en underrubrik! 

**Uppdrag:** Lägg till en underrubrik under huvudrubriken.

```HTML
<h2>
  Underrubrik!
</h2>
```

---

## 2.1: Introtext
Vi behöver lägga in lite mer text som beskriver vad Ågesta Musikfestival är! Kopiera och lägg till texten nedan:

```HTML
På Ågesta Musikfestival samlas över 200.000 människor från Skandinavien och Europa för att lyssna på de coolaste artisterna i världen. Eventet är Nordens största musikfestivalen där både musik och kod möts.
```

```HTML
<p>
  Text!
</p>
```

---

## 3: Schemat
Just nu finns inget schema! Hur ska de som vill komma veta vilka som spelar?

### 3.1 Dagar
Först måste vi skriva en rubrik med varje dag så att man förstår vilka artister som hör till vilken dag. 

**Uppdrag:** Lägg till en rubrik unde **alla tre** "Uppdrag 3.1". Skriv in *Fredag*, *Lördag* och *Söndag* under respektive Uppdrag 3.1.

```HTML
<h4>
  Fredag
</h4>
```

### 3.2 Tider
Nu måste vi lägga upp ett schema! Det är upp till dig att bestämma ordningen men dessa artisterna nedan ska spela vid tiderna **12.00**, **13.00** och **15.00** respektive dag.

*Fredag:* Veronica Maggio, Harry Styles, Valfri

*Lördag:* Lady Gaga, Adele, Valfri

*Söndag:* Beyonce, Shawn Mendes, Valfri

**Uppdrag:** Gör en lista med **tiden** och **artisten** för varje dag.

```HTML
<ul>
  <li>12.00 - Veronica Maggio</li>
</ul>
```

---

## 4.1 Bild saknas!
Det fattas en bild där vi beskriver vår dj! Istället har texten på något sätt flytit ihop med en annan! Vi behöver en bild!

**Uppdrag:** Hitta en bild på ett mixerbord på google och lägg in den.

```HTML
<img src="Din kopierade bildadress här!">
```

## 4.2 Festivalaktiviteter
Hittills har vi bara en aktivitet! Det kommer inte roa publiken! Vi behöver fler!

**Uppdrag:** Se hur den första aktiviteten är skapad och lägg till minst tre fler. Låt fantasin flöda!

```HTML
<p>
  <b>Vattenkrig:</b> Deltagare får prova på att...
</p>
```

---

## 5.1 Hitta till oss
Tänk på de stackars människorna som inte kan söka i google maps! Vi behöver en direktlänk! Här är länken:

```HTML
https://www.google.com/maps/place/%C3%85gesta+Folkh%C3%B6gskola/@59.2236287,18.0997373,17z/data=!3m1!4b1!4m5!3m4!1s0x465f7a2ada2ce5bb:0xf26d028e6e737944!8m2!3d59.223626!4d18.101926?hl=en
```

**Uppdrag:** Lägg in en länk som länkar till länken ovan.

```HTML
<a href="din länk här">Klicka mig!</a>
```

---

## E.1 Skaparen
Wow, så mycket du gjort! Detta måste du få cred för!

**Uppdrag:** Lägg in en text med året samt ditt namn så att man vet vem som gjort sidan.

```HTML
<p>
  Sven Svensson 2019
</p>
```

---

## 6: Navigation
Detta är bara en sida, vi vill ha fler! Vi behöver alltså en meny högst upp med flikarna **Hem**, **Artister** och **Kontakt**.

### 6.1 Lista med länkar
En meny kan man säga är en lista med länkar. Dock omsluter man ofta listan i en nav-tagg.

**Uppdrag:** Skapa en nav som innehåller en lista med tre länkar som har namnen **Hem**, **Artister** och **Kontakt**.

```HTML
<nav>
  <ul>
    <a><li>Startsida</li></a>
  </ul>
</nav>
```

### 6.2 Få dem att fungera
Nu finns menyn, men den går inte att använda! Detta måste lösas!

**Uppdrag:** Se till att länkarna länkar till rätt sida.

```HTML
<a href="index.html"><li>Startsida</li></a>
```

## 6.3 Navigationen borta!
Vi kan inte komma tillbaka till startsidan! Men, juste! Det är för att vi inte skrivit in koden!

**Uppdrag:** Kopiera hela **nav-blocket** från index.html till artister.html

---

## 7.1 Huvudrubrik
Här behöver vi också en huvudrubrik! Det ska stå **Artister**.

**Uppdrag:** Lägg till en huvudrubrik i artister.html.

```HTML
<h1>
  L'Artists
</h1>
```

---

## 8.1 Artister

Nu får du lägga ihop dina kunskaper för att skapa en lista med de artister som ska uppträda. Hitta bilder, skriv in namn samt en beskrivning för dina tre till fem favoriter!

**Uppdrag:** Lägg till en bild, rubrik och text för varje artist.

```HTML
<img src="Din artistbild här">
<h3>
  Veronica Klammer
</h3>
<p>
  En riktig bra tamburinartist.
</p>
```

### 8.2 Hype-em-up
Om du har lite tid över kan du även länka till deras Youtube-kanaler så att besökarna hinner lära sig alla deras låtar!

**Uppdrag:** Lägg till en länk till varje artists Youtube-kanal.

```HTML
<a href="Länk till YouTube här">YouTube</a>
```

---

## Extra: Hype Level
Inför festivalen gäller det att bygga upp energi! Detta kan vi symbolisera med en hype-mätare!

**Uppdrag:** Lägg till en progressbar innanför **footer** i **index.html** med texten "Hype Level" ovanför.

```HTML
<progress value="25" max="100"></progress>
```

****************************** CSS *********************************

## 9.1 Färg!
Vitt är lite tråkigt. Låt oss piffa upp rubrikerna!

**Uppdrag:** Ändra huvudrubriken till en annan färg.

```CSS 
h1 {
  color: ;
}
```

## 9.2 Mer färg!
Testa att ändra färg på andra taggar också!

**Uppdrag:** Ändra färg på några andra element.

---

## E.2 Mer specifik färg!
Att endast skriva *blue*, *green* etc. är inte så fritt. Om du vill ha full kontroll över färgen så kan man använda sig av **RGB** eller **hexkoder**.

[Snygga färger!](https://flatuicolors.com/palette/ca)

**Uppdrag:** Testa att ändra till en mer specifik färg.

```CSS
p {
  color: #45js2j;
}
```

---

## 10.1 Större, större!
H2-rubriken på artist-sidan är alldeles för liten!

**Uppdrag:** Ändra storlek på alla h2-rubriker.

```CSS
h2 {
  font-size: ;
}
```

---

## 11.1 Äntligen, rubriken!
Jaja, vi vet. Huvudrubriken och underrubriken är inte i mitten! Detta ska vi fixa nu.

**Uppdrag:** Centrera allt i header.

```CSS 
header {
  text-align: center;
}
```

---

## 12.1 Bakgrundsfärg till artisterna
Det skulle även vara coolt att ändra bakgrundsfärgen för artistsidan. Sektionen har redan id't *artists*.

**Uppdrag:** Ändra bakgrundsfärg på artistsidan. Använd dig av id't *artists*. Du kan även behöva ändra färgen på texten för att den ska synas mot den nya bakgrunden.

```CSS
#artists {
  background-color: blue;
  color: green;
}
```

---

## 13.1 Unika sektioner
Vi vill gärna ändra färgen på sektionen med numret till Swish. Gör detta genom att ge den **id:t "swish"** och stylea sedan den med hjälp av css. Glöm inte **#** framför namnet på ert id när ni stylear den i styles.css!

```HTML
<section class="message" id="swish">
```

**Uppdrag:** Ändra färg på sektionen med numret till Swish i index.html.

```CSS
#swish {
  background-color: pink;
  color: purple;
}
```

---

## E.3 Ombre
Ombre är det svenska ordet för *gradient*, som betyder att en färg övergår i en annan. Detta är en ganska cool effekt som vi kan använda som bakgrundsfärg. Dett ända du behöver göra är att byta ut *background-color* i #artists i styles.css mot koden nedan och sedan välja dina färger!

**Uppdrag:** Byt ut *background-color* mot koden nedan i #artists-selektorn i styles.css.

```CSS
#artists {
  background: linear-gradient(färg1, färg2);
}
```

---

## E.4 Riktningen spelar roll
Från ovanstående uppdrag får man en *linjär gradient* uppifrån och ner! Men tänk om vi vill att färgerna ska mixas i en vinkel? Då kan man använda sig av *grader* eller som det på engelska heter *degrees* (kort *deg*).

**Uppdrag:** Ändra riktning på h1:ans gradient med hjälp av *deg*

```CSS
#artists {
  background: linear-gradient(10deg, färg1, färg2);
}
```

---

## 14.1 Ny bakgrundsbild
Artistsidan ser väldigt lik ut första sidan men det skulle vara roligt om man kunde ha en annan bild på artistsidan! För detta behöver du använda dig av *background-img*.

**Uppdrag:** Ge headern ett **id** i **artister.html**. Ge sedan den en ny backgrundsbild med hjälp av koden ovan.

```CSS
#id:ts_namn_här {
  background-image: url("din bildaddress");
}
```

---

## E.5 Bakgrunder överallt!
Även kontaktsidan kan gynnas av att få en ny bild! Ändra den också!

**Uppdrag:** Ge headern ett **id** i **kontakt.html**. Ge sedan den en ny backgrundsbild.

```CSS
#id:ts_namn_här {
  background-image: url("din bildaddress");
}
```

---

## 15.1 Detektiven
Vi vill gärna att artistrubrikerna i **artister.html** ska bli lite tunnare för att särskilja dem från den stora rubriken. Viktigt! Vi vill endast ändra på de rubriker som finns inom sektionen med id:t **artists**!

**Uppdrag:** Ändra tjockleken hos alla **h3** i sektionen med id:t **artists**. Ta hjälp av koden ovan.

```CSS
#artists h3 {
  font-weight: 300; 
}
```

---

## 16.1 Fin ram
Det skulle vara fint att rama in artisternas bilder! Gör detta med hjälp av *border*

**Uppdrag:** Lägg till en ram för alla bilder innanför sektionen med id:t **artists**. Ta hjälp av koden ovan. Byt ut 5:an för att få en tunnare/tjockare ram.

```CSS
#artists img {
  border: 5px solid färg;
}
```

---

## E.6 Hover
För att det ska bli roligare att vara inne på sidan så kan man få saker att hända när användaren håller musen över huvudrubriken! Lägg till **:hover** efter selektorn för att ge styles till huvudrubriken *endast* när musen är över den!

**Uppdrag:** Få huvudrubriken att ändra färg när man har musen över den.

```CSS
h1:hover {
  color: ;
}
```

---

## E.7 Smooth Transition
Coolt! Men lite hackigt... Detta måste fixas!

**Uppdrag:** Lägg till kodraden nedan i **både** h1 {} och h1:hover {}.

```CSS
transition: 1s;
```

---

## 17 Knapp-dags!
Nu är det dags för en mega-utmaning! Vi ska lägga in en knapp och stylea den! Dessutom ska vi göra css:en vi skriver möjlig att använda för hur många knappar som helst!

### 17.1 Allt börjar med strukturen
Först måste vi ha en knapp!

**Uppdrag:** Lägg in en knapp på valfri plats innanför **header**-taggarna i **index.html** eller **artister.html**.

*Taggar att använda: button*

### 17.2 Ge den en klass
Vi kan vilja ha flera knappar som ska se likadana ut, därför behöver vi ge knappen en klass!

```HTML
<button class="..."></button>
```

**Uppdrag:** Ge knappen du nyss lade in en klass.

*Taggar att ändra: button*

*Attribut att använda: class*

### 17.3 Ge den färg!
Knappen ser lite tråkig ut. Pimpa upp den med lite färg!

**Uppdrag:** Ändra bakgrundsfärg och eventuellt färg på texten på knappen du nyss skapade i **styles.css**.

*Taggar att ändra: .(klassens namn)*

*Styles: background-color, eventuellt color*

Psst! Om du hellre vill ha en gradient så kan du det också! Använd då istället *background*.

### 17.4 Personlig Sfär
Den börja se bra ut! Dock så är texten väldigt hopptryckt. Den måste få lite mer plats!

**Uppdrag:** Ge din knapp en bestämd *bredd* och *höjd*.

*Taggar att ändra: .(klassens namn)*

*Styles: width, height*

### 17.5 Ram eller inte ram?
Nu får du bestämma! Vill du ha ramen eller inte? Vi kan inte riktigt bestämma oss. Om du vill **ta bort ramen** gör du som koden nedan. *none* i programmeringstermer menar man *obefintlig*. Alltså, om du vill *ta bort* en viss egenskap så kan du skriva stilen och sedan *none*.

```CSS
border: none;
```

**Uppdrag:** Ge knappen en ram eller ta bort ramen.

*Taggar att ändra: .(klassens namn)*

*Styles: border*

---

## 18.1 Avstånd
Om man tittar på artisterna i **artister.html** så sitter de lite tätt ihop. Vi behöver mer space! Margin står för avstång och margin-top står därför för "avstånd på ovansidan".

**Uppdrag:** Gör mer plats mellan artisterna.

```CSS
#artists img {
  margin-top: 30px;
}
```

---

## E.8 Fyll kontaktsidan
Nu har du hållit på en del med HTML och CSS. Därför ger vi dig fria tyglar för att fylla kontaktsidan!

**Uppdrag:** Använd HTML och CSS för att fylla kontaktsidan.

*Exempel på taggar att använda: h2, h3, p, img, a, ul, li, button*

*Exempel på styles: color, background-color, font-weight, font-size, width, height, border, text-align*

---

## Helt klar?!
Waow! Tack så otroligt mycket för all din hjälp! Sidan ser helt fantastisk ut! Vad skulle vi gjort utan dig? Ja, det var väl allt för oss, så lycka till med dina egna projekt!

**Uppdrag:** Börja fundera på din egna hemsida. Tänk på vad den ska handla om, hur den ska se ut och hur du kan gå tillväga!

[Inspiration!](https://www.webdesign-inspiration.com/web-designs?page=1&per-page=24)

[Mer inspiration!](https://sv.wix.com/website/templates)
