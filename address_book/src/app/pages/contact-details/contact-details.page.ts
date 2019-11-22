import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contact-list/contact-list.page';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit {

  contact: Contact = {
    id: 1,
    name: 'David MacCallum',
    mobile: '0725586774',
    email: 'davidjohnmac@gmail.com',
    image: 'assets/img/me.jpeg'
  };

  constructor(route: ActivatedRoute) {
    console.log("id", route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}
