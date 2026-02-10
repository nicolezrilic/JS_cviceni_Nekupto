//Vytvořte si repozitář ze šablony cviceni-nekupto. Repozitář obsahuje stránku, která nabízí několik neotřelých produktů.

//1. bod úkolu: Otevřete si naklonovanou složku ve VS Code a prohlédněte si zdrojové HTML. Stránka je nastylována pomocí CSS knihovny Bootstrapu. Co přesně dělají použité CSS třídy není pro toto cvičení podstatné, nemusíte jim věnovat velkou pozornost.}}

const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

//2. bod úkolu: V souboru index.js si na posledním řádku do proměnné uložte kartu s prvním produktem. 
// Pomocí metody classList.add přidejte na tento element třídu border-primary, abychom první produkt na stránce zvýraznili.

/*
const prvniProduct = document.querySelector('#product1');
prvniProduct.classList.add("border-primary");     
*/

//3. bod: Do jiné proměnné si uložte tlačítko na druhé kartě. 
// Pomocí metody classList.remove odeberte třídu btn-primary a podívejte se, jak se tlačítko vizuálně změnilo.

/*
const druhyProduktTlacitko = document.querySelector ("#product2 button");
druhyProduktTlacitko.classList.remove("btn-primary");
*/

//4. bod/Do další proměnné si uložte element s třídou card-title posledního produktu. 
// Pomocí voláni metody classList.toggle přidejte na tento element třídu text-center. Text by se měl tímto zarovnat na střed. 
// Vyzkoušejte si, že když tuto metodu zavoláte znova, třída se z prvku odstraní. Takto můžete přepínat mezi přidáním a odebráním třídy pomocí opakovaného volání této metody.

/*
const tretiProductTitle = document.querySelector ("#product3 .card-title");
tretiProductTitle.classList.toggle("text-center");
tretiProductTitle.classList.toggle("text-center");    // Znovu zavolám metodu toggle a třída se odstraní, tj. nadpis se zarovná vlevo.
tretiProductTitle.classList.toggle("text-center");  // Znovu zavolám metodu toggle a třída se odstraní, tj. nadpis se zarovná na střed.
*/


//CVIČENÍ 2 - Nekup to, obsah (Využijte předchystané objekty.)

//Pokračujte v předchozím cvičení. Všimněte si, že v souboru index.js jsou uloženy údaje k jednotlivým produktům. Budeme chtít obsah naší stránky vygenerovat z těchto dat místo abychom je měli natvrdo zadrátované v HTML kódu.

/* 1. úkol: Otevřete si soubor index.html a zkopírujte si HTML obsah prvního produktu a vytvořte z něj řetězec v přiloženém JavaScriptovém souboru.
Obsah prvního produktu v souboru index.html můžeme nyní smazat. Výsledné HTML pak bude vypadat takto: <div id="product1" class="card mb-4 box-shadow"></div>
Pomocí interpolace řetězců předělejte váš JavaScriptový kód tak, že do vašeho řetězce s produktem vložíte obsah vlastností image, name a description.
Do nějaké proměnné si uložte element prvního produktu a nastavte jeho innerHTML na váš sestavený řetězec. Tímto na stránku vložíme obrázek prvního produktu.
Opakujte tento postup pro všechny ostatní produkty. Na konci byste měli dospět do stavu, kdy soubor index.html vůbec neosahuje vnitřek karet pro jednotlivé produkty. Jejich obsah je celý vyroben JavaScriptem z připravených dat.
*/


const product1HTML = `
    <img class="card-img-top" src="${product1.image}" alt="Card image cap">
      <div class="card-body">
        <h2 class="card-title">${product1.name}</h2>
        <p class="card-text">${product1.description}</p>
      </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;

const product1Elm = document.querySelector('#product1');
product1Elm.innerHTML = product1HTML;


const product2HTML = `
    <img class="card-img-top" src="${product2.image}" alt="Slepičkabelka">
        <div class="card-body">
          <h2 class="card-title">${product2.name}</h2>
          <p class="card-text">${product2.description}</p>
        </div>
    <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;

const product2Elm = document.querySelector('#product2');
product2Elm.innerHTML = product2HTML;

const product3HTML =`
    <img class="card-img-top" src="${product3.image}" alt="Anatoplavky">
        <div class="card-body">
          <h2 class="card-title">${product3.name}</h2>
          <p class="card-text">${product3.description}</p>
        </div>
    <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;

const product3Elm = document.querySelector('#product3');
product3Elm.innerHTML = product3HTML;

