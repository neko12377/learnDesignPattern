"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("./utils");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.fromCsv = function (fileName) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(fileName));
    };
    MatchReader.prototype.load = function () {
        this.reader.read();
        this.matches = this.reader.data.map(function (datum) {
            return [
                utils_1.dateStringToDate(datum[0]),
                datum[1],
                datum[2],
                parseInt(datum[3]),
                parseInt(datum[4]),
                datum[5],
                datum[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
