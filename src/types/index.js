// @flow

export type LoginReqData = {
  email: string,
  password: string,
}

export type User = {
  pending: Number,
  token: string,
  user_id: Number,
  name: string,
  id: Number,
  created: Number,
  expires: Number,
  device_description: string,
  offer_url: string,
  user_eid: Number,
  userid: Number,
}
