import fs from "fs";

export abstract class CsvFileReader<dataToMatch> {
    data: dataToMatch[] = [];

    constructor(public filename: string) {}
    abstract mapRow(datum: string[]): dataToMatch;

    read(): void {
        this.data = fs
            .readFileSync(this.filename, {
                encoding: "utf-8",
            })
            .split("\n")
            .map(
                (datum): string[] => {
                return datum.split(",");
                }
            )
            .map(this.mapRow);
    }
}