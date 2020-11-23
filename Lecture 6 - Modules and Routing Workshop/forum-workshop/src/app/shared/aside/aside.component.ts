import { Component, Input } from '@angular/core';
import { IPost } from '../interfaces/post';
import { PostService } from '../../post/post.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  @Input() title: string;
}
