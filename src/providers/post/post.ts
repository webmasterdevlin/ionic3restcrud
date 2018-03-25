import { Post } from './../../models/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {
  private _url: string = "http://jsonplaceholder.typicode.com/posts/";

    constructor(private _httpClient: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this._httpClient
            .get<Post[]>(this._url);
    }

    addPost(post: Post): Observable<any> {
        return this._httpClient.post(this._url, post)
    }

    updatePost(post: Post): Observable<any> {
        return this._httpClient.put(`${this._url}${post.id}`, post);
    }

    deletePost(post: Post): Observable<any> {
        return this._httpClient.delete(`${this._url}${post.id}`)
    }

}
