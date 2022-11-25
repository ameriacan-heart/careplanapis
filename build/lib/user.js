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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSx5REFBZ0M7QUFDaEMsa0RBQTBCO0FBRTFCOzs7OztHQUtHO0FBQ0ksS0FBSyxVQUFVLGFBQWEsQ0FBQyxPQUFlLEVBQUMsSUFBeUI7SUFDekUsSUFBSSxXQUFXLEdBQUcsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxjQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztTQUMzRCxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUNmLE9BQU8sUUFBUSxDQUFBO0lBQ25CLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLFdBQVcsQ0FBQTtBQUN0QixDQUFDO0FBUkQsc0NBUUM7QUFFQTs7Ozs7R0FLRztBQUNJLEtBQUssVUFBVSxZQUFZLENBQUMsT0FBZSxFQUFDLElBQXlCO0lBQ3pFLElBQUksV0FBVyxHQUFHLE1BQU0sZUFBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsY0FBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7U0FDM0QsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDZixPQUFPLFFBQVEsQ0FBQTtJQUNuQixDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxXQUFXLENBQUE7QUFDdEIsQ0FBQztBQVJBLG9DQVFBIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG5pbXBvcnQgeyB0b2tlbkRhdGEgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuL2hlbHBlci91c2VyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vKipcclxuICogQGRlc2MgU2VuZCBCYXNlIHVybCBhbmQgQ2xpZW50IENyZWRlbnRpYWxzIHRvIGdlbmVyYXRlIG5ldyB0b2tlblxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGJhc2V1cmxcclxuICogQHBhcmFtICB7UmVhZG9ubHk8dG9rZW5EYXRhPn0gZGF0YVxyXG4gKiBAcmV0dXJucyBQcm9taXNlXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVUb2tlbihiYXNldXJsOiBzdHJpbmcsZGF0YTogUmVhZG9ubHk8dG9rZW5EYXRhPik6IFByb21pc2U8YW55PiB7XHJcbiAgICB2YXIgYXBpUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGJhc2V1cmwrVXNlci5UT0tFTiwgZGF0YSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhcGlSZXNwb25zZVxyXG59XHJcblxyXG4gLyoqXHJcbiAgKiBAZGVzYyAgU2VuZCBCYXNlIHVybCBhbmQgUmVmcmVzaCB0b2tlbiB0byBnZW5lcmF0ZSBuZXcgdG9rZW5cclxuICAqIEBwYXJhbSAge3N0cmluZ30gYmFzZXVybFxyXG4gICogQHBhcmFtICB7UmVhZG9ubHk8dG9rZW5EYXRhPn0gZGF0YVxyXG4gICogQHJldHVybnMgUHJvbWlzZVxyXG4gICovXHJcbiBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFRva2VuKGJhc2V1cmw6IHN0cmluZyxkYXRhOiBSZWFkb25seTx0b2tlbkRhdGE+KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHZhciBhcGlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYmFzZXVybCtVc2VyLlRPS0VOLCBkYXRhKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICByZXR1cm4gZXJyb3JcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFwaVJlc3BvbnNlXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
