import { PostProvider } from './../../providers/post/post';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post } from '../../models/post';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: Post[] = [];

  constructor(public navCtrl: NavController, private _postProvider: PostProvider) { }

  getPosts() {
      this._postProvider.getPosts()
          .subscribe(data => this.posts = data);
  }

  ngOnInit(): void {
      return this.getPosts();
  }

  onAdd() {
      let post = new Post();
      let date = new Date();
      let time = date.toDateString();
      post.title = `Title: ${time}`;

      this._postProvider.addPost(post); // post to web service

      this.posts.unshift(post); // updates the UI. Should be the work of the backend
  }
  onUpdate() {
      let post = this.posts[0];
      post.title += " [updated]";

      this._postProvider.updatePost(post);
  }
  onDelete() {
      let post = this.posts[0];
      this._postProvider.deletePost(post);

      this.posts.splice(0, 1);
  }
}
