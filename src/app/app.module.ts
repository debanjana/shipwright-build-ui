import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormParentComponent } from './components/form-parent/form-parent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'; 
import {MatButtonModule} from '@angular/material/button';
import { ProgressDialogComponent } from './components/progress-dialog/progress-dialog.component';
import {MatDialogModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SuccessComponent } from './components/success/success.component';
import { ClipboardModule } from '@angular/cdk/clipboard'


@NgModule({
  declarations: [
    AppComponent,
    FormParentComponent,
    ProgressDialogComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    ClipboardModule
  ],
  providers: [],
  entryComponents: [
    ProgressDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
