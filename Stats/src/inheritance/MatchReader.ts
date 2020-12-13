import {CsvFileReader} from "./CsvFileReader";
import {dateStringToDate} from "../utils";
import {MatchResult} from "../MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(datum: string[]): MatchData {
        return [
            dateStringToDate(datum[0]),
            datum[1],
            datum[2],
            parseInt(datum[3]),
            parseInt(datum[4]),
            datum[5] as MatchResult, // "H", "A", "D"
            datum[6],
        ];
    }
}