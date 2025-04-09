import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
    {path: 'java', component: HomeComponent},
    {path: 'jquery', component: HomeComponent},
    {path: 'javascript', component: HomeComponent},
    {path: '', component: HomeComponent}
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }