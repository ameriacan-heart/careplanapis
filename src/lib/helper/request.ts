/* eslint-disable no-param-reassign */
import { Params } from "../types";

 /**
  * @desc Returns Query Params Response
  * 
  * @param  {Readonly<Params>} data
  * @returns Promise
  */
 export async function queryparams(data: Params): Promise<any> {
    return data
}
/**
 * @param  {string} tokenData
 * @returns Promise
 */
export async function setheaders(tokenData: string): Promise<object> {
    return { Authorization: 'Bearer ' + tokenData }
}