//AUTH SERVICE
export interface IUserSignin {
    email: string;
    password: string;
}
export interface IUserSignup {
    email: string;
    password: string;
    awsAccountName: string;
    companyName: string;
    userName: string;
}

export interface IPasswordResetEmail {
    email: string;
}

//DATA SERVICE
export interface IARN {
    client_role_arn: string;
}
export interface IState {
    user_id_cm: string;
}
export interface ISF {
    recommendation_id: string[];
}
export interface IStatus {
    auto_saver_status: number;
    user_id_cm: string;
}

//USER SERVICE
// export interface IUpdateUser {
// }
// export interface IDeleteUser {
// }
export interface IAWSStatus {
    confirmed_seller: boolean;
}