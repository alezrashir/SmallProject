import {Component, OnInit, Inject, ViewChild, ElementRef} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AppComponent} from '../app.component';
import {Book} from '../Book';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

  book: Book;
  @ViewChild('title') public Title: ElementRef;
  @ViewChild('author') public Author: ElementRef;
  @ViewChild('publish') public Publish: ElementRef;
  @ViewChild('id') public Id: ElementRef;

  constructor(public thisDialogRef: MatDialogRef<AppComponent> , @Inject(MAT_DIALOG_DATA) public data: Book) {this.book = data;
   }

  ngOnInit() {
  }
  OnEditConfirm() {
    const author = this.Author.nativeElement.value;
    const title = this.Title.nativeElement.value;
    const publish = this.Publish.nativeElement.value;

    if ( author !== '' && title !== '' && publish !== '') {

    let BookAfterChange = new Book(this.book.id, publish, title, author);
    this.thisDialogRef.close(BookAfterChange);
    } else {
      alert('Error , Not All Input is valid ');
    }
  }

  OnEditCancel() {
    this.thisDialogRef.close('cancel');
  }
}
