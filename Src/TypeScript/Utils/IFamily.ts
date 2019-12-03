import { IAttachment } from './IAttachment';

// eslint-disable-next-line no-unused-vars
export interface IUpload {
    Id: number;
    Name: string;
    Description: string;
    Active: boolean;
    Attachments: IAttachment[];
}