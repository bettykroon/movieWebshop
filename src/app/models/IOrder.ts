import { IOrderRows } from "./IOrderRows";

export interface IOrder {
    companyId: number;
    createdBy: string;
    id: number;
    created: Date;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: IOrderRows[];
}