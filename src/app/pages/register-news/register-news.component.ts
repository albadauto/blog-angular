import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { NotifierService } from 'angular-notifier';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-register-news',
  templateUrl: './register-news.component.html',
  styleUrls: ['./register-news.component.css']
})
export class RegisterNewsComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private newsService: NewsService, private toast: NgToastService) {
    this.params = this.activateRoute.snapshot.paramMap.get('test')
  }
  params!: string | null
  idUser!: string | null;
  frmGroupNews!: FormGroup;
  ngOnInit(): void {
    console.log(this.params)
    this.frmGroupNews = new FormGroup({
      title: new FormControl(),
      text: new FormControl(),
      fk_id_user: new FormControl(sessionStorage.getItem("usr_id"))
    })

  }

  onsubmit(){
    return this.newsService.registerNews(this.frmGroupNews.value).subscribe((response: any) => {
        this.toast.success({detail: "SUCCESS", summary: response.message, duration: 3000})
    })
  }
}
