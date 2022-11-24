import { tokenData } from "./types";
/**
 * @desc Send Base url and Client Credentials to generate new token
 * @param  {string} baseurl
 * @param  {Readonly<tokenData>} data
 * @returns Promise
 */
export declare function generateToken(baseurl: string, data: Readonly<tokenData>): Promise<any>;
/**
 * @desc  Send Base url and Refresh token to generate new token
 * @param  {string} baseurl
 * @param  {Readonly<tokenData>} data
 * @returns Promise
 */
export declare function refreshToken(baseurl: string, data: Readonly<tokenData>): Promise<any>;
