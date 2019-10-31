// eslint-disable-next-line import/prefer-default-export
export interface INavNode {
  id: string,
  title: string,
  url?: string,
  children?: INavNode[],
}
