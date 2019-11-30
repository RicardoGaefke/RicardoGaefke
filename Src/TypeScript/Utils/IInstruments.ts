import { IAttachment } from './IAttachment';

// eslint-disable-next-line no-unused-vars
export interface IInstruments {
    Id: number;
    Name: string;
    Serial: string;
    Validate: string;
    Info: string;
    Active: boolean;
    Attachments: IAttachment[];
}