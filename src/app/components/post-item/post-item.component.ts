import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { post } from './../../models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input('pot') post:post;

  @Output() hidepost:EventEmitter<post> = new EventEmitter();

  constructor() { 
    this.post ={
      id:0,
      title:'',
      body:'',
      votes :0
    }
  }

  ngOnInit(): void {
  }

  upVote(v:post):void
  {
    v.votes++;
  }
  downVote(v:post):void
  {
    v.votes--;
  }

  hidePost(post :post):void
  {
    this.hidepost.emit(post);
  }

}
