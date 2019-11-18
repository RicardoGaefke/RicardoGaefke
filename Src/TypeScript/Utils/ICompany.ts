import { IAttachment } from './IAttachment';

export interface ICompany {
  Id?: number,
  Country: number,
  Registry: number,
  Name: string,
  OfficialName: string,
  Technician: string,
  Email: string,
  Phone: number,
  Info: string,
  Attachments: IAttachment[],
  Active: boolean,
}
