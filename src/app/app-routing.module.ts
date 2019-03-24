import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PanelComponent } from "./components/panel/panel.component";
import { AboutComponent} from "./components/about/about.component";
import { AddBookComponent} from "./components/add-book/add-book.component";
import { EditBookComponent} from "./components/edit-book/edit-book.component";
import { NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
    { path: '', redirectTo: 'panel', pathMatch: 'full' },
    { path: 'panel', component: PanelComponent },
    { path: 'about', component: AboutComponent },
    { path: 'addbook', component: AddBookComponent },
    { path: 'books/:id', component: EditBookComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    exports: [RouterModule],
    imports:[
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
