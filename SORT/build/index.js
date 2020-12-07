"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedLists_1 = require("./LinkedLists");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, 8, -100, 77, 123]);
var characterCollection = new CharactersCollection_1.CharactersCollection("DpSggle");
// const sorter = new Sorter(numbersCollection); // before we extract sorter
// const sorter = new Sorter(characterCollection); // before we extract sorter
// sorter.sort(); // before we extract sorter
// sortert.sort(); // before we extract sorter
// console.log(numbersCollection.data);
// console.log(characterCollection.data);
// numbersCollection.sort();
// characterCollection.sort();
// console.log(numbersCollection.data);
// console.log(characterCollection.data);
var linkedList = new LinkedLists_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorter = new Sorter(linkedList); // before we extract sorter
linkedList.print();
linkedList.sort();
linkedList.print();
