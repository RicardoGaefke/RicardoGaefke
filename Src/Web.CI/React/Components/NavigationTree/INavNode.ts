// eslint-disable-next-line import/prefer-default-export
export interface INavNode {
  id: string,
  title: string,
  children?: INavNode[],
}
