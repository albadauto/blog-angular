import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  params!: string | null;
  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.paramMap.get("id");
  }

}
