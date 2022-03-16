import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from "./containers/news/news.component";
import {NewsResolverService} from "./services/news-resolver.service";

const ROUTES: Routes = [
  {
    path: '',
    component: NewsComponent,
    resolve: {
      news: NewsResolverService,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  providers: [NewsResolverService],
  exports: [RouterModule],
})
export class NewsRouterModule {}
