import {Component, Output, EventEmitter} from '@angular/core';
import {VillageComponent} from '../village/village.component'
import {IRestoran} from "../shared/interfaces/restoran.interface";

@Component({
  selector: 'hw01-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent {

  constructor() { }
  public imageHeader = 'assets/images/1.jpg';

  public restaurants:IRestoran[] = [
    {
      name: 'Bili Jean',
      type: 'restaurant',
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
      type: 'restaurant',
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
      type: 'restaurant',
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
  public restoran: EventEmitter<IRestoran> = new EventEmitter();

  public selected(res:IRestoran) {
    if (res.images[1].url) {
      this.imageHeader = res.images[1].url;
    }
    this.restoran.emit(res);
  }
}
