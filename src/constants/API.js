// @flow

export const makeUrlWithParams = (url: string, params: Object) => {
  const search = new URLSearchParams()

  Object.keys(params).forEach(key => search.append(key, params[key]))
  return `${url}?${search.toString()}`
}

export const getAPI = () => ({
  LOGIN: '/2/accounts/login/',
  LOGIN_BY_PHONE: '/2/accounts/login_by_phone/',
})

export const API = getAPI()
