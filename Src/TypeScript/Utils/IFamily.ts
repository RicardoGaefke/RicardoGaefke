import { IAttachment } from './IAttachment';

// eslint-disable-next-line no-unused-vars
export interface IFamily{
    Id: number;
    Name: string;
    Description: string;
    Active: boolean;
    Attachments: IAttachment[];
}