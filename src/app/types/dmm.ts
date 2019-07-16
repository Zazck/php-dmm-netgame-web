export enum OpCode {
  OK = 0,
  INVALID_INPUT = -1,
  NETWORK_ERROR = -2,
  DMM_TOKEN_NOT_FOUND = -10,
  TOKEN_NOT_FOUND = -11,
  DMM_METHOD_CHANGED = -12,
  DMM_PASSWORD_RESET = -13,
  DMM_INVALID_INPUT = -14,
  DMM_GAME_INSTALL_NEEDED = -15,
  DMM_GAME_ALREADY_INSTALLED = -16,
  DMM_TOKEN_EXPIRED = -17,
  DMM_INVALID_EMAIL_PASSWORD = -18,
  DMM_FORCE_REDIRECT = -19,
  DMM_REQUIRE_PROFILE = -20,
  CLIENT_NETWORK_ERROR = -100,
  CLIENT_COOKIES_LOST = -101,
  SERVER_INVALID_RESPONSE = -110,
}

export interface ILoginPayload {
  login_id: string;
  password: string;
  save_login_id: 0 | 1;
  save_password: 0 | 1;
  use_auto_login: 0 | 1;
  // app_base: 'general' | 'adult' | 'exchange';
}

export interface IGadgetInfo {
  viewer_id: number;
  owner_id: number;
  app_id: number;
  url: string;
  st: string;
  time: number;
  type: string;
  token: string;
}

export interface IResponseGameFrame {
  gadget_info: IGadgetInfo;
  iframe_width: number;
}

export interface IInstallPayload {
  app_name: string;
  app_base: string;
  notification: 0 | 1;
  myapp: 0 | 1;
}

export interface IRegistPayload {
  app_base: string;
  nickname: string;
  gender: 'male' | 'female';
  year: string;
  month: string;
  day: string;
  isGeneralChecked?: 'on';
  isAdultChecked?: 'on';
}

export interface IRunPayload {
  app_name: string;
  app_base: string;
}

export interface IUpdateSTPayload {
  app_name: string;
  app_base: string;
  app_id: number;
  st: string;
  time: number;
  token: string;
}

export interface IResponseData<T> {
  code: OpCode.OK;
  data: T;
  cookies: object[];
}

export interface IResponseMessage {
  code: OpCode;
  data?: string;
  cookies: object[];
}

export interface IResponseError {
  code: Exclude<OpCode, OpCode.OK>;
  data: string;
  cookies: object[];
}

export interface IResponseST {
  status: string;
  result: string;
  time: number;
}

export interface IGameInfo {
  name: string;
  thumb: string;
  title: string;
  comment: string;
}

export interface IResponsePaymentDetail {
  gameTitle: string;
  itemTitle: string;
  itemImage: string;
  itemDescription: string;
  itemPrice: number;
  itemCount: number;
  point: number;
}

export interface IResponsePaymentAction {
  amount: number;
  response_code: 'OK' | 'CANCEL' | 'err';
  payment_id: string;
}

interface IPaymentPayload {
  app_name: string;
  app_base: string;
  app_id: number;
  version: 'new' | 'old';
  payment_id: string;
}

export interface IRPCPayloadRaw<T extends any[] = any[]> {
  s: string;
  a: T;
  t: string;
  c: 0;
  f: '..';
  l: false;
}

export interface IRPCPayload<T extends any[] = any[]> {
  event: string;
  data: T;
}

export interface IRequestPaymentPayload extends IPaymentPayload {}
export interface IPaymentCommitPayload extends IPaymentPayload {}
export interface IPaymentCancelPayload extends IPaymentPayload {}

export interface IRPCRequestPaymentPayload {
  orderedTime: string;
  paymentId: string;
  status: number;
  transactionUrl: string;
}
