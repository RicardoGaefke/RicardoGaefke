import { IAttachment } from './IAttachment';

// eslint-disable-next-line no-used-vars
export interface ISubPlaces{
  Id?: number,
  Name: string,
  Position: number,
  Info: string,
  Active: boolean,
  Attachments: IAttachment[],
}