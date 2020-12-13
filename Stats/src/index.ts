import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";

// matchReader.matches
// const reader = new MatchReader("football.csv")
// reader.read();

// Create an object that satisfies the "DataReader" interface
// const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying
// the "DataReader" interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv("football.csv")
matchReader.load();

// const summary = new Summary(
//     new WinsAnalysis("Man United"),
//     new HtmlReport(),
// );

const summary = Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches)



