import request from "../utils/http";

/**
 * 登录
 */
interface LoginValue {
    username: string,
    password: string
}
export const login = (params: LoginValue) => request(`/user/login`, params, 'post', false);

/**
 * 用户信息
 */
interface UserInfo {
    name: string,
}
export const getUserInfo = (params: UserInfo) => request(`/user/userInfo`, params, 'get', true);