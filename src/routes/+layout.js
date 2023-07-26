
/** @type {import('./$types').LayoutLoad} */
export function load() {
    return {
        sections: [
            { slug: 'profile', title: 'Profile' },
            { slug: 'notifications', title: 'Notifications' }
        ]
    };
    

}
    
export const prerender = true;





// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

