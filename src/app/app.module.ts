import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { GhSearchService} from './gh-search.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HighlightDirective } from './highlight.directive';
import { DaysPipe } from './days.pipe';
import { DateFormatPipe } from './date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    SearchResultsComponent,
    HighlightDirective,
    DaysPipe,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GhSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
