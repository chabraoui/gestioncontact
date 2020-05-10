import { Contacts } from './../models/contact';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactDoc: AngularFirestoreDocument<Contacts>
contactCollection:AngularFirestoreCollection<Contacts>;
contact: Observable<Contacts[]>
  constructor(private afs :AngularFirestore) { 
   this.contactCollection= this.afs.collection<Contacts>('contacts');
  this.contact= this.contactCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Contacts;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );;
  }
  getcontact(){
    return this.contact;
  }
  createcontact(contact : Contacts ){
this.contactCollection.add(contact);
  }
  updtaecontact(contact : Contacts){
    this.contactDoc=this.contactCollection.doc<Contacts>(contact.id);
    this.contactDoc.update(contact);
  }
  destroy(contact){
    this.contactDoc=this.contactCollection.doc<Contacts>(contact.id);
    this.contactDoc.delete();
  }
}
