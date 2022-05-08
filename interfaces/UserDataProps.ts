
export interface IUserDataProps {
    password: string,
    email: string,
    fullName: string,
    username: string,
}

export interface IUserData extends IUserDataProps{
    confirmHash: string,
}