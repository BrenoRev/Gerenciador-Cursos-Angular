import { NgModule } from "@angular/core";
import { pipe } from "rxjs";
import { ReplacePipe } from "./replace.pipe";

@NgModule({
    declarations: [
        ReplacePipe
    ],
    exports:[
        ReplacePipe
    ]
})
export class AppPipeModule{

}