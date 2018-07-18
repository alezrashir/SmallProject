import {Component, Inject, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import {MatDialog} from '@angular/material';
import {DialogDeleteComponent} from './dialog-delete/dialog-delete.component';
import {DialogEditComponent} from './dialog-edit/dialog-edit.component';
import {DialogAddComponent} from './dialog-add/dialog-add.component';
import {Book} from './Book';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit {

  title = 'app';
  Books: Array<Book>;
  DialogResult = '';
  IsOnce = true;


  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit() {

    const posts$ = Observable
      .ajax('https://bookslibraryshir.herokuapp.com/assets/data/books.json')
      .map(e => e.response);

    const htmlSubscription = posts$
      .subscribe(res => {
        this.Books = res;

        for (let i = 0; i < this.Books.length; i++) {
          this.Books[i].title = titleRemoveNotNumbers(this.Books[i].title);
        }

        }, err => {
          console.error(err + 'Error Loading Text From Json FIle' );
        }
      );
  }



  delete(b: Book) {


       let dialogRef = this.dialog.open(DialogDeleteComponent, {
        width: '600px',
        data: b.id
      }
    );


    dialogRef.afterClosed().subscribe(result => {


      this.DialogResult = result;
      if (result === 'yes') {
        const index = this.Books.indexOf(b, 0);
        if (index > -1) {
          this.Books.splice(index, 1);
        }
      }
    });

  }



  add() {

    let dialogRef = this.dialog.open(DialogAddComponent, {
        width: '600px',
        data: 'hi'
      }
    );


    dialogRef.afterClosed().subscribe(result => {

      if (result === 'cancel') { return; }
      var IsOnce = true;

     result.title = titleRemoveNotNumbers(result.title);

      for (let i = 0; i < this.Books.length; i++) {
        if ((this.Books[i].id === result.id) || (this.Books[i].title === result.title)) {
          IsOnce = false;
          break;
        }
      }
       if (IsOnce === true) {
         this.Books.push(result);
       }else {
        alert('Error - Book Title Or Id Is Already Exist');
       }
    });
    }




    edit(b: Book) {

    let dialogRef = this.dialog.open(DialogEditComponent, {
     width: '400px',
       data: b
       }
    );


    dialogRef.afterClosed().subscribe(result => {

      if (result === 'cancel') { return; }

      var IsOnce = true;
      const index = this.Books.indexOf(b, 0);
      result.title = titleRemoveNotNumbers(result.title);

    for (let i = 0; i < this.Books.length; i++) {
     if ((this.Books[i].id !== b.id) && (this.Books[i].title === b.title)) {
       IsOnce = false;
       break;
     }
      }
      if (IsOnce === true) {
      this.Books[index] = result;
    } else {
        alert('Error - Book Title Or Id Is Already Exist');
      }
  });


  }
}
 function titleRemoveNotNumbers(title: string) {

  let arrTemp  = title.split(' ');
  let strResultTitle = '';

  for (let j = 0 ; j < arrTemp.length ; j++) {
    arrTemp[j] = arrTemp[j].replace(/[^0-9a-z]/gi, '');
    arrTemp[j] = arrTemp[j].replace(/[0-9]/g, '');
    if (arrTemp[j] !== '') {
      let strTemp = arrTemp[j][0].toUpperCase() + arrTemp[j].substr(1).toLowerCase();
      strResultTitle += ' ' + strTemp;
    }
  }
  return strResultTitle; }

