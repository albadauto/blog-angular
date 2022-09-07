import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INews } from 'src/app/models/news.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  news: INews = {} as INews
  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService) { }
  params!: string | null;
  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.paramMap.get("id");
    this.newsService.getNewsById(this.params).subscribe((e: any) => {
      if(!e.error){
        this.news = e.result

      }
    })
  }

}
