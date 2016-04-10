"use strict";
var module_1 = require("../common/module");
require("./clock");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onTick = function (sender, time) {
        console.log(sender.id + ": " + time);
    };
    return AppComponent;
}());
exports.AppComponent = AppComponent;
module_1.module.component("app", {
    template: require("./app.html!text"),
    controller: AppComponent,
});
//# sourceMappingURL=app.js.map