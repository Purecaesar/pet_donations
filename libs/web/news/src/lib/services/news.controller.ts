import { Injectable } from '@angular/core';
import { NewsApiService } from '@pet-donations/web/endpoints';
import { merge, Observable, pluck, Subject, switchMap } from 'rxjs';
import { News } from '@pet-donations/interfaces';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class NewsController {
  public get news$() {
    return merge(
      this.ar.data.pipe(pluck('news')),
      this.newsTrigger$.pipe(switchMap(() => this.newsApi.getAllNews()))
    ) as Observable<News[]>;
  }

  private readonly newsTrigger$ = new Subject();

  constructor(
    private readonly newsApi: NewsApiService,
    private readonly ar: ActivatedRoute
  ) {}
}
