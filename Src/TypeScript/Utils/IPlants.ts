import { IAttachment } from './IAttachment';

// eslint-disable-next-line no-used-vars
export interface IPlants {
  Id?: number,
  Name: string,
  Country: number,
  Type: number,
  Position: number,
  Info: string,
  Active: boolean,
  Attachments: IAttachment[],
}