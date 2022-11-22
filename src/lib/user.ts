/* eslint-disable no-param-reassign */
import { tokenData } from "./types";
import User from './helper/user'
import axios from "axios";

/**
 * @desc Send Base url and Client Credentials to generate new token
 * @param  {string} baseurl
 * @param  {Readonly<tokenData>} data
 * @returns Promise
 */
export async function generateToken(baseurl: string,data: Readonly<tokenData>): Promise<any> {
    var apiResponse = await axios.post(baseurl+User.TOKEN, data)
    .then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

 /**
  * @desc  Send Base url and Refresh token to generate new token
  * @param  {string} baseurl
  * @param  {Readonly<tokenData>} data
  * @returns Promise
  */
 export async function refreshToken(baseurl: string,data: Readonly<tokenData>): Promise<any> {
    var apiResponse = await axios.post(baseurl+User.TOKEN, data)
    .then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}
