export interface CarrouselItemInterface {
    id?:number,
    title?: string;
    description?: string;
    url?: string;
    address?: string;
    instagram?: string;
    email?: string;
    phone?: string;
    media: Array<any>;
  }

export interface highlightsItemInterface {
  id?: number,
  url?: string,
}