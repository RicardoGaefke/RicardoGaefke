export interface ISelectOption {
  value: string | number,
  text: string,
}

export interface ISelect {
  label: string,
  options: ISelectOption[],
}

export interface IHoseForm {
  type: ISelect,
  technician: string,
  assistant: string,
  code: string,
  date: string,
  installation: string,
  tag: string,
  detached: string,
  brand: string,
  rule: string,
  compatibleRules: string,
  fluid: string,
  gauge: string,
}
