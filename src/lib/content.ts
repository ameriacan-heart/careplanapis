/* eslint-disable no-param-reassign */
import axios from "axios";
import Content from "./helper/content";
import { Params } from "./types";

/**
 * @desc Send Base url , token and params to get list content.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function listContent(baseurl: string, token: string, params: Params): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var url = baseurl + Content.LIST_CONTENTS
    var apiResponse = await axios.get(url, {headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc Send Base url , token , contentCode and params to view content.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {string} contentCode
 * @param  {Params} params
 * @returns Promise
 */
export async function viewContent(baseurl: string, token: string, contentCode: string, params: Params): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.get(baseurl + Content.LIST_CONTENTS + '/' + contentCode, {
        headers,params
    }).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}


/**
 * @desc Send Base url , token and params to get list categories.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function listCategories(baseurl: string, token: string, params: Params): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.get(baseurl + Content.LIST_CATEGORIES, {
        headers,
        params
    }).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc Send Base url , token and params to get list participants.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function listParticipants(baseurl: string, token: string, params: Params): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.get(baseurl + Content.PARTICIPANTS, {headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc Send Base url , token and requestBody to add new participant.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {any} requestBody
 * @returns Promise
 */
export async function addNewParticipant(baseurl: string, token: string, requestBody: any): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.post(baseurl + Content.PARTICIPANTS, requestBody, {headers}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}