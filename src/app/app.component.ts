import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imageUpload';
  files: File[] = [];
  isDisabled = true; 

	onSelect(event) {
		this.files.push(...event.addedFiles);
    this.isDisabled = false;
	}

	onRemove(event) {
		this.files.splice(this.files.indexOf(event), 1);
    if(this.files.length === 0){
      this.isDisabled = true;  
    }
	}
  upload(){
    this.files = []; 
    this.isDisabled = true;
  }
}
