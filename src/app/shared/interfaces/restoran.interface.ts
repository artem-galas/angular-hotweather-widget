import { IWeather, IInfoWeather, IImage } from './index';

export interface IRestoran {
  type?: string;
  name: string;
  street: string;
  phone: string;
  images: IImage[];
  weather: IWeather;
  info: IInfoWeather;
}
