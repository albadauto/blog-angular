import { Component, OnInit } from '@angular/core';
import { INews } from 'src/app/models/news.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allNews: INews[] = []
  usr_id!: string | null;
  edit: boolean = false
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.usr_id = sessionStorage.getItem("usr_id")
    this.newsService.getAllNews().subscribe((res: any) => {
      if (res.error === false){
        this.allNews = res.searched;
        this.allNews.forEach((val: INews) => {
         if (val.fk_id_user === Number(this.usr_id)){
          this.edit = true
         }else{
          this.edit = false
         }
        })
      }else{
        this.allNews = res.message;
      }
    });
  }

  deleteNews(id: number){
    return this.newsService.deleteNews(id).subscribe(() => {
      this.allNews = this.allNews.filter((val) => val.id !== id);
    })
  }


}
