import { request } from "./request"

export function homedata() {
    return request({
        url: "https://easy-mock.com/mock/5dbdd3dd1e7593458081af95/shopping/index"
    })
}