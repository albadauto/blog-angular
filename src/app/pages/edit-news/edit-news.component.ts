import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { INews } from 'src/app/models/news.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  frmEdit!: FormGroup;
  news: INews = {} as INews
  constructor(private activatedRoute: ActivatedRoute, private newsService: NewsService, private toast: NgToastService) { }
  params!: string | null;
  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.paramMap.get("id");
    this.newsService.getNewsById(this.params).subscribe((e: any) => {
      if(!e.error){
        this.news = e.result
      }
    })

    this.frmEdit = new FormGroup({
      title: new FormControl(),
      text: new FormControl(),
      fk_id_user: new FormControl(sessionStorage.getItem("usr_id"))
    })
  }


  editNews(){
    const id = Number(this.params);
    return this.newsService.editNews(this.frmEdit.value, id).subscribe((e: any) => {
      if(!e.error){
        this.toast.success({summary: e.message, duration: 3000})
      }else{
        this.toast.error({summary: "Algo deu errado!", duration: 3000})
      }
    })
  }

}
