import NextAuth, { AuthError, DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'


interface IUser {
    id: string;
    name: string;
    email: string;
    // isVerify: boolean,
    // type: string;
    role: string;
}

declare module 'next-auth/jwt' {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        accessToken: string;
        refreshToken: string;
        user: IUser;
        accessExpire: number;
        error: string;
    }
}
declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        accessToken: string;
        refreshToken: string;
        user: IUser;
        accessExpire: number;
        error: string;
    }
    interface User {
        user: IUser
        accessToken: string;
        refreshToken: string;
        accessExpire: number;
    }

}