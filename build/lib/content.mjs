/* eslint-disable no-param-reassign */
import axios from "axios";
import Content from "./helper/content";
/**
 * @desc Send Base url , token and params to get list content.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function listContent(baseurl, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var url = baseurl + Content.LIST_CONTENTS;
    var apiResponse = await axios.get(url, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
/**
 * @desc Send Base url , token , contentCode and params to view content.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {string} contentCode
 * @param  {Params} params
 * @returns Promise
 */
export async function viewContent(baseurl, token, contentCode, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.get(baseurl + Content.LIST_CONTENTS + '/' + contentCode, {
        headers, params
    }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
/**
 * @desc Send Base url , token and params to get list categories.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function listCategories(baseurl, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.get(baseurl + Content.LIST_CATEGORIES, {
        headers,
        params
    }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
/**
 * @desc Send Base url , token and params to get list participants.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {Params} params
 * @returns Promise
 */
export async function listParticipants(baseurl, token, params) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.get(baseurl + Content.PARTICIPANTS, { headers, params }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
/**
 * @desc Send Base url , token and requestBody to add new participant.
 * @param  {string} baseurl
 * @param  {string} token
 * @param  {any} requestBody
 * @returns Promise
 */
export async function addNewParticipant(baseurl, token, requestBody) {
    const headers = { Authorization: 'Bearer ' + token };
    var apiResponse = await axios.post(baseurl + Content.PARTICIPANTS, requestBody, { headers }).then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FBc0M7QUFDdEMsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBR3ZDOzs7Ozs7R0FNRztBQUNILE1BQU0sQ0FBQyxLQUFLLFVBQVUsV0FBVyxDQUFDLE9BQWUsRUFBRSxLQUFhLEVBQUUsTUFBYztJQUM1RSxNQUFNLE9BQU8sR0FBRyxFQUFFLGFBQWEsRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFFLENBQUE7SUFDcEQsSUFBSSxHQUFHLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUE7SUFDekMsSUFBSSxXQUFXLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ3ZFLE9BQU8sUUFBUSxDQUFBO0lBQ25CLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFdBQVcsQ0FBQTtBQUN0QixDQUFDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILE1BQU0sQ0FBQyxLQUFLLFVBQVUsV0FBVyxDQUFDLE9BQWUsRUFBRSxLQUFhLEVBQUUsV0FBbUIsRUFBRSxNQUFjO0lBQ2pHLE1BQU0sT0FBTyxHQUFHLEVBQUUsYUFBYSxFQUFFLFNBQVMsR0FBRyxLQUFLLEVBQUUsQ0FBQTtJQUNwRCxJQUFJLFdBQVcsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxhQUFhLEdBQUcsR0FBRyxHQUFHLFdBQVcsRUFBRTtRQUNuRixPQUFPLEVBQUMsTUFBTTtLQUNqQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDakIsT0FBTyxRQUFRLENBQUE7SUFDbkIsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sV0FBVyxDQUFBO0FBQ3RCLENBQUM7QUFHRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsS0FBSyxVQUFVLGNBQWMsQ0FBQyxPQUFlLEVBQUUsS0FBYSxFQUFFLE1BQWM7SUFDL0UsTUFBTSxPQUFPLEdBQUcsRUFBRSxhQUFhLEVBQUUsU0FBUyxHQUFHLEtBQUssRUFBRSxDQUFBO0lBQ3BELElBQUksV0FBVyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRTtRQUNqRSxPQUFPO1FBQ1AsTUFBTTtLQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUNqQixPQUFPLFFBQVEsQ0FBQTtJQUNuQixDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxXQUFXLENBQUE7QUFDdEIsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILE1BQU0sQ0FBQyxLQUFLLFVBQVUsZ0JBQWdCLENBQUMsT0FBZSxFQUFFLEtBQWEsRUFBRSxNQUFjO0lBQ2pGLE1BQU0sT0FBTyxHQUFHLEVBQUUsYUFBYSxFQUFFLFNBQVMsR0FBRyxLQUFLLEVBQUUsQ0FBQTtJQUNwRCxJQUFJLFdBQVcsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUNsRyxPQUFPLFFBQVEsQ0FBQTtJQUNuQixDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxXQUFXLENBQUE7QUFDdEIsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILE1BQU0sQ0FBQyxLQUFLLFVBQVUsaUJBQWlCLENBQUMsT0FBZSxFQUFFLEtBQWEsRUFBRSxXQUFnQjtJQUNwRixNQUFNLE9BQU8sR0FBRyxFQUFFLGFBQWEsRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFFLENBQUE7SUFDcEQsSUFBSSxXQUFXLEdBQUcsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDekcsT0FBTyxRQUFRLENBQUE7SUFDbkIsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sV0FBVyxDQUFBO0FBQ3RCLENBQUMiLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vaGVscGVyL2NvbnRlbnRcIjtcclxuaW1wb3J0IHsgUGFyYW1zIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBTZW5kIEJhc2UgdXJsICwgdG9rZW4gYW5kIHBhcmFtcyB0byBnZXQgbGlzdCBjb250ZW50LlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtQYXJhbXN9IHBhcmFtc1xyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdENvbnRlbnQoYmFzZXVybDogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgdXJsID0gYmFzZXVybCArIENvbnRlbnQuTElTVF9DT05URU5UU1xyXG4gICAgdmFyIGFwaVJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KHVybCwge2hlYWRlcnMscGFyYW1zfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIFNlbmQgQmFzZSB1cmwgLCB0b2tlbiAsIGNvbnRlbnRDb2RlIGFuZCBwYXJhbXMgdG8gdmlldyBjb250ZW50LlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGNvbnRlbnRDb2RlXHJcbiAqIEBwYXJhbSAge1BhcmFtc30gcGFyYW1zXHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2aWV3Q29udGVudChiYXNldXJsOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcsIGNvbnRlbnRDb2RlOiBzdHJpbmcsIHBhcmFtczogUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChiYXNldXJsICsgQ29udGVudC5MSVNUX0NPTlRFTlRTICsgJy8nICsgY29udGVudENvZGUsIHtcclxuICAgICAgICBoZWFkZXJzLHBhcmFtc1xyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBTZW5kIEJhc2UgdXJsICwgdG9rZW4gYW5kIHBhcmFtcyB0byBnZXQgbGlzdCBjYXRlZ29yaWVzLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICogQHBhcmFtICB7c3RyaW5nfSB0b2tlblxyXG4gKiBAcGFyYW0gIHtQYXJhbXN9IHBhcmFtc1xyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbGlzdENhdGVnb3JpZXMoYmFzZXVybDogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBwYXJhbXM6IFBhcmFtcyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0geyBBdXRob3JpemF0aW9uOiAnQmVhcmVyICcgKyB0b2tlbiB9XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYmFzZXVybCArIENvbnRlbnQuTElTVF9DQVRFR09SSUVTLCB7XHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBwYXJhbXNcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyBTZW5kIEJhc2UgdXJsICwgdG9rZW4gYW5kIHBhcmFtcyB0byBnZXQgbGlzdCBwYXJ0aWNpcGFudHMuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gYmFzZXVybFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRva2VuXHJcbiAqIEBwYXJhbSAge1BhcmFtc30gcGFyYW1zXHJcbiAqIEByZXR1cm5zIFByb21pc2VcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsaXN0UGFydGljaXBhbnRzKGJhc2V1cmw6IHN0cmluZywgdG9rZW46IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgdG9rZW4gfVxyXG4gICAgdmFyIGFwaVJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGJhc2V1cmwgKyBDb250ZW50LlBBUlRJQ0lQQU5UUywge2hlYWRlcnMscGFyYW1zfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIFNlbmQgQmFzZSB1cmwgLCB0b2tlbiBhbmQgcmVxdWVzdEJvZHkgdG8gYWRkIG5ldyBwYXJ0aWNpcGFudC5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdG9rZW5cclxuICogQHBhcmFtICB7YW55fSByZXF1ZXN0Qm9keVxyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYWRkTmV3UGFydGljaXBhbnQoYmFzZXVybDogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCByZXF1ZXN0Qm9keTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSB7IEF1dGhvcml6YXRpb246ICdCZWFyZXIgJyArIHRva2VuIH1cclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYmFzZXVybCArIENvbnRlbnQuUEFSVElDSVBBTlRTLCByZXF1ZXN0Qm9keSwge2hlYWRlcnN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
