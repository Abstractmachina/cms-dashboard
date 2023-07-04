
export interface IUser {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    hash: string;
    avatar?: string;
    joindate: Date;
    isAdmin: boolean;
}

export interface IUserMethods {

}