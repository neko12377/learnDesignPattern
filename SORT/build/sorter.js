"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    // collention: number[];
    // constructor(public collection: Sortable) {
    // this.collention = collection
    // }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
                // // All of this only works if collection is number[]
                // // If collection is an array of numbers
                // // Type Guard
                // if (this.collection instanceof Array) {
                //     // collection === number[]
                //     let leftHand = this.collection[j];
                //     let rightHand = this.collection[j + 1];
                //     if (leftHand > rightHand) {
                //         this.collection[j] = rightHand;
                //         this.collection[j + 1] = leftHand;
                //         console.log(leftHand, this.collection[j], rightHand, this.collection[j + 1]);
                //     }
                // }
                //
                //
                // // Only going to work if collection is a string
                // // If collection is a string do this logic instead:
                // // ~~~logic to compare and swap characters in a string
                // // Type Guard
                // if (typeof this.collection === "string") {
                //
                // }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
