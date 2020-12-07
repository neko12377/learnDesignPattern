import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import {LinkedList} from "./LinkedLists";

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 8, -100, 77, 123]);
const characterCollection = new CharactersCollection("DpSggle");
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

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sorter = new Sorter(linkedList); // before we extract sorter
linkedList.print();
linkedList.sort();
linkedList.print();