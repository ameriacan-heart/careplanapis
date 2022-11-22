import axios from "axios";
import CarePlan from "./helper/careplan";
import { Params } from "./types";

/**
 * @desc Send Base url , token and params to get list careplans.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function listCarePlan(baseurl: string, token: string, params: Params): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.get(baseurl + CarePlan.LIST_CAREPLAN, {headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc Send Base url , token and requestBody to enroll a participant.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {any} requestBody
 * @returns Promise
 */
export async function enrollParticipant(baseurl: string, token: string, requestBody: any): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.post(baseurl + CarePlan.ENROLLMENTS, requestBody, {headers}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc Send Base url , token and requestBody to end or extended an existing enrollment.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} token
 * @param  {any} requestBody
 * @returns Promise
 */
export async function extedOrEndEnrolledParticipant(baseurl: string, enrollmentId:string, token: string, requestBody: any): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.patch(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId, requestBody, {headers}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc Send Base url , enrollmentId , enrollmentCode , token and params to list action plans by code.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} enrollmentCode
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function listActionPlansByCode(baseurl: string, enrollmentId:string, enrollmentCode:string, token: string, params: Params): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.get(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/actionPlans/" + enrollmentCode, {headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc Send Base url , enrollmentId , enrollmentCode , token and params to patch/update action plans by code.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} enrollmentCode
 * @param  {string} token
 * @param  {any} requestBody
 * @returns Promise
 */
export async function patchActionPlansByCode(baseurl: string, enrollmentId:string, enrollmentCode:string, token: string, requestBody: any): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.patch(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/actionPlans/" + enrollmentCode, requestBody, {headers}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc This function is used to fetch enrollee's pending activities for today (if from date and to date are not passed) or between date range, content are available as part of activities.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function listAllActivities(baseurl: string, enrollmentId:string, token: string, params: Params): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.get(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/activities", {headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}


/**
 * @desc This function is used to fetch complete details of an content using the valid "code". Content locale will either have asset or assessment information based on contentType.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} enrollmentCode
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function getActivityDetails(baseurl: string, enrollmentId:string, enrollmentCode:string, token: string, params: Params): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.get(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/activities/"+ enrollmentCode, {headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}


/**
 * @desc This function is used to fetch capture participant response at activity level.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} enrollmentCode
 * @param  {string} token
 * @param  {Params} params
 * @param  {any} requestBody
 * @returns Promise
 */
export async function patchEnrolledActivityDetails(baseurl: string, enrollmentId:string, enrollmentCode:string, token: string, params: Params, requestBody: any): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.patch(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/activities/"+ enrollmentCode, requestBody,{headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}


/**
 * @desc This function is used to get the Assessments for a given enrollment Id for a given Assessment Code.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} code
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function getEnrolledAssessmentsByCode(baseurl: string, enrollmentId:string, code:string, token: string, params: Params): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.get(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/assessments/"+ code, {headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc This function is used to patch the Assessments for a given enrollment Id for a given Assessment Code.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} code
 * @param  {string} token
 * @param  {Params} params
 * @param  {any} requestBody
 * @returns Promise
 */
export async function patchEnrolledAssessment(baseurl: string, enrollmentId:string, code:string, token: string, params: Params, requestBody: any): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.patch(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/assessments/"+ code, requestBody, {headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc List Goals by code
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} code
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function getEnrolledGoalsByCode(baseurl: string, enrollmentId:string, code:string, token: string, params: Params): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.get(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/goals/"+ code, {headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc This function is used to fetch capture participant response at goals activity level
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} code
 * @param  {string} token
 * @param  {Params} params
 * @param  {any} requestBody
 * @returns Promise
 */
export async function patchEnrolledGoalsByCode(baseurl: string, enrollmentId:string, code:string, token: string, params: Params, requestBody: any): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.patch(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/goals/"+ code, requestBody, {headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc List the Priorities available.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} code
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function getEnrollmentPrioritiesByCode(baseurl: string, enrollmentId:string, code:string, token: string, params: Params): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.get(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/priorities/"+ code, {headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc This function is used to fetch capture participant response at priorities activity level
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} code
 * @param  {string} token
 * @param  {Params} params
 * @param  {any} requestBody
 * @returns Promise
 */
export async function patchEnrollmentPrioritiesByCode(baseurl: string, enrollmentId:string, code:string, token: string, params: Params, requestBody: any): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.patch(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/priorities/"+ code, requestBody, {headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}

/**
 * @desc This function is used to fetch all the exisiting participants for the particular participant.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} code
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function getparticipantEnrollmentsByCode(baseurl: string, enrollmentId:string, token: string, params: Params): Promise<any> {
    const headers = { Authorization: 'Bearer ' + token }
    var apiResponse = await axios.get(baseurl + CarePlan.GET_PARTICIPANTS_ENROLLMENTS + "/" + enrollmentId + "/enrollments", {headers,params}).then((response) => {
        return response
    }, (error) => {
        return error
    });
    return apiResponse
}