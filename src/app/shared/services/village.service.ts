import { Injectable } from '@angular/core';
import {IRestoran} from '../interfaces/restoran.interface'
import {Observable, Subject} from "rxjs";

@Injectable()
export class VillageService {

  constructor() { }

  private _restaurants:IRestoran[] = [
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

    {
      name: 'Spa Jean',
      type: 'spa',
      street: 'Street 20',
      phone: '+1234567890',
      images: [
        {
          url: 'assets/images/res01-outdor.jpg'
        },
        {
          url: 'assets/images/res01-indor.jpg',
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
      name: 'Super spa',
      type: 'spa',
      street: 'Street 30',
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
      name: 'Kozaks spa',
      type: 'spa',
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

  public selectedRes:Subject<IRestoran> = new Subject<IRestoran>();
  public restaurants = Observable.from(this._restaurants);

  public selectRestaurant(restaurant: IRestoran) {
    restaurant.info.image = restaurant.images[0].url;
    return this.selectedRes.next(restaurant);
  }
}
