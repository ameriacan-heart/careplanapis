"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.generateToken = void 0;
const user_1 = __importDefault(require("./helper/user"));
const axios_1 = __importDefault(require("axios"));
/**
 * @desc Send Base url and Client Credentials to generate new token
 * @param  {string} baseurl
 * @param  {Readonly<tokenData>} data
 * @returns Promise
 */
async function generateToken(baseurl, data) {
    var apiResponse = await axios_1.default.post(baseurl + user_1.default.TOKEN, data)
        .then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.generateToken = generateToken;
/**
 * @desc  Send Base url and Refresh token to generate new token
 * @param  {string} baseurl
 * @param  {Readonly<tokenData>} data
 * @returns Promise
 */
async function refreshToken(baseurl, data) {
    var apiResponse = await axios_1.default.post(baseurl + user_1.default.TOKEN, data)
        .then((response) => {
        return response;
    }, (error) => {
        return error;
    });
    return apiResponse;
}
exports.refreshToken = refreshToken;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSx5REFBZ0M7QUFDaEMsa0RBQTBCO0FBRTFCOzs7OztHQUtHO0FBQ0ksS0FBSyxVQUFVLGFBQWEsQ0FBQyxPQUFlLEVBQUMsSUFBeUI7SUFDekUsSUFBSSxXQUFXLEdBQUcsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxjQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztTQUMzRCxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUNmLE9BQU8sUUFBUSxDQUFBO0lBQ25CLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFdBQVcsQ0FBQTtBQUN0QixDQUFDO0FBUkQsc0NBUUM7QUFFQTs7Ozs7R0FLRztBQUNJLEtBQUssVUFBVSxZQUFZLENBQUMsT0FBZSxFQUFDLElBQXlCO0lBQ3pFLElBQUksV0FBVyxHQUFHLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsY0FBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7U0FDM0QsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDZixPQUFPLFFBQVEsQ0FBQTtJQUNuQixDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxXQUFXLENBQUE7QUFDdEIsQ0FBQztBQVJBLG9DQVFBIiwiZmlsZSI6ImxpYi91c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuaW1wb3J0IHsgdG9rZW5EYXRhIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi9oZWxwZXIvdXNlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjIFNlbmQgQmFzZSB1cmwgYW5kIENsaWVudCBDcmVkZW50aWFscyB0byBnZW5lcmF0ZSBuZXcgdG9rZW5cclxuICogQHBhcmFtICB7c3RyaW5nfSBiYXNldXJsXHJcbiAqIEBwYXJhbSAge1JlYWRvbmx5PHRva2VuRGF0YT59IGRhdGFcclxuICogQHJldHVybnMgUHJvbWlzZVxyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlVG9rZW4oYmFzZXVybDogc3RyaW5nLGRhdGE6IFJlYWRvbmx5PHRva2VuRGF0YT4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgdmFyIGFwaVJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChiYXNldXJsK1VzZXIuVE9LRU4sIGRhdGEpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBlcnJvclxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYXBpUmVzcG9uc2VcclxufVxyXG5cclxuIC8qKlxyXG4gICogQGRlc2MgIFNlbmQgQmFzZSB1cmwgYW5kIFJlZnJlc2ggdG9rZW4gdG8gZ2VuZXJhdGUgbmV3IHRva2VuXHJcbiAgKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICAqIEBwYXJhbSAge1JlYWRvbmx5PHRva2VuRGF0YT59IGRhdGFcclxuICAqIEByZXR1cm5zIFByb21pc2VcclxuICAqL1xyXG4gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hUb2tlbihiYXNldXJsOiBzdHJpbmcsZGF0YTogUmVhZG9ubHk8dG9rZW5EYXRhPik6IFByb21pc2U8YW55PiB7XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGJhc2V1cmwrVXNlci5UT0tFTiwgZGF0YSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
