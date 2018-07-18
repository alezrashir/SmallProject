import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { DialogAddComponent } from './dialog-add/dialog-add.component';
import {Book} from './Book';


@NgModule({
  declarations: [
    AppComponent,
    DialogDeleteComponent,
    DialogEditComponent,
    DialogAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents: [DialogDeleteComponent , DialogEditComponent, DialogAddComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
