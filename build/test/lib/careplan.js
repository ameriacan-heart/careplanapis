"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getparticipantEnrollmentsByCode = exports.patchEnrollmentPrioritiesByCode = exports.getEnrollmentPrioritiesByCode = exports.patchEnrolledGoalsByCode = exports.getEnrolledGoalsByCode = exports.patchEnrolledAssessment = exports.getEnrolledAssessmentsByCode = exports.patchEnrolledActivityDetails = exports.getActivityDetails = exports.listAllActivities = exports.patchActionPlansByCode = exports.listActionPlansByCode = exports.extedOrEndEnrolledParticipant = exports.enrollParticipant = exports.listCarePlan = void 0;
const axios_1 = __importDefault(require("axios"));
const careplan_1 = __importDefault(require("./helper/careplan"));
/**
 * @desc Send Base url , token and params to get list careplans..
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
async function listCarePlan(baseurl, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.get(baseurl + careplan_1.default.LIST_CAREPLAN, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.listCarePlan = listCarePlan;
/**
 * @desc Send Base url , token and requestBody to enroll a participant.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {any} requestBody
 * @returns Promise
 */
async function enrollParticipant(baseurl, token, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.post(baseurl + careplan_1.default.ENROLLMENTS, requestBody, { headers }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.enrollParticipant = enrollParticipant;
/**
 * @desc Send Base url , token and requestBody to end or extended an existing enrollment.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} token
 * @param  {any} requestBody
 * @returns Promise
 */
async function extedOrEndEnrolledParticipant(baseurl, enrollmentId, token, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.patch(baseurl + careplan_1.default.ENROLLMENTS + "/" + enrollmentId, requestBody, { headers }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.extedOrEndEnrolledParticipant = extedOrEndEnrolledParticipant;
/**
 * @desc Send Base url , enrollmentId , enrollmentCode , token and params to list action plans by code.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} enrollmentCode
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
async function listActionPlansByCode(baseurl, enrollmentId, enrollmentCode, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.get(baseurl + careplan_1.default.ENROLLMENTS + "/" + enrollmentId + "/actionPlans/" + enrollmentCode, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.listActionPlansByCode = listActionPlansByCode;
/**
 * @desc Send Base url , enrollmentId , enrollmentCode , token and params to patch/update action plans by code.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} enrollmentCode
 * @param  {string} token
 * @param  {any} requestBody
 * @returns Promise
 */
async function patchActionPlansByCode(baseurl, enrollmentId, enrollmentCode, token, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.patch(baseurl + careplan_1.default.ENROLLMENTS + "/" + enrollmentId + "/actionPlans/" + enrollmentCode, requestBody, { headers }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.patchActionPlansByCode = patchActionPlansByCode;
/**
 * @desc This function is used to fetch enrollee's pending activities for today (if from date and to date are not passed) or between date range, content are available as part of activities.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
async function listAllActivities(baseurl, enrollmentId, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.get(baseurl + careplan_1.default.ENROLLMENTS + "/" + enrollmentId + "/activities", { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.listAllActivities = listAllActivities;
/**
 * @desc This function is used to fetch complete details of an content using the valid "code". Content locale will either have asset or assessment information based on contentType.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} enrollmentCode
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
async function getActivityDetails(baseurl, enrollmentId, enrollmentCode, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.get(baseurl + careplan_1.default.ENROLLMENTS + "/" + enrollmentId + "/activities/" + enrollmentCode, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.getActivityDetails = getActivityDetails;
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
async function patchEnrolledActivityDetails(baseurl, enrollmentId, enrollmentCode, token, params, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.patch(baseurl + careplan_1.default.ENROLLMENTS + "/" + enrollmentId + "/activities/" + enrollmentCode, requestBody, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.patchEnrolledActivityDetails = patchEnrolledActivityDetails;
/**
 * @desc This function is used to get the Assessments for a given enrollment Id for a given Assessment Code.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} code
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
async function getEnrolledAssessmentsByCode(baseurl, enrollmentId, code, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.get(baseurl + careplan_1.default.ENROLLMENTS + "/" + enrollmentId + "/assessments/" + code, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.getEnrolledAssessmentsByCode = getEnrolledAssessmentsByCode;
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
async function patchEnrolledAssessment(baseurl, enrollmentId, code, token, params, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.patch(baseurl + careplan_1.default.ENROLLMENTS + "/" + enrollmentId + "/assessments/" + code, requestBody, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.patchEnrolledAssessment = patchEnrolledAssessment;
/**
 * @desc List Goals by code
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} code
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
async function getEnrolledGoalsByCode(baseurl, enrollmentId, code, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.get(baseurl + careplan_1.default.ENROLLMENTS + "/" + enrollmentId + "/goals/" + code, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.getEnrolledGoalsByCode = getEnrolledGoalsByCode;
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
async function patchEnrolledGoalsByCode(baseurl, enrollmentId, code, token, params, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.patch(baseurl + careplan_1.default.ENROLLMENTS + "/" + enrollmentId + "/goals/" + code, requestBody, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.patchEnrolledGoalsByCode = patchEnrolledGoalsByCode;
/**
 * @desc List the Priorities available.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} code
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
async function getEnrollmentPrioritiesByCode(baseurl, enrollmentId, code, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.get(baseurl + careplan_1.default.ENROLLMENTS + "/" + enrollmentId + "/priorities/" + code, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.getEnrollmentPrioritiesByCode = getEnrollmentPrioritiesByCode;
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
async function patchEnrollmentPrioritiesByCode(baseurl, enrollmentId, code, token, params, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.patch(baseurl + careplan_1.default.ENROLLMENTS + "/" + enrollmentId + "/priorities/" + code, requestBody, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.patchEnrollmentPrioritiesByCode = patchEnrollmentPrioritiesByCode;
/**
 * @desc This function is used to fetch all the exisiting participants for the particular participant.
 * @param  {string} baseurl
 * @param  {string} enrollmentId
 * @param  {string} code
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
async function getparticipantEnrollmentsByCode(baseurl, enrollmentId, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.get(baseurl + careplan_1.default.GET_PARTICIPANTS_ENROLLMENTS + "/" + enrollmentId + "/enrollments", { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.getparticipantEnrollmentsByCode = getparticipantEnrollmentsByCode;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY2FyZXBsYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLGlFQUF5QztBQUd6Qzs7Ozs7O0dBTUc7QUFDSSxLQUFLLFVBQVUsWUFBWSxDQUFDLE9BQWUsRUFBRSxLQUFhLEVBQUUsTUFBYztJQUM3RSxNQUFNLE9BQU8sR0FBRyxFQUFFLGFBQWEsRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFFLENBQUE7SUFDcEQsSUFBSSxXQUFXLEdBQUcsTUFBTSxlQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxrQkFBUSxDQUFDLGFBQWEsRUFBRSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ3BHLE9BQU8sUUFBUSxDQUFBO0lBQ25CLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFdBQVcsQ0FBQTtBQUN0QixDQUFDO0FBUkQsb0NBUUM7QUFFRDs7Ozs7O0dBTUc7QUFDSSxLQUFLLFVBQVUsaUJBQWlCLENBQUMsT0FBZSxFQUFFLEtBQWEsRUFBRSxXQUFnQjtJQUNwRixNQUFNLE9BQU8sR0FBRyxFQUFFLGFBQWEsRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFFLENBQUE7SUFDcEQsSUFBSSxXQUFXLEdBQUcsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBUSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ3pHLE9BQU8sUUFBUSxDQUFBO0lBQ25CLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFdBQVcs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QUssRUFBRSxDQUFBO0lBQ3BELElBQUksV0FBVyxHQUFHLE1BQU0sZUFBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsa0JBQVEsQ0FBQyxXQUFXLEdBQUcsR0FBRyxHQUFHLFlBQVksR0FBRyxjQUFjLEdBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQzdKLE9BQU8sUUFBUSxDQUFBO0lBQ25CLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFdBQVcsQ0FBQTtBQUN0QixDQUFDO0FBUkQsMEVBUUM7QUFFRDs7Ozs7Ozs7R0FRRztBQUNJLEtBQUssVUFBVSwrQkFBK0IsQ0FBQyxPQUFlLEVBQUUsWUFBbUIsRUFBRSxLQUFhLEVBQUUsTUFBYztJQUNySCxNQUFNLE9BQU8sR0FBRyxFQUFFLGFBQWEsRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFFLENBQUE7SUFDcEQsSUFBSSxXQUFXLEdBQUcsTUFBTSxlQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxrQkFBUSxDQUFDLDRCQUE0QixHQUFHLEdBQUcsR0FBRyxZQUFZLEdBQUcsY0FBYyxFQUFFLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDekosT0FBTyxRQUFRLENBQUE7SUFDbkIsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sV0FBVyxDQUFBO0FBQ3RCLENBQUM7QUFSRCwwRUFRQyIsImZpbGUiOiJsaWIvY2FyZXBsYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDYXJlUGxhbiBmcm9tIFwiLi9oZWxwZXIvY2FyZXBsYW5cIjtcclxuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBTZW5kIEJhc2UgdXJsICwgdG9rZW4gYW5kIHBhcmFtcyB0byBnZXQgbGlzdCBjYXJlcGxhbnMuLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtQYXJhbXN9IHBhcmFtc1xyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdENhcmVQbGFuKGJhc2V1cmw6IHN0cmluZywgdG9rZW46IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfVxyXG4gICAgdmFyIGFwaVJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGJhc2V1cmwgKyBDYXJlUGxhbi5MSVNUX0NBUkVQTEFOLCB7aGVhZGVycyxwYXJhbXN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2MgU2VuZCBCYXNlIHVybCAsIHRva2VuIGFuZCByZXF1ZXN0Qm9keSB0byBlbnJvbGwgYSBwYXJ0aWNpcGFudC5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW5cclxuICogQHBhcmFtICB7YW55fSByZXF1ZXN0Qm9keVxyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZW5yb2xsUGFydGljaXBhbnQoYmFzZXVybDogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCByZXF1ZXN0Qm9keTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYmFzZXVybCArIENhcmVQbGFuLkVOUk9MTE1FTlRTLCByZXF1ZXN0Qm9keSwge2hlYWRlcnN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2MgU2VuZCBCYXNlIHVybCAsIHRva2VuIGFuZCByZXF1ZXN0Qm9keSB0byBlbmQgb3IgZXh0ZW5kZWQgYW4gZXhpc3RpbmcgZW5yb2xsbWVudC5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudElkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW5cclxuICogQHBhcmFtICB7YW55fSByZXF1ZXN0Qm9keVxyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXh0ZWRPckVuZEVucm9sbGVkUGFydGljaXBhbnQoYmFzZXVybDogc3RyaW5nLCBlbnJvbGxtZW50SWQ6c3RyaW5nLCB0b2tlbjogc3RyaW5nLCByZXF1ZXN0Qm9keTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKGJhc2V1cmwgKyBDYXJlUGxhbi5FTlJPTExNRU5UUyArIFwiL1wiICsgZW5yb2xsbWVudElkLCByZXF1ZXN0Qm9keSwge2hlYWRlcnN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2MgU2VuZCBCYXNlIHVybCAsIGVucm9sbG1lbnRJZCAsIGVucm9sbG1lbnRDb2RlICwgdG9rZW4gYW5kIHBhcmFtcyB0byBsaXN0IGFjdGlvbiBwbGFucyBieSBjb2RlLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICogQHBhcmFtICB7c3RyaW5nfSBlbnJvbGxtZW50SWRcclxuICogQHBhcmFtICB7c3RyaW5nfSBlbnJvbGxtZW50Q29kZVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRva2VuXHJcbiAqIEBwYXJhbSAge1BhcmFtc30gcGFyYW1zXHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0QWN0aW9uUGxhbnNCeUNvZGUoYmFzZXVybDogc3RyaW5nLCBlbnJvbGxtZW50SWQ6c3RyaW5nLCBlbnJvbGxtZW50Q29kZTpzdHJpbmcsIHRva2VuOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChiYXNldXJsICsgQ2FyZVBsYW4uRU5ST0xMTUVOVFMgKyBcIi9cIiArIGVucm9sbG1lbnRJZCArIFwiL2FjdGlvblBsYW5zL1wiICsgZW5yb2xsbWVudENvZGUsIHtoZWFkZXJzLHBhcmFtc30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBTZW5kIEJhc2UgdXJsICwgZW5yb2xsbWVudElkICwgZW5yb2xsbWVudENvZGUgLCB0b2tlbiBhbmQgcGFyYW1zIHRvIHBhdGNoL3VwZGF0ZSBhY3Rpb24gcGxhbnMgYnkgY29kZS5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudElkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudENvZGVcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHthbnl9IHJlcXVlc3RCb2R5XHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXRjaEFjdGlvblBsYW5zQnlDb2RlKGJhc2V1cmw6IHN0cmluZywgZW5yb2xsbWVudElkOnN0cmluZywgZW5yb2xsbWVudENvZGU6c3RyaW5nLCB0b2tlbjogc3RyaW5nLCByZXF1ZXN0Qm9keTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKGJhc2V1cmwgKyBDYXJlUGxhbi5FTlJPTExNRU5UUyArIFwiL1wiICsgZW5yb2xsbWVudElkICsgXCIvYWN0aW9uUGxhbnMvXCIgKyBlbnJvbGxtZW50Q29kZSwgcmVxdWVzdEJvZHksIHtoZWFkZXJzfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBmZXRjaCBlbnJvbGxlZSdzIHBlbmRpbmcgYWN0aXZpdGllcyBmb3IgdG9kYXkgKGlmIGZyb20gZGF0ZSBhbmQgdG8gZGF0ZSBhcmUgbm90IHBhc3NlZCkgb3IgYmV0d2VlbiBkYXRlIHJhbmdlLCBjb250ZW50IGFyZSBhdmFpbGFibGUgYXMgcGFydCBvZiBhY3Rpdml0aWVzLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICogQHBhcmFtICB7c3RyaW5nfSBlbnJvbGxtZW50SWRcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtQYXJhbXN9IHBhcmFtc1xyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdEFsbEFjdGl2aXRpZXMoYmFzZXVybDogc3RyaW5nLCBlbnJvbGxtZW50SWQ6c3RyaW5nLCB0b2tlbjogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYmFzZXVybCArIENhcmVQbGFuLkVOUk9MTE1FTlRTICsgXCIvXCIgKyBlbnJvbGxtZW50SWQgKyBcIi9hY3Rpdml0aWVzXCIsIHtoZWFkZXJzLHBhcmFtc30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQGRlc2MgVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGZldGNoIGNvbXBsZXRlIGRldGFpbHMgb2YgYW4gY29udGVudCB1c2luZyB0aGUgdmFsaWQgXCJjb2RlXCIuIENvbnRlbnQgbG9jYWxlIHdpbGwgZWl0aGVyIGhhdmUgYXNzZXQgb3IgYXNzZXNzbWVudCBpbmZvcm1hdGlvbiBiYXNlZCBvbiBjb250ZW50VHlwZS5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudElkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudENvZGVcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtQYXJhbXN9IHBhcmFtc1xyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWN0aXZpdHlEZXRhaWxzKGJhc2V1cmw6IHN0cmluZywgZW5yb2xsbWVudElkOnN0cmluZywgZW5yb2xsbWVudENvZGU6c3RyaW5nLCB0b2tlbjogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYmFzZXVybCArIENhcmVQbGFuLkVOUk9MTE1FTlRTICsgXCIvXCIgKyBlbnJvbGxtZW50SWQgKyBcIi9hY3Rpdml0aWVzL1wiKyBlbnJvbGxtZW50Q29kZSwge2hlYWRlcnMscGFyYW1zfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZmV0Y2ggY2FwdHVyZSBwYXJ0aWNpcGFudCByZXNwb25zZSBhdCBhY3Rpdml0eSBsZXZlbC5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudElkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudENvZGVcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtQYXJhbXN9IHBhcmFtc1xyXG4gKiBAcGFyYW0gIHthbnl9IHJlcXVlc3RCb2R5XHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXRjaEVucm9sbGVkQWN0aXZpdHlEZXRhaWxzKGJhc2V1cmw6IHN0cmluZywgZW5yb2xsbWVudElkOnN0cmluZywgZW5yb2xsbWVudENvZGU6c3RyaW5nLCB0b2tlbjogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcywgcmVxdWVzdEJvZHk6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChiYXNldXJsICsgQ2FyZVBsYW4uRU5ST0xMTUVOVFMgKyBcIi9cIiArIGVucm9sbG1lbnRJZCArIFwiL2FjdGl2aXRpZXMvXCIrIGVucm9sbG1lbnRDb2RlLCByZXF1ZXN0Qm9keSx7aGVhZGVycyxwYXJhbXN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBnZXQgdGhlIEFzc2Vzc21lbnRzIGZvciBhIGdpdmVuIGVucm9sbG1lbnQgSWQgZm9yIGEgZ2l2ZW4gQXNzZXNzbWVudCBDb2RlLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICogQHBhcmFtICB7c3RyaW5nfSBlbnJvbGxtZW50SWRcclxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW5cclxuICogQHBhcmFtICB7UGFyYW1zfSBwYXJhbXNcclxuICogQHJldHVybnMgUHJvbWlzZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVucm9sbGVkQXNzZXNzbWVudHNCeUNvZGUoYmFzZXVybDogc3RyaW5nLCBlbnJvbGxtZW50SWQ6c3RyaW5nLCBjb2RlOnN0cmluZywgdG9rZW46IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfVxyXG4gICAgdmFyIGFwaVJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGJhc2V1cmwgKyBDYXJlUGxhbi5FTlJPTExNRU5UUyArIFwiL1wiICsgZW5yb2xsbWVudElkICsgXCIvYXNzZXNzbWVudHMvXCIrIGNvZGUsIHtoZWFkZXJzLHBhcmFtc30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcGF0Y2ggdGhlIEFzc2Vzc21lbnRzIGZvciBhIGdpdmVuIGVucm9sbG1lbnQgSWQgZm9yIGEgZ2l2ZW4gQXNzZXNzbWVudCBDb2RlLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICogQHBhcmFtICB7c3RyaW5nfSBlbnJvbGxtZW50SWRcclxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW5cclxuICogQHBhcmFtICB7UGFyYW1zfSBwYXJhbXNcclxuICogQHBhcmFtICB7YW55fSByZXF1ZXN0Qm9keVxyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGF0Y2hFbnJvbGxlZEFzc2Vzc21lbnQoYmFzZXVybDogc3RyaW5nLCBlbnJvbGxtZW50SWQ6c3RyaW5nLCBjb2RlOnN0cmluZywgdG9rZW46IHN0cmluZywgcGFyYW1zOiBQYXJhbXMsIHJlcXVlc3RCb2R5OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfVxyXG4gICAgdmFyIGFwaVJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goYmFzZXVybCArIENhcmVQbGFuLkVOUk9MTE1FTlRTICsgXCIvXCIgKyBlbnJvbGxtZW50SWQgKyBcIi9hc3Nlc3NtZW50cy9cIisgY29kZSwgcmVxdWVzdEJvZHksIHtoZWFkZXJzLHBhcmFtc30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBMaXN0IEdvYWxzIGJ5IGNvZGVcclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudElkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRva2VuXHJcbiAqIEBwYXJhbSAge1BhcmFtc30gcGFyYW1zXHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRFbnJvbGxlZEdvYWxzQnlDb2RlKGJhc2V1cmw6IHN0cmluZywgZW5yb2xsbWVudElkOnN0cmluZywgY29kZTpzdHJpbmcsIHRva2VuOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChiYXNldXJsICsgQ2FyZVBsYW4uRU5ST0xMTUVOVFMgKyBcIi9cIiArIGVucm9sbG1lbnRJZCArIFwiL2dvYWxzL1wiKyBjb2RlLCB7aGVhZGVycyxwYXJhbXN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcblxyXG4vKipcclxuICogQGRlc2MgVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGZldGNoIGNhcHR1cmUgcGFydGljaXBhbnQgcmVzcG9uc2UgYXQgZ29hbHMgYWN0aXZpdHkgbGV2ZWxcclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudElkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRva2VuXHJcbiAqIEBwYXJhbSAge1BhcmFtc30gcGFyYW1zXHJcbiAqIEBwYXJhbSAge2FueX0gcmVxdWVzdEJvZHlcclxuICogQHJldHVybnMgUHJvbWlzZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhdGNoRW5yb2xsZWRHb2Fsc0J5Q29kZShiYXNldXJsOiBzdHJpbmcsIGVucm9sbG1lbnRJZDpzdHJpbmcsIGNvZGU6c3RyaW5nLCB0b2tlbjogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcywgcmVxdWVzdEJvZHk6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wYXRjaChiYXNldXJsICsgQ2FyZVBsYW4uRU5ST0xMTUVOVFMgKyBcIi9cIiArIGVucm9sbG1lbnRJZCArIFwiL2dvYWxzL1wiKyBjb2RlLCByZXF1ZXN0Qm9keSwge2hlYWRlcnMscGFyYW1zfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIExpc3QgdGhlIFByaW9yaXRpZXMgYXZhaWxhYmxlLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICogQHBhcmFtICB7c3RyaW5nfSBlbnJvbGxtZW50SWRcclxuICogQHBhcmFtICB7c3RyaW5nfSBjb2RlXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW5cclxuICogQHBhcmFtICB7UGFyYW1zfSBwYXJhbXNcclxuICogQHJldHVybnMgUHJvbWlzZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEVucm9sbG1lbnRQcmlvcml0aWVzQnlDb2RlKGJhc2V1cmw6IHN0cmluZywgZW5yb2xsbWVudElkOnN0cmluZywgY29kZTpzdHJpbmcsIHRva2VuOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChiYXNldXJsICsgQ2FyZVBsYW4uRU5ST0xMTUVOVFMgKyBcIi9cIiArIGVucm9sbG1lbnRJZCArIFwiL3ByaW9yaXRpZXMvXCIrIGNvZGUsIHtoZWFkZXJzLHBhcmFtc30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZmV0Y2ggY2FwdHVyZSBwYXJ0aWNpcGFudCByZXNwb25zZSBhdCBwcmlvcml0aWVzIGFjdGl2aXR5IGxldmVsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYmFzZXVybFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVucm9sbG1lbnRJZFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvZGVcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtQYXJhbXN9IHBhcmFtc1xyXG4gKiBAcGFyYW0gIHthbnl9IHJlcXVlc3RCb2R5XHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXRjaEVucm9sbG1lbnRQcmlvcml0aWVzQnlDb2RlKGJhc2V1cmw6IHN0cmluZywgZW5yb2xsbWVudElkOnN0cmluZywgY29kZTpzdHJpbmcsIHRva2VuOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zLCByZXF1ZXN0Qm9keTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKGJhc2V1cmwgKyBDYXJlUGxhbi5FTlJPTExNRU5UUyArIFwiL1wiICsgZW5yb2xsbWVudElkICsgXCIvcHJpb3JpdGllcy9cIisgY29kZSwgcmVxdWVzdEJvZHksIHtoZWFkZXJzLHBhcmFtc30pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gZmV0Y2ggYWxsIHRoZSBleGlzaXRpbmcgcGFydGljaXBhbnRzIGZvciB0aGUgcGFydGljdWxhciBwYXJ0aWNpcGFudC5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gZW5yb2xsbWVudElkXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRva2VuXHJcbiAqIEBwYXJhbSAge1BhcmFtc30gcGFyYW1zXHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRwYXJ0aWNpcGFudEVucm9sbG1lbnRzQnlDb2RlKGJhc2V1cmw6IHN0cmluZywgZW5yb2xsbWVudElkOnN0cmluZywgdG9rZW46IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfVxyXG4gICAgdmFyIGFwaVJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGJhc2V1cmwgKyBDYXJlUGxhbi5HRVRfUEFSVElDSVBBTlRTX0VOUk9MTE1FTlRTICsgXCIvXCIgKyBlbnJvbGxtZW50SWQgKyBcIi9lbnJvbGxtZW50c1wiLCB7aGVhZGVycyxwYXJhbXN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
