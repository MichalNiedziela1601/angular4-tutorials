import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserItemComponent} from './user-item/user-item.component';
import {UserListComponent} from './user-list/user-list.component';
import {FormsModule} from '@angular/forms';
import { ArticleComponent } from './article/article.component';

@NgModule({
    declarations: [
        AppComponent,
        UserItemComponent,
        UserListComponent,
        ArticleComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
