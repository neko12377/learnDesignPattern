"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTarget/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, ouputTarget) {
        this.analyzer = analyzer;
        this.ouputTarget = ouputTarget;
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.ouputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
