import {IWeather} from "./weather.interface";
import {IInfo} from "./info.weather";
import {IImage} from "./image.interface";
export interface IRestoran {
  name: string,
  street: string,
  phone: string,
  images: IImage[],
  weather: IWeather,
  info: IInfo
}
