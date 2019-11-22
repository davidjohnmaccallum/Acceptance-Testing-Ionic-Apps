import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {

  contacts: Contact[] = [
    {
      id: 1,
      name: 'David MacCallum',
      mobile: '0725586774',
      email: 'davidjohnmac@gmail.com',
      image: 'assets/img/me.jpeg'
    },
    {
      id: 2,
      name: 'David MacCallum',
      mobile: '0725586774',
      email: 'davidjohnmac@gmail.com',
      image: 'assets/img/me.jpeg'
    },
    {
      id: 3,
      name: 'David MacCallum',
      mobile: '0725586774',
      email: 'davidjohnmac@gmail.com',
      image: 'assets/img/me.jpeg'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  contactClicked(contact: Contact) {
    console.log("contactClicked", contact);
  }

}

export interface Contact {
  id: number;
  name: string;
  mobile: string;
  email: string;
  image: string;
}
