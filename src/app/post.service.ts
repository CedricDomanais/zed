import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostService{
    listOfPosts: Post[] = [
        new Post(
          'The Crunch',
          'https://www.signomatic.com.au/sign/32144/image/plastic-signs-engraving-square-orange-fixing-method-adhesive-tape.png?v=1682106580',
          'do not disturb. Used to indicate that somebody does not wish to be disturbed, e.g. a sign on a hotel room door, or a "busy" mode of an instant messenger.',
          'Cedric',
          new Date()
        ),
      ];
      getPost() {
        return this.listOfPosts;
      }
      deleteButton(index: number){
        this.listOfPosts.splice(index, 1)
      }
      addPost(post: Post){
        this.listOfPosts.push(post);
      }
      updatePost(index: number, post: Post){
        this.listOfPosts[index] = post;
      }
      getSpecPost(index: number){
        return this.listOfPosts[index];
      }
}