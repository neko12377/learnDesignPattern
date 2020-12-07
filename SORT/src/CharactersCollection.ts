import {Sorter} from "./sorter";

export class CharactersCollection extends Sorter {
    constructor(public data: string){
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
         return this.data[leftIndex].toUpperCase() > this.data[rightIndex].toUpperCase()
    }

    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split("");
        const leftHand = this.data[leftIndex];

        characters[leftIndex] = this.data[rightIndex];
        characters[rightIndex] = leftHand;

        this.data = characters.join("");
    }
}
