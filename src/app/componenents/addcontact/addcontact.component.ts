import { ContactService } from './../../services/contact.service';
import { Contacts } from './../../models/contact';
import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  status:boolean =false;
contact: Contacts = {
  name:'',
  tel:0
}
  constructor(private contactServices : ContactService) { }

  ngOnInit(): void {
  }
  creatcontact(){
    this.contactServices.createcontact(this.contact);
  console.log("ajouter avec succées");
  this.contact = {
    name:'',
    tel:null,
  }
  this.status=false;
  }
}
