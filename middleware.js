export { default } from 'next-auth/middleware'

export const config = {
    matcher: [
        '/public/properties/add',
        '/public/profile',
        '/public/saved_properties',
        '/public/messages'
    ]
}
