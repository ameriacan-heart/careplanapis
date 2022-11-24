import { Params } from "./types";
/**
 * @desc Send Base url , token and params to get list content.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export declare function listContent(baseurl: string, token: string, params: Params): Promise<any>;
/**
 * @desc Send Base url , token , contentCode and params to view content.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {string} contentCode
 * @param  {Params} params
 * @returns Promise
 */
export declare function viewContent(baseurl: string, token: string, contentCode: string, params: Params): Promise<any>;
/**
 * @desc Send Base url , token and params to get list categories.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export declare function listCategories(baseurl: string, token: string, params: Params): Promise<any>;
/**
 * @desc Send Base url , token and params to get list participants.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export declare function listParticipants(baseurl: string, token: string, params: Params): Promise<any>;
/**
 * @desc Send Base url , token and requestBody to add new participant.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {any} requestBody
 * @returns Promise
 */
export declare function addNewParticipant(baseurl: string, token: string, requestBody: any): Promise<any>;
