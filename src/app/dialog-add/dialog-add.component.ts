import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AppComponent} from '../app.component';
import {Book} from '../Book';
@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent implements OnInit {

  @ViewChild('title') public Title: ElementRef;
  @ViewChild('author') public Author: ElementRef;
  @ViewChild('publish') public Publish: ElementRef;
  @ViewChild('id') public Id: ElementRef;
  constructor(public thisDialogRef: MatDialogRef<AppComponent> , @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  Cancel() {
    this.thisDialogRef.close('cancel');
  }
  AddConfirm() {
   const author = this.Author.nativeElement.value;
   const title = this.Title.nativeElement.value;
   const publish = this.Publish.nativeElement.value;
   const id = Number(this.Id.nativeElement.value);

   if (id !== 0 && author !== '' && title !== '' && publish !== '') {

     var book = new Book(id, publish, title, author);
     this.thisDialogRef.close(book);
   } else {
     alert('Error , Not All Input is valid');
   }
}
}
