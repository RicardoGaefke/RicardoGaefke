/* eslint-disable semi */

export default interface INavNode {
  id: string,
  title: string,
  children?: INavNode[],
}
