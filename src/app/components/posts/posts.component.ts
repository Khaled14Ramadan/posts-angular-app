import { Component, OnInit } from '@angular/core';
import { post } from './../../models/post';
import { PostserviceService } from './../../services/postservice.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:post[] =[];

  //don't forget write the class name for services in the constructor
  constructor(private Postservice:PostserviceService) { }

  ngOnInit(): void {
    this.Postservice .getPosts().subscribe(res => {
      // console.log(res);
      for(let i=0 ; i<res.length ; i++)
      {
        const post = res[i];
        console.log(post);

        post["votes"]=1;
        this.posts.push(post);
      }
      //this.posts = res;
    })
  }

  hidePost(post:post)
  {
    let choose = window.prompt(`you will hide post of ${post.id} (Y/N) ?`);
    if(choose === 'y'|| choose === 'Y')
    {
      this.posts = this.posts.filter(p => p.id != post.id);
    }
    
  }

  adddpost(post:post):void {
    this.posts.unshift(post);

    alert("add new post")
  }

}
