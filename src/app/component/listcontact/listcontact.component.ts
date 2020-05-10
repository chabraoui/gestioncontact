import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/models/contact';

@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.css']
})
export class ListcontactComponent implements OnInit {
  statusEdit:boolean=false;
  mycontact:Contacts;
contacts;
  constructor( private contactService : ContactService) { }

  ngOnInit(): void {
    this.contactService.getcontact().subscribe(contact => {
      this.contacts = contact;
      console.log(this.contacts);
    })
  }
update(contact){
this.contactService.updtaecontact(contact);
this.statusEdit=false;
}
editecontact(contact){
  this.statusEdit=!this.statusEdit;
  this.mycontact=contact;
  
}
delete(contact){
  if(confirm("are you sure to delete")){
    this.contactService.destroy(contact);
  }
  this.statusEdit=false;
}
}
