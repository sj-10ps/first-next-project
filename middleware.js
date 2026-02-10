import { withAuth } from 'next-auth/middleware'
export default withAuth({
    pages:{
        signIn:'/login'
    }
})


export const config = {
    matcher: [
        '/public/properties/add',
        '/public/profile',
        '/public/saved_properties',
        '/public/messages'
    ]
}
