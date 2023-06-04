export interface IloginData {
    email: string,
    password: string
}

export interface IloginResponse {
    token: string,
    code: number
}