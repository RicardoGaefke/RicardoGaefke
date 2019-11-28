import { IAttachment } from './IAttachment';

// eslint-disable-next-line no-used-vars
export interface ISubMachine {
    Id: number;
    Name: string;
    Info: string;
    Active: boolean;
    Attachments: IAttachment[],
}