import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  ngOnInit() {
    //this.modifiedName();
    //this.pairOrImpair(1);
    //this.findIndexPair();
    //this.findUserWithEmail();
    //his.deleteUserViaIndex(1);
    //this.AddElementToArray('cerise');
    //this.returnLength();
    //this.transformToObject();
    //this.filterByActive();
    //this.remplaceElementById(3);
    //this.sortByDate();
    //this.longestChain();
    //this.namesUpperCase();
    //this.extractId();
    //this.convertToArray();
    //this.deleteValue();
    //this.findWord();
    //this.reverseString();
    //this.findDouble();
    //this.countWordInSentence();
    //this.fusionTwoArray();
    //this.uniqueValue();
    //this.findLongest();
    //this.findScoreMax();
    //this.findFirstKey();
    //this.deleteObjetWithVoid();
    //this.addValuesInArrayObject();
    //this.addValuesInArrayObject();
    //this.findIndexOfWord();
    this.findDateMoreRecent();
  }

  //1. Modifier un name via findIndex

  users = [
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Bob' },
    { id: 5, name: 'Charlie' },
  ];

  //je veux modifier la key name par une nouvelle valeur
  public modifiedName() {
    // 1- recuperer la valeur du name que je veux modifier
    let findIndex = this.users.findIndex((value) => value.name === 'Alice');
    let modifiedName = (this.users[findIndex].name = 'Pierre');
    console.log('FindIndex', modifiedName);
    console.log('FindIndex', this.users);
  }

  //2. Trouver l’index du premier nombre pair

  numbers = [1, 3, 7, 10, 15];
  public findIndexPair() {
    this.numbers.findIndex((index) => {
      if (index % 2 === 0) {
        console.log(index + 'est pair');
      }
    });
  }

  //3. Trouver un utilisateur avec un email

  userss = [
    { id: 1, email: 'alice@test.com' },
    { id: 2, email: 'bob@test.com' },
  ];

  findUserWithEmail() {
    let result = this.userss.find((user) => user.email);
    console.log('result', result);
  }

  //4. Supprimer un objet via son index
  items = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' },
  ];

  deleteUserViaIndex(id: number) {
    let result = this.items.filter((user) => user.id !== id);
    console.log('deleteUserViaIndex', result);
  }

  //5. Ajouter un élément s’il n’existe pas

  fruits = ['pomme', 'banane', 'orange'];
  fruitToAdd = 'kiwi';

  AddElementToArray(value: string) {
    let includes = this.fruits.includes(value);
    if (includes === true) {
      console.log('valeur existe deja dans le tableau');
    } else {
      let result = this.fruits.push(value);
      console.log('Nombres de fruits', result);
      console.log('fruits', this.fruits);
    }
  }
  //6. Retourner la longueur des chaînes

  words = ['voiture', 'train', 'avion'];

  returnLength() {
    let arrayOfChaine = this.words.map((word) => word.length);
    console.log('arrayOfChaine', arrayOfChaine);
  }

  //7. Transformer en objets

  names = ['Alice', 'Bob', 'Charlie'];

  transformToObject() {
    let test = this.names.map((name) => {
      return {
        name: name,
      };
    });

    console.log('transformToObject', test);
  }

  // 8.Filtrer par active: true

  usersss = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: true },
  ];

  filterByActive() {
    let result = this.usersss.filter((user) => user.active === true);
    console.log('result', result);
  }

  //9. Remplacer un élément par id

  products = [
    { id: 1, value: 'A' },
    { id: 2, value: 'B' },
    { id: 3, value: 'C' },
  ];
  productItem = { id: 2, value: 'Z' };

  remplaceElementById(id: number) {
    let foundIndex = this.products.findIndex((product) => product.id === id);
    this.products[foundIndex] = this.productItem;
    console.log('result', this.products);
  }

  //10. Trier par date

  posts = [
    { id: 1, createdAt: new Date('2023-01-01') },
    { id: 2, createdAt: new Date('2023-04-15') },
    { id: 3, createdAt: new Date('2022-12-10') },
  ];

  sortByDate() {
    let result = this.posts.sort((a: any, b: any) => {
      return a.createdAt - b.createdAt;
    });
    console.log('result', result);
  }

  //11. Index de la chaîne la plus longue

  strings = ['chat', 'éléphant', 'lion', 'hippopotame'];

  longestChain() {
    let longestWord: string = '';
    this.strings.forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
      return longestWord;
    });
    console.log('lonestWord', longestWord);
  }

  //12. Noms en majuscules

  itemss = [{ name: 'alice' }, { name: 'bob' }, { name: 'charlie' }];

  namesUpperCase() {
    let result = this.itemss.map((user) => {
      return user.name.toLocaleUpperCase();
    });

    console.log('result', result);
  }
  //13. Extraire les IDs

  userssss = [
    { id: 101, name: 'A' },
    { id: 102, name: 'B' },
    { id: 103, name: 'C' },
  ];

  extractId() {
    let result = this.userssss.map((user) => user.id);
    console.log('result', result);
  }

  //14. Convertir CSV en tableau

  csv = 'a,b,c,d';
  convertToArray() {
    let result = this.csv.split(',');
    console.log(result);
  }

  //15. Transformer tableau en objet indexé par id

  people = [
    { id: 'u1', name: 'Alice' },
    { id: 'u2', name: 'Bob' },
  ];

  //16. Supprimer valeurs nulles

  data = ['hello', null, 'world', undefined, '', 'test'];
  // pourquoi lorsque j'utilkse le filter ça marche et pas la function map
  deleteValue() {
    let result = this.data.filter((value) => value);
    console.log('result', result);
  }

  //17. Mot dans une chaîne (casse insensible)

  phrase = 'Le JavaScript est génial';
  mot = 'JavaScript';

  findWord() {
    let word = this.phrase.includes(this.mot);
    if (word === true) {
      console.log(`${this.mot} est bien dans la phrase`);
    } else {
      console.log(`${this.mot} n'est dans la phrase`);
    }
  }

  //18. Inverser une chaîne

  texte = 'Bonjour tout le monde';
  reverseString() {
    let result = this.texte.split('').reverse().join(' ');
    console.log('result', result);
  }
  //19. Trouver les doublons

  arrayOfNumbers = [1, 2, 2, 3, 4, 4, 5];

  findDouble() {
    let newArray = new Set(this.arrayOfNumbers);
    console.log('newArray', newArray);
  }

  // 20. Compter les mots dans une phrase

  sentence = 'le chat dort le chat mange le chat ronronne ok';

  countWordInSentence() {
    let count = this.sentence.split(' ').length;
    console.log('count', count);
  }

  //21. Fusionner deux tableaux d’objets par id

  arr1 = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
  ];
  arr2 = [
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
  ];

  fusionTwoArray() {
    let array = this.arr1.concat(this.arr2);
    let user = array.filter(
      (user, index, sef) => index === sef.findIndex((u) => u.id === user.id)
    );
    console.log('array', user);
  }
  //22. Extraire les valeurs uniques

  values = [1, 2, 2, 3, 4, 1, 5];
  uniqueValue() {
    let result = [...new Set(this.values)];
    console.log('okokok', result);
  }

  //23. Découper et filtrer mots longs

  longText = 'JavaScript est un langage puissant utilisé côté client';
  findLongest() {
    let array = this.longText.split(' ');
    let newArray: any = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].length > 4) {
        newArray.push(array[i]);
      }
    }
    console.log('result', newArray);
  }

  //24. Objet avec valeur maximale (score)

  players = [
    { name: 'Alice', score: 42 },
    { name: 'Bob', score: 87 },
    { name: 'Charlie', score: 68 },
  ];

  findScoreMax() {
    let max = 0;

    let players = this.players;

    for (let i = 0; i < players.length; i++) {
      if (players[i].score > max) {
        max = players[i].score;
      }
    }

    console.log('result', max);
  }

  //25. Premier objet contenant une clé

  cles = [{ id: 1 }, { id: 2, category: 'tech' }, { id: 3 }];

  findFirstKey() {
    let result = this.cles.find((key) => key.category);
    console.log('result', result);
  }

  //26. Supprimer objets avec valeurs vides

  peoples = [
    { name: 'Alice', email: '' },
    { name: 'Bob', email: 'bob@test.com' },
    { name: 'Charlie', email: null },
  ];
  deleteObjetWithVoid() {
    let result = this.peoples.filter((people) => people.email);
    console.log('result', result);
  }

  //27. Ajouter isSelected: false à chaque objet
  //je savais pas comment le faire !!!

  objects = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
  ];

  addValuesInArrayObject() {
    let result = this.objects.map((obj) => ({ ...obj, isSelected: true }));
    console.log('result', result);
  }

  //28. Formater Nom (longueur)

  prenoms = ['Ali', 'Sophie', 'Jean-Pierre'];

  //29. Trouver l’index d’un mot dans une chaîne

  phrasee = 'Le ciel est bleu et le soleil brille';
  mott = 'soleil';

  findIndexOfWord() {
    let array = this.phrasee.split(' ');
    let result = array.findIndex((a) => a === this.mott);
    console.log('result', result);
  }

  //30. Trouver la date la plus récente

  dates = [
    new Date('2021-01-10'),
    new Date('2023-05-01'),
    new Date('2022-09-15'),
  ];

  findDateMoreRecent() {
    const maxDate = this.dates.reduce((a, b) => (a > b ? a : b));
    console.log('maxDate', maxDate);
  }
}
