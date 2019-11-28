import { IAttachment } from './IAttachment';

// eslint-disable-next-line no-used-vars
export interface IMachine {
    Id: number;
    Manufacturer: string;
    Name: string;
    Model: string;
    Serial: string;
    Info: string;
    Position: number;
    Active: boolean;
    Attachments: IAttachment[],
}