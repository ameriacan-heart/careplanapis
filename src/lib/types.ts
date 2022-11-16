/* eslint-disable no-param-reassign */
export interface Params {
  name?: string;
  type?: string;
  category?: string;
  level?: string;
  coach?: string;
  pageNumber?: string;
  pageSize?: string;
  pageOrder?: string;
  q?: string;  
  participantId?: string;
  fromDate?:string;
  toDate?:string;
  status?:string;
  scheduledAt?:string;
  sequence?:string;
  list?:string;
  categories?:string;
  meta?:metaData;
}

export interface tokenData {
  client_id?: string;
  grant_type: string;
  client_secret?: string;
  refresh_token?: string;
}

export interface tokenInfo {
  access_token?: string;
  expires_in?: number;
  refresh_token?: string;
  token_type?: string;
}

export interface metaData {
  level?: string;
  coach?: string;
}