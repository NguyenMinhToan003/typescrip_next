import NextAuth, { User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { InternalError, InvalidActiveAccountError, InvalidLoginError } from './utils/error'
import axiosInstance from './utils/axios'
import { HttpStatusCode } from 'axios'
import { IUser } from './types/next-auth'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        try{
          const res = await axiosInstance.post('/auth/login', {
            email: credentials.email,
            password: credentials.password,
          })
          const user = res.data as User
          return user
        }
        catch(error){
          const { data } = (error as any).response
          if( data.statusCode === HttpStatusCode.Unauthorized){
            throw new InvalidLoginError()
          }
          else if(data.statusCode === HttpStatusCode.UnprocessableEntity){
            throw new InvalidActiveAccountError()
          }
          else {
            throw new InternalError()
          }
        }
      },
    }),
  ],
  pages:{
    signIn: '/auth/login',
  },
    //  By default, the `id` property does not exist on `token` or `session`. See the [TypeScript](https://authjs.dev/getting-started/typescript) on how to add it.
  callbacks: {
      jwt({ token, user }) {
        if (user) { // User is available during sign-in
          token.user = user.data as IUser
          token.access_token = user.access_token
          token.refresh_token = user.refresh_token
          token.access_expire = user.access_expire
        }
        return token
      },
      session({ session, token }) {
        (session.user as IUser) = token.user
        session.access_token = token.access_token
        session.refresh_token = token.refresh_token
        session.access_expire = token.access_expire
        return session
      },
    },
})