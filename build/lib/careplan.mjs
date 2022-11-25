import axios from "axios";
import CarePlan from "./helper/careplan";
/**
 * @desc Send Base url , token and params to get list careplans..
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function listCarePlan(baseurl, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.get(baseurl + CarePlan.LIST_CAREPLAN, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
/**
 * @desc Send Base url , token and requestBody to enroll a participant.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {any} requestBody
 * @returns Promise
 */
export async function enrollParticipant(baseurl, token, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.post(baseurl + CarePlan.ENROLLMENTS, requestBody, { headers }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
/**
 * @desc Send Base url , token and requestBody to end or extended an existing enrollment.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} token
 * @param  {any} requestBody
 * @returns Promise
 */
export async function extedOrEndEnrolledParticipant(baseurl, enrollmentId, token, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.patch(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId, requestBody, { headers }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
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
export async function listActionPlansByCode(baseurl, enrollmentId, enrollmentCode, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.get(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/actionPlans/" + enrollmentCode, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
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
export async function patchActionPlansByCode(baseurl, enrollmentId, enrollmentCode, token, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.patch(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/actionPlans/" + enrollmentCode, requestBody, { headers }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
/**
 * @desc This function is used to fetch enrollee's pending activities for today (if from date and to date are not passed) or between date range, content are available as part of activities.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function listAllActivities(baseurl, enrollmentId, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.get(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/activities", { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
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
export async function getActivityDetails(baseurl, enrollmentId, enrollmentCode, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.get(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/activities/" + enrollmentCode, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
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
export async function patchEnrolledActivityDetails(baseurl, enrollmentId, enrollmentCode, token, params, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.patch(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/activities/" + enrollmentCode, requestBody, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
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
export async function getEnrolledAssessmentsByCode(baseurl, enrollmentId, code, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.get(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/assessments/" + code, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
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
export async function patchEnrolledAssessment(baseurl, enrollmentId, code, token, params, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.patch(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/assessments/" + code, requestBody, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
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
export async function getEnrolledGoalsByCode(baseurl, enrollmentId, code, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.get(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/goals/" + code, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
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
export async function patchEnrolledGoalsByCode(baseurl, enrollmentId, code, token, params, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.patch(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/goals/" + code, requestBody, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
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
export async function getEnrollmentPrioritiesByCode(baseurl, enrollmentId, code, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.get(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/priorities/" + code, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
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
export async function patchEnrollmentPrioritiesByCode(baseurl, enrollmentId, code, token, params, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.patch(baseurl + CarePlan.ENROLLMENTS + "/" + enrollmentId + "/priorities/" + code, requestBody, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
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
export async function getparticipantEnrollmentsByCode(baseurl, enrollmentId, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.get(baseurl + CarePlan.GET_PARTICIPANTS_ENROLLMENTS + "/" + enrollmentId + "/enrollments", { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY2FyZXBsYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sUUFBUSxNQUFNLG1CQUFtQixDQUFDO0FBR3pDOzs7Ozs7R0FNRztBQUNILE1BQU0sQ0FBQyxLQUFLLFVBQVUsWUFBWSxDQUFDLE9BQWUsRUFBRSxLQUFhLEVBQUUsTUFBYztJQUM3RSxNQUFNLE9BQU8sR0FBRyxFQUFFLGFBQWEsRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFFLENBQUE7SUFDcEQsSUFBSSxXQUFXLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFFLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDcEcsT0FBTyxRQUFRLENBQUE7SUFDbkIsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sV0FBVyxDQUFBO0FBQ3RCLENBQUM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsS0FBSyxVQUFVLGlCQUFpQixDQUFDLE9BQWUsRUFBRSxLQUFhLEVBQUUsV0FBZ0I7SUFDcEYsTUFBTSxPQUFPLEdBQUcsRUFBRSxhQUFhLEVBQUUsU0FBUyxHQUFHLEtBQUssRUFBRSxDQUFBO0lBQ3BELElBQUksV0FBVyxHQUFHLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ3pHLE9BQU8sUUFBUSxDQUFBO0lBQ25CLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxLQUFLLENB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QUFFLFNBQVMsR0FBRyxLQUFLLEVBQUUsQ0FBQTtJQUNwRCxJQUFJLFdBQVcsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLFlBQVksR0FBRyxjQUFjLEdBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQzdKLE9BQU8sUUFBUSxDQUFBO0lBQ25CLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFdBQVcsQ0FBQTtBQUN0QixDQUFDO0FBRUQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsS0FBSyxVQUFVLCtCQUErQixDQUFDLE9BQWUsRUFBRSxZQUFtQixFQUFFLEtBQWEsRUFBRSxNQUFjO0lBQ3JILE1BQU0sT0FBTyxHQUFHLEVBQUUsYUFBYSxFQUFFLFNBQVMsR0FBRyxLQUFLLEVBQUUsQ0FBQTtJQUNwRCxJQUFJLFdBQVcsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyw0QkFBNEIsR0FBRyxHQUFHLEdBQUcsWUFBWSxHQUFHLGNBQWMsRUFBRSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ3pKLE9BQU8sUUFBUSxDQUFBO0lBQ25CLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFdBQVcsQ0FBQTtBQUN0QixDQUFDIiwiZmlsZSI6ImNhcmVwbGFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ2FyZVBsYW4gZnJvbSBcIi4vaGVscGVyL2NhcmVwbGFuXCI7XHJcbmltcG9ydCB7IFBhcmFtcyB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG4vKipcclxuICogQGRlc2MgU2VuZCBCYXNlIHVybCAsIHRva2VuIGFuZCBwYXJhbXMgdG8gZ2V0IGxpc3QgY2FyZXBsYW5zLi5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW5cclxuICogQHBhcmFtICB7UGFyYW1zfSBwYXJhbXNcclxuICogQHJldHVybnMgUHJvbWlzZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RDYXJlUGxhbihiYXNldXJsOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChiYXNldXJsICsgQ2FyZVBsYW4uTElTVF9DQVJFUExBTiwge2hlYWRlcnMscGFyYW1zfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIFNlbmQgQmFzZSB1cmwgLCB0b2tlbiBhbmQgcmVxdWVzdEJvZHkgdG8gZW5yb2xsIGEgcGFydGljaXBhbnQuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYmFzZXVybFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRva2VuXHJcbiAqIEBwYXJhbSAge2FueX0gcmVxdWVzdEJvZHlcclxuICogQHJldHVybnMgUHJvbWlzZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVucm9sbFBhcnRpY2lwYW50KGJhc2V1cmw6IHN0cmluZywgdG9rZW46IHN0cmluZywgcmVxdWVzdEJvZHk6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGJhc2V1cmwgKyBDYXJlUGxhbi5FTlJPTExNRU5UUywgcmVxdWVzdEJvZHksIHtoZWFkZXJzfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIFNlbmQgQmFzZSB1cmwgLCB0b2tlbiBhbmQgcmVxdWVzdEJvZHkgdG8gZW5kIG9yIGV4dGVuZGVkIGFuIGV4aXN0aW5nIGVucm9sbG1lbnQuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYmFzZXVybFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVucm9sbG1lbnRJZFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRva2VuXHJcbiAqIEBwYXJhbSAge2FueX0gcmVxdWVzdEJvZHlcclxuICogQHJldHVybnMgUHJvbWlzZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGV4dGVkT3JFbmRFbnJvbGxlZFBhcnRpY2lwYW50KGJhc2V1cmw6IHN0cmluZywgZW5yb2xsbWVudElkOnN0cmluZywgdG9rZW46IHN0cmluZywgcmVxdWVzdEJvZHk6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChiYXNldXJsICsgQ2FyZVBsYW4uRU5ST0xMTUVOVFMgKyBcIi9cIiArIGVucm9sbG1lbnRJZCwgcmVxdWVzdEJvZHksIHtoZWFkZXJzfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIFNlbmQgQmFzZSB1cmwgLCBlbnJvbGxtZW50SWQgLCBlbnJvbGxtZW50Q29kZSAsIHRva2VuIGFuZCBwYXJhbXMgdG8gbGlzdCBhY3Rpb24gcGxhbnMgYnkgY29kZS5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudElkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudENvZGVcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtQYXJhbXN9IHBhcmFtc1xyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdEFjdGlvblBsYW5zQnlDb2RlKGJhc2V1cmw6IHN0cmluZywgZW5yb2xsbWVudElkOnN0cmluZywgZW5yb2xsbWVudENvZGU6c3RyaW5nLCB0b2tlbjogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYmFzZXVybCArIENhcmVQbGFuLkVOUk9MTE1FTlRTICsgXCIvXCIgKyBlbnJvbGxtZW50SWQgKyBcIi9hY3Rpb25QbGFucy9cIiArIGVucm9sbG1lbnRDb2RlLCB7aGVhZGVycyxwYXJhbXN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2MgU2VuZCBCYXNlIHVybCAsIGVucm9sbG1lbnRJZCAsIGVucm9sbG1lbnRDb2RlICwgdG9rZW4gYW5kIHBhcmFtcyB0byBwYXRjaC91cGRhdGUgYWN0aW9uIHBsYW5zIGJ5IGNvZGUuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYmFzZXVybFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVucm9sbG1lbnRJZFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVucm9sbG1lbnRDb2RlXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW5cclxuICogQHBhcmFtICB7YW55fSByZXF1ZXN0Qm9keVxyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF0Y2hBY3Rpb25QbGFuc0J5Q29kZShiYXNldXJsOiBzdHJpbmcsIGVucm9sbG1lbnRJZDpzdHJpbmcsIGVucm9sbG1lbnRDb2RlOnN0cmluZywgdG9rZW46IHN0cmluZywgcmVxdWVzdEJvZHk6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChiYXNldXJsICsgQ2FyZVBsYW4uRU5ST0xMTUVOVFMgKyBcIi9cIiArIGVucm9sbG1lbnRJZCArIFwiL2FjdGlvblBsYW5zL1wiICsgZW5yb2xsbWVudENvZGUsIHJlcXVlc3RCb2R5LCB7aGVhZGVyc30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZmV0Y2ggZW5yb2xsZWUncyBwZW5kaW5nIGFjdGl2aXRpZXMgZm9yIHRvZGF5IChpZiBmcm9tIGRhdGUgYW5kIHRvIGRhdGUgYXJlIG5vdCBwYXNzZWQpIG9yIGJldHdlZW4gZGF0ZSByYW5nZSwgY29udGVudCBhcmUgYXZhaWxhYmxlIGFzIHBhcnQgb2YgYWN0aXZpdGllcy5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudElkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW5cclxuICogQHBhcmFtICB7UGFyYW1zfSBwYXJhbXNcclxuICogQHJldHVybnMgUHJvbWlzZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RBbGxBY3Rpdml0aWVzKGJhc2V1cmw6IHN0cmluZywgZW5yb2xsbWVudElkOnN0cmluZywgdG9rZW46IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfVxyXG4gICAgdmFyIGFwaVJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGJhc2V1cmwgKyBDYXJlUGxhbi5FTlJPTExNRU5UUyArIFwiL1wiICsgZW5yb2xsbWVudElkICsgXCIvYWN0aXZpdGllc1wiLCB7aGVhZGVycyxwYXJhbXN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBmZXRjaCBjb21wbGV0ZSBkZXRhaWxzIG9mIGFuIGNvbnRlbnQgdXNpbmcgdGhlIHZhbGlkIFwiY29kZVwiLiBDb250ZW50IGxvY2FsZSB3aWxsIGVpdGhlciBoYXZlIGFzc2V0IG9yIGFzc2Vzc21lbnQgaW5mb3JtYXRpb24gYmFzZWQgb24gY29udGVudFR5cGUuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYmFzZXVybFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVucm9sbG1lbnRJZFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVucm9sbG1lbnRDb2RlXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW5cclxuICogQHBhcmFtICB7UGFyYW1zfSBwYXJhbXNcclxuICogQHJldHVybnMgUHJvbWlzZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFjdGl2aXR5RGV0YWlscyhiYXNldXJsOiBzdHJpbmcsIGVucm9sbG1lbnRJZDpzdHJpbmcsIGVucm9sbG1lbnRDb2RlOnN0cmluZywgdG9rZW46IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfVxyXG4gICAgdmFyIGFwaVJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGJhc2V1cmwgKyBDYXJlUGxhbi5FTlJPTExNRU5UUyArIFwiL1wiICsgZW5yb2xsbWVudElkICsgXCIvYWN0aXZpdGllcy9cIisgZW5yb2xsbWVudENvZGUsIHtoZWFkZXJzLHBhcmFtc30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQGRlc2MgVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGZldGNoIGNhcHR1cmUgcGFydGljaXBhbnQgcmVzcG9uc2UgYXQgYWN0aXZpdHkgbGV2ZWwuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYmFzZXVybFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVucm9sbG1lbnRJZFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVucm9sbG1lbnRDb2RlXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW5cclxuICogQHBhcmFtICB7UGFyYW1zfSBwYXJhbXNcclxuICogQHBhcmFtICB7YW55fSByZXF1ZXN0Qm9keVxyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF0Y2hFbnJvbGxlZEFjdGl2aXR5RGV0YWlscyhiYXNldXJsOiBzdHJpbmcsIGVucm9sbG1lbnRJZDpzdHJpbmcsIGVucm9sbG1lbnRDb2RlOnN0cmluZywgdG9rZW46IHN0cmluZywgcGFyYW1zOiBQYXJhbXMsIHJlcXVlc3RCb2R5OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfVxyXG4gICAgdmFyIGFwaVJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goYmFzZXVybCArIENhcmVQbGFuLkVOUk9MTE1FTlRTICsgXCIvXCIgKyBlbnJvbGxtZW50SWQgKyBcIi9hY3Rpdml0aWVzL1wiKyBlbnJvbGxtZW50Q29kZSwgcmVxdWVzdEJvZHkse2hlYWRlcnMscGFyYW1zfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZ2V0IHRoZSBBc3Nlc3NtZW50cyBmb3IgYSBnaXZlbiBlbnJvbGxtZW50IElkIGZvciBhIGdpdmVuIEFzc2Vzc21lbnQgQ29kZS5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudElkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRva2VuXHJcbiAqIEBwYXJhbSAge1BhcmFtc30gcGFyYW1zXHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbnJvbGxlZEFzc2Vzc21lbnRzQnlDb2RlKGJhc2V1cmw6IHN0cmluZywgZW5yb2xsbWVudElkOnN0cmluZywgY29kZTpzdHJpbmcsIHRva2VuOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChiYXNldXJsICsgQ2FyZVBsYW4uRU5ST0xMTUVOVFMgKyBcIi9cIiArIGVucm9sbG1lbnRJZCArIFwiL2Fzc2Vzc21lbnRzL1wiKyBjb2RlLCB7aGVhZGVycyxwYXJhbXN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2MgVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHBhdGNoIHRoZSBBc3Nlc3NtZW50cyBmb3IgYSBnaXZlbiBlbnJvbGxtZW50IElkIGZvciBhIGdpdmVuIEFzc2Vzc21lbnQgQ29kZS5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudElkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRva2VuXHJcbiAqIEBwYXJhbSAge1BhcmFtc30gcGFyYW1zXHJcbiAqIEBwYXJhbSAge2FueX0gcmVxdWVzdEJvZHlcclxuICogQHJldHVybnMgUHJvbWlzZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhdGNoRW5yb2xsZWRBc3Nlc3NtZW50KGJhc2V1cmw6IHN0cmluZywgZW5yb2xsbWVudElkOnN0cmluZywgY29kZTpzdHJpbmcsIHRva2VuOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zLCByZXF1ZXN0Qm9keTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKGJhc2V1cmwgKyBDYXJlUGxhbi5FTlJPTExNRU5UUyArIFwiL1wiICsgZW5yb2xsbWVudElkICsgXCIvYXNzZXNzbWVudHMvXCIrIGNvZGUsIHJlcXVlc3RCb2R5LCB7aGVhZGVycyxwYXJhbXN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2MgTGlzdCBHb2FscyBieSBjb2RlXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYmFzZXVybFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVucm9sbG1lbnRJZFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGVcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtQYXJhbXN9IHBhcmFtc1xyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW5yb2xsZWRHb2Fsc0J5Q29kZShiYXNldXJsOiBzdHJpbmcsIGVucm9sbG1lbnRJZDpzdHJpbmcsIGNvZGU6c3RyaW5nLCB0b2tlbjogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYmFzZXVybCArIENhcmVQbGFuLkVOUk9MTE1FTlRTICsgXCIvXCIgKyBlbnJvbGxtZW50SWQgKyBcIi9nb2Fscy9cIisgY29kZSwge2hlYWRlcnMscGFyYW1zfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBmZXRjaCBjYXB0dXJlIHBhcnRpY2lwYW50IHJlc3BvbnNlIGF0IGdvYWxzIGFjdGl2aXR5IGxldmVsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYmFzZXVybFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVucm9sbG1lbnRJZFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGVcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtQYXJhbXN9IHBhcmFtc1xyXG4gKiBAcGFyYW0gIHthbnl9IHJlcXVlc3RCb2R5XHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXRjaEVucm9sbGVkR29hbHNCeUNvZGUoYmFzZXVybDogc3RyaW5nLCBlbnJvbGxtZW50SWQ6c3RyaW5nLCBjb2RlOnN0cmluZywgdG9rZW46IHN0cmluZywgcGFyYW1zOiBQYXJhbXMsIHJlcXVlc3RCb2R5OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfVxyXG4gICAgdmFyIGFwaVJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goYmFzZXVybCArIENhcmVQbGFuLkVOUk9MTE1FTlRTICsgXCIvXCIgKyBlbnJvbGxtZW50SWQgKyBcIi9nb2Fscy9cIisgY29kZSwgcmVxdWVzdEJvZHksIHtoZWFkZXJzLHBhcmFtc30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBMaXN0IHRoZSBQcmlvcml0aWVzIGF2YWlsYWJsZS5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudElkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRva2VuXHJcbiAqIEBwYXJhbSAge1BhcmFtc30gcGFyYW1zXHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbnJvbGxtZW50UHJpb3JpdGllc0J5Q29kZShiYXNldXJsOiBzdHJpbmcsIGVucm9sbG1lbnRJZDpzdHJpbmcsIGNvZGU6c3RyaW5nLCB0b2tlbjogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYmFzZXVybCArIENhcmVQbGFuLkVOUk9MTE1FTlRTICsgXCIvXCIgKyBlbnJvbGxtZW50SWQgKyBcIi9wcmlvcml0aWVzL1wiKyBjb2RlLCB7aGVhZGVycyxwYXJhbXN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2MgVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGZldGNoIGNhcHR1cmUgcGFydGljaXBhbnQgcmVzcG9uc2UgYXQgcHJpb3JpdGllcyBhY3Rpdml0eSBsZXZlbFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICogQHBhcmFtICB7c3RyaW5nfSBlbnJvbGxtZW50SWRcclxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW5cclxuICogQHBhcmFtICB7UGFyYW1zfSBwYXJhbXNcclxuICogQHBhcmFtICB7YW55fSByZXF1ZXN0Qm9keVxyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF0Y2hFbnJvbGxtZW50UHJpb3JpdGllc0J5Q29kZShiYXNldXJsOiBzdHJpbmcsIGVucm9sbG1lbnRJZDpzdHJpbmcsIGNvZGU6c3RyaW5nLCB0b2tlbjogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcywgcmVxdWVzdEJvZHk6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChiYXNldXJsICsgQ2FyZVBsYW4uRU5ST0xMTUVOVFMgKyBcIi9cIiArIGVucm9sbG1lbnRJZCArIFwiL3ByaW9yaXRpZXMvXCIrIGNvZGUsIHJlcXVlc3RCb2R5LCB7aGVhZGVycyxwYXJhbXN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2MgVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGZldGNoIGFsbCB0aGUgZXhpc2l0aW5nIHBhcnRpY2lwYW50cyBmb3IgdGhlIHBhcnRpY3VsYXIgcGFydGljaXBhbnQuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYmFzZXVybFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVucm9sbG1lbnRJZFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGVcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtQYXJhbXN9IHBhcmFtc1xyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0cGFydGljaXBhbnRFbnJvbGxtZW50c0J5Q29kZShiYXNldXJsOiBzdHJpbmcsIGVucm9sbG1lbnRJZDpzdHJpbmcsIHRva2VuOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChiYXNldXJsICsgQ2FyZVBsYW4uR0VUX1BBUlRJQ0lQQU5UU19FTlJPTExNRU5UUyArIFwiL1wiICsgZW5yb2xsbWVudElkICsgXCIvZW5yb2xsbWVudHNcIiwge2hlYWRlcnMscGFyYW1zfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufSJdLCJzb3VyY2VSb290IjoiIn0=
