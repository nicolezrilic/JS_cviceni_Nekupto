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

const prvniProduct = document.querySelector('#product1');
prvniProduct.classList.add("border-primary");     
//třída border-primary pochází z knihovny Bootstramp, která byla použita pro stylování, proto v CSS není žádný kód


//3. bod: Do jiné proměnné si uložte tlačítko na druhé kartě. 
// Pomocí metody classList.remove odeberte třídu btn-primary a podívejte se, jak se tlačítko vizuálně změnilo.

const druhyProduktTlacitko = document.querySelector ("#product2 button");
druhyProduktTlacitko.classList.remove("btn-primary");

//4. bod/Do další proměnné si uložte element s třídou card-title posledního produktu. 
// Pomocí voláni metody classList.toggle přidejte na tento element třídu text-center. Text by se měl tímto zarovnat na střed. 
// Vyzkoušejte si, že když tuto metodu zavoláte znova, třída se z prvku odstraní. Takto můžete přepínat mezi přidáním a odebráním třídy pomocí opakovaného volání této metody.

const tretiProductTitle = document.querySelector ("#product3 .card-title");
tretiProductTitle.classList.toggle("text-center");