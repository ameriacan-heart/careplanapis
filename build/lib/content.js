"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewParticipant = exports.listParticipants = exports.listCategories = exports.viewContent = exports.listContent = void 0;
/* eslint-disable no-param-reassign */
const axios_1 = __importDefault(require("axios"));
const content_1 = __importDefault(require("./helper/content"));
/**
 * @desc Send Base url , token and params to get list content.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
async function listContent(baseurl, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var url = baseurl + content_1.default.LIST_CONTENTS;
    var apiResponse = await axios_1.default.get(url, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.listContent = listContent;
/**
 * @desc Send Base url , token , contentCode and params to view content.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {string} contentCode
 * @param  {Params} params
 * @returns Promise
 */
async function viewContent(baseurl, token, contentCode, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.get(baseurl + content_1.default.LIST_CONTENTS + '/' + contentCode, {
        headers, params
    }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.viewContent = viewContent;
/**
 * @desc Send Base url , token and params to get list categories.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
async function listCategories(baseurl, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.get(baseurl + content_1.default.LIST_CATEGORIES, {
        headers,
        params
    }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.listCategories = listCategories;
/**
 * @desc Send Base url , token and params to get list participants.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
async function listParticipants(baseurl, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.get(baseurl + content_1.default.PARTICIPANTS, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.listParticipants = listParticipants;
/**
 * @desc Send Base url , token and requestBody to add new participant.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {any} requestBody
 * @returns Promise
 */
async function addNewParticipant(baseurl, token, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios_1.default.post(baseurl + content_1.default.PARTICIPANTS, requestBody, { headers }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.addNewParticipant = addNewParticipant;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FBc0M7QUFDdEMsa0RBQTBCO0FBQzFCLCtEQUF1QztBQUd2Qzs7Ozs7O0dBTUc7QUFDSSxLQUFLLFVBQVUsV0FBVyxDQUFDLE9BQWUsRUFBRSxLQUFhLEVBQUUsTUFBYztJQUM1RSxNQUFNLE9BQU8sR0FBRyxFQUFFLGFBQWEsRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFFLENBQUE7SUFDcEQsSUFBSSxHQUFHLEdBQUcsT0FBTyxHQUFHLGlCQUFPLENBQUMsYUFBYSxDQUFBO0lBQ3pDLElBQUksV0FBVyxHQUFHLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUN2RSxPQUFPLFFBQVEsQ0FBQTtJQUNuQixDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxXQUFXLENBQUE7QUFDdEIsQ0FBQztBQVRELGtDQVNDO0FBR0Q7Ozs7Ozs7R0FPRztBQUNJLEtBQUssVUFBVSxXQUFXLENBQUMsT0FBZSxFQUFFLEtBQWEsRUFBRSxXQUFtQixFQUFFLE1BQWM7SUFDakcsTUFBTSxPQUFPLEdBQUcsRUFBRSxhQUFhLEVBQUUsU0FBUyxHQUFHLEtBQUssRUFBRSxDQUFBO0lBQ3BELElBQUksV0FBVyxHQUFHLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLFdBQVcsRUFBRTtRQUNuRixPQUFPLEVBQUMsTUFBTTtLQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDakIsT0FBTyxRQUFRLENBQUE7SUFDbkIsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sV0FBVyxDQUFBO0FBQ3RCLENBQUM7QUFWRCxrQ0FVQztBQUdEOzs7Ozs7R0FNRztBQUNJLEtBQUssVUFBVSxjQUFjLENBQUMsT0FBZSxFQUFFLEtBQWEsRUFBRSxNQUFjO0lBQy9FLE1BQU0sT0FBTyxHQUFHLEVBQUUsYUFBYSxFQUFFLFNBQVMsR0FBRyxLQUFLLEVBQUUsQ0FBQTtJQUNwRCxJQUFJLFdBQVcsR0FBRyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxFQUFFO1FBQ2pFLE9BQU87UUFDUCxNQUFNO0tBQ1QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ2pCLE9BQU8sUUFBUSxDQUFBO0lBQ25CLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFdBQVcsQ0FBQTtBQUN0QixDQUFDO0FBWEQsd0NBV0M7QUFFRDs7Ozs7O0dBTUc7QUFDSSxLQUFLLFVBQVUsZ0JBQWdCLENBQUMsT0FBZSxFQUFFLEtBQWEsRUFBRSxNQUFjO0lBQ2pGLE1BQU0sT0FBTyxHQUFHLEVBQUUsYUFBYSxFQUFFLFNBQVMsR0FBRyxLQUFLLEVBQUUsQ0FBQTtJQUNwRCxJQUFJLFdBQVcsR0FBRyxNQUFNLGVBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLGlCQUFPLENBQUMsWUFBWSxFQUFFLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDbEcsT0FBTyxRQUFRLENBQUE7SUFDbkIsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sV0FBVyxDQUFBO0FBQ3RCLENBQUM7QUFSRCw0Q0FRQztBQUVEOzs7Ozs7R0FNRztBQUNJLEtBQUssVUFBVSxpQkFBaUIsQ0FBQyxPQUFlLEVBQUUsS0FBYSxFQUFFLFdBQWdCO0lBQ3BGLE1BQU0sT0FBTyxHQUFHLEVBQUUsYUFBYSxFQUFFLFNBQVMsR0FBRyxLQUFLLEVBQUUsQ0FBQTtJQUNwRCxJQUFJLFdBQVcsR0FBRyxNQUFNLGVBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLGlCQUFPLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDekcsT0FBTyxRQUFRLENBQUE7SUFDbkIsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sV0FBVyxDQUFBO0FBQ3RCLENBQUM7QUFSRCw4Q0FRQyIsImZpbGUiOiJjb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi9oZWxwZXIvY29udGVudFwiO1xyXG5pbXBvcnQgeyBQYXJhbXMgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjIFNlbmQgQmFzZSB1cmwgLCB0b2tlbiBhbmQgcGFyYW1zIHRvIGdldCBsaXN0IGNvbnRlbnQuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYmFzZXVybFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRva2VuXHJcbiAqIEBwYXJhbSAge1BhcmFtc30gcGFyYW1zXHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0Q29udGVudChiYXNldXJsOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciB1cmwgPSBiYXNldXJsICsgQ29udGVudC5MSVNUX0NPTlRFTlRTXHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQodXJsLCB7aGVhZGVycyxwYXJhbXN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIFNlbmQgQmFzZSB1cmwgLCB0b2tlbiAsIGNvbnRlbnRDb2RlIGFuZCBwYXJhbXMgdG8gdmlldyBjb250ZW50LlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvbnRlbnRDb2RlXHJcbiAqIEBwYXJhbSAge1BhcmFtc30gcGFyYW1zXHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2aWV3Q29udGVudChiYXNldXJsOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcsIGNvbnRlbnRDb2RlOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChiYXNldXJsICsgQ29udGVudC5MSVNUX0NPTlRFTlRTICsgJy8nICsgY29udGVudENvZGUsIHtcclxuICAgICAgICBoZWFkZXJzLHBhcmFtc1xyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBTZW5kIEJhc2UgdXJsICwgdG9rZW4gYW5kIHBhcmFtcyB0byBnZXQgbGlzdCBjYXRlZ29yaWVzLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtQYXJhbXN9IHBhcmFtc1xyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdENhdGVnb3JpZXMoYmFzZXVybDogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYmFzZXVybCArIENvbnRlbnQuTElTVF9DQVRFR09SSUVTLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBwYXJhbXNcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBTZW5kIEJhc2UgdXJsICwgdG9rZW4gYW5kIHBhcmFtcyB0byBnZXQgbGlzdCBwYXJ0aWNpcGFudHMuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYmFzZXVybFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRva2VuXHJcbiAqIEBwYXJhbSAge1BhcmFtc30gcGFyYW1zXHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0UGFydGljaXBhbnRzKGJhc2V1cmw6IHN0cmluZywgdG9rZW46IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfVxyXG4gICAgdmFyIGFwaVJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGJhc2V1cmwgKyBDb250ZW50LlBBUlRJQ0lQQU5UUywge2hlYWRlcnMscGFyYW1zfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIFNlbmQgQmFzZSB1cmwgLCB0b2tlbiBhbmQgcmVxdWVzdEJvZHkgdG8gYWRkIG5ldyBwYXJ0aWNpcGFudC5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW5cclxuICogQHBhcmFtICB7YW55fSByZXF1ZXN0Qm9keVxyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTmV3UGFydGljaXBhbnQoYmFzZXVybDogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCByZXF1ZXN0Qm9keTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYmFzZXVybCArIENvbnRlbnQuUEFSVElDSVBBTlRTLCByZXF1ZXN0Qm9keSwge2hlYWRlcnN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
