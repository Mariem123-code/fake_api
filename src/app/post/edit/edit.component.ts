import { Component } from '@angular/core';
import { Post } from '../post';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post.service';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  id!:number;
  post!:Post;
  form!:FormGroup;

  constructor(public postService:PostService, private router:Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  
    this.postService.find(this.id).subscribe((data: Post) => {
      this.post = data;
      this.form.patchValue({
        title: this.post.title,
        body: this.post.body
      });
    });
  }
  
  
  
  get f(){
    return this.form.controls;
  }
  submit() {
    if (this.form.valid) {
      // Si le formulaire est valide, mettez à jour le post
      this.postService.update(this.id, this.form.value).subscribe((res: any) => {
        alert("Post updated successfully!");
        // Rediriger vers la page d'index
        this.router.navigateByUrl('/post/index');
      });
    }
  }

  navigateBackToIndex() {
    this.router.navigateByUrl('/post/index');
  }
}
