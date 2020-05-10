import {  AngularFireDatabase } from '@angular/fire/database';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfr';
  /*cours : Observable<any[]>

  constructor(private db : AngularFireDatabase){
    //this.cours=db.list('cour').valueChanges();

   this.cours= db.list('cour').snapshotChanges().pipe(
    map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
   );
  }
  
  add(data){
this.db.list('cour').push(data.value);
  data.value="";
}
update(key, value){
  this.db.list('cour').update(key,  {value})
}
delete(key){
  this.db.list('cour').remove(key);
}*/
} 
