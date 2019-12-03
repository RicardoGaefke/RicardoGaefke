export interface ISelectOption {
  value: string | number,
  text: string,
}

export interface ISelect {
  label: string,
  options: ISelectOption[],
}

export interface ICriticity {
  label: string,
  title: string,
}

export interface IHoseForm {
  type: ISelect,
  date: string,
  technical: string,
  technician: string,
  assistant: string,
  description: string,
  code: string,
  installation: string,
  tag: string,
  detached: string,
  brand: string,
  rule: string,
  compatibleRules: string,
  fluid: string,
  diameter: string,
  workPressureLegend: string,
  workPressure: string,
  workPressureExceeds: {
    title: string,
    yes: string,
    no: string,
  },
  workPressureExceedsMandatory: {
    title: string,
    yes: string,
    no: string,
  },
  workPressureOverRule: string,
  size: string,
  length: string,
  terminal1gender: string,
  terminal1: string,
  terminal1Angle: string,
  terminal1Material: string,
  terminal1Abrasion: string,
  adapter1: string,
  adapter1Abrasion: string,
  terminal2gender: string,
  terminal2: string,
  terminal2Angle: string,
  terminal2Material: string,
  terminal2Abrasion: string,
  adapter2: string,
  adapter2Abrasion: string,
  additional: string,
  angle: string,
  radius: string,
  recommended: string,
  criticality: string,
  security: {
    title: string,
    high: ICriticity,
    low: ICriticity
  },
  environment: {
    title: string,
    high: ICriticity,
    low: ICriticity
  },
  operability: {
    title: string,
    high: ICriticity,
    low: ICriticity
  },
  accessibility: {
    title: string,
    high: ICriticity,
    low: ICriticity
  },
  abrasion: {
    title: string,
    high: ICriticity,
    low: ICriticity
  },
  location: string,
  from: string,
  to: string,
  result: string,
  approved: string,
  reason: string,
  disapproved: string,
  dropzoneText: string,
  noAttachments: string,
  finalRecommendations: string,
  notice: string,
  idleness: {
    stop: string,
    start: string,
    end: string,
  },
  save: string[],
}
