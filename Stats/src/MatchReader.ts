import {dateStringToDate} from "./utils";
import {MatchResult} from "./MatchResult";
import {MatchData} from "./MatchData";
import {CsvFileReader} from "./CsvFileReader";

interface DateReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    static fromCsv(fileName: string) {
        return new MatchReader(new CsvFileReader(fileName));
    }
    matches: MatchData[] = []

    constructor(public reader: DateReader) {}

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((datum: string[]): MatchData => {
            return [
                dateStringToDate(datum[0]),
                datum[1],
                datum[2],
                parseInt(datum[3]),
                parseInt(datum[4]),
                datum[5] as MatchResult, // "H", "A", "D"
                datum[6],
            ];
        })
    }
}