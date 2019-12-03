import { IAttachment } from './IAttachment';

// eslint-disable-next-line no-unused-vars
export interface IUpload {
    Id: number;
    Name: string;
    Validate: string;
    Info: string;
    Attachments: IAttachment[];
    Active: boolean;
}