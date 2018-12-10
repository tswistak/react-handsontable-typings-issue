"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_1 = require("@handsontable/react");
var HotApp = /** @class */ (function (_super) {
    __extends(HotApp, _super);
    function HotApp(props) {
        var _this = _super.call(this, props) || this;
        _this.data = [
            ["", "Ford", "Volvo", "Toyota", "Honda"],
            ["2016", 10, 11, 12, 13],
            ["2017", 20, 11, 14, 13],
            ["2018", 30, 15, 12, 13]
        ];
        return _this;
    }
    HotApp.prototype.render = function () {
        return (React.createElement("div", { id: "hot-app" },
            React.createElement(react_1.HotTable, { data: this.data, colHeaders: true, rowHeaders: true, width: 600, height: 300, stretchH: "all" })));
    };
    return HotApp;
}(React.Component));
(function () {
    ReactDOM.render(React.createElement(HotApp, null), document.getElementById('target'));
})();
//# sourceMappingURL=index.js.map