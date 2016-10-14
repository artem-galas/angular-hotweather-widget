import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hw01-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent {

  constructor() { }

  public restaurants = [
    {
      name: 'Bili Jean',
      street: 'Gudimenko 20',
      phone: '+1234567890',
      images: [
        {
          url: 'assets/images/res01-indor.jpg',
        },
        {
          url: 'assets/images/res01-outdor.jpg'
        }
      ],
      weather: {
        temperature: '+15',
        water: '10',
        precipitation: 'cloud',
      },
      info: {
        followers: '2333',
        following: '3222'
      }
    },

    {
      name: 'Super puper',
      street: 'Glissenay 30',
      phone: '+0987654321',
      images: [
        {
          url: 'assets/images/res02-indor.jpg',
        },
        {
          url: 'assets/images/res02-outdor.jpg'
        }
      ],
      weather: {
        temperature: '+20',
        water: '15',
        precipitation: 'sun',
      },
      info: {
        followers: '8000',
        following: '3000'
      }
    },

    {
      name: 'Kozaks town',
      street: 'Soborniy ave 22',
      phone: '+3478906532',
      images: [
        {
          url: 'assets/images/res03-indor.png',
        },
        {
          url: 'assets/images/res03-outdor.jpg'
        }
      ],
      weather: {
        temperature: '+8',
        water: '4',
        precipitation: 'rain',
      },
      info: {
        followers: '5000',
        following: '4000'
      }
    },
  ];

  @Output()
  public restoran: EventEmitter<Object> = new EventEmitter();

  public selectRestoran(restoran) {
    restoran.info.image = restoran.images[0].url;
    this.restoran.emit(restoran);
  }
}
