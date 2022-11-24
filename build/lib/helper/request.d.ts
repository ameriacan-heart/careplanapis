import { Params } from "../types";
/**
 * @desc Returns Query Params Response
 *
 * @param  {Readonly<Params>} data
 * @returns Promise
 */
export declare function queryparams(data: Params): Promise<any>;
/**
 * @param  {string} tokenData
 * @returns Promise
 */
export declare function setheaders(tokenData: string): Promise<object>;
