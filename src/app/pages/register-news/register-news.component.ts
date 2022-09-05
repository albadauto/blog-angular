import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-register-news',
  templateUrl: './register-news.component.html',
  styleUrls: ['./register-news.component.css']
})
export class RegisterNewsComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private newsService: NewsService) {
    this.params = this.activateRoute.snapshot.paramMap.get('test')
  }
  params!: string | null
  frmGroupNews!: FormGroup;
  ngOnInit(): void {
    console.log(this.params)
  }
}
