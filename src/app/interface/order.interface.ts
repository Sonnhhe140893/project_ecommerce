export interface IOrder {
  id: number;
  email: string;
  name: string;
  address: string;
  phonenumber: string;
  user_id: string;
  details?: IDetailOrder[];
}

export interface IDetailOrder {
  idPurchase: number;
  idP: number;
  nameP: string;
  piceP: string;
  quantityP: number;
  id: number;
}
