import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ListcontactComponent } from './component/listcontact/listcontact.component';
import { ContactService } from './services/contact.service';
import { FormsModule }   from '@angular/forms';
import { NavbarComponent } from './componenents/navbar/navbar.component';
import { AddcontactComponent } from './componenents/addcontact/addcontact.component';

@NgModule({
  declarations: [
    AppComponent,
    ListcontactComponent,
    NavbarComponent,
    AddcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
