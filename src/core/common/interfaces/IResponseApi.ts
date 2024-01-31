// Generated by https://quicktype.io

export interface IResponseAPI<T> {
  headers: Headers;
  response: T;
  timestamp: string;
  path: string;
}

export interface Headers {
  successfull: boolean;
  status: number;
}