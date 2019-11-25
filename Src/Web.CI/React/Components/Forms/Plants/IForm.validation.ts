// eslint-disable-next-line import/prefer-default-export
export interface IValidation {
  Registry: {
    Required: string,
    Min: string
  },
  Name: {
    Required: string,
    Min: string,
    Max: string
  },
  OfficialName: {
    Required: string,
    Min: string,
    Max: string
  },
  Technician: {
    Required: string,
    Min: string,
    Max: string
  },
  Email: {
    Required: string,
    Email: string
  },
  Phone: {
    Required: string,
    Min: string
  }
}
