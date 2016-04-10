import {module} from "../common/module";
import "./clock";
import {ClockComponent} from "./clock";

export class AppComponent {
    constructor() {
    }

    onTick(sender: ClockComponent, time) {
        console.log(sender.id + ": " + time);
    }
}

module.component("app", {
    template: require("./app.html!text"),
    controller: AppComponent,
});
