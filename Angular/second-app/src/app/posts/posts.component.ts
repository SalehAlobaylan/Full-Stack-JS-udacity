import { Component, OnInit } from '@angular/core';
import { Post } from '../modules/Post';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  title: string = "Posts";
  posts: Post[] = []
  ngOnInit(): void {
    // this.posts = 
  }
}
