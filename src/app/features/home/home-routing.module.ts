import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

//componentes
import { HomeComponent } from "./home.component";


const routes: Routes = [
    {path: 'homepage', component: HomeComponent}
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }