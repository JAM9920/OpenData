import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [

        // Dashboards

        {
            path: '/',
            name: 'analytics',
            // component: () => import('../DemoPages/Dashboards/Analytics.vue'),
            component: () => import('../New paegs/MapStatistics'),
        },

        // New pages

        // {
        //     path: '/directory',
        //     name: 'directory',
        //     component: () => import('../New paegs/Directory.vue'),
        // },
        // {
        //     path: '/people',
        //     name: 'people',
        //     component: () => import('../New paegs/People.vue'),
        // },
        {
            path: '/statistics',
            name: 'statistics',
            component: () => import('../New paegs/Statistics.vue'),
        },
        // {
        //     path: '/profile',
        //     name: 'profile',
        //     component: () => import('../New paegs/Profile.vue'),
        // },

        // Pages

        {
            path: '/login',
            name: 'login-boxed',
            meta: {layout: 'userpages'},
            component: () => import('../DemoPages/UserPages/LoginBoxed.vue'),
        },
        {
            path: '/register',
            name: 'register-boxed',
            meta: {layout: 'userpages'},
            component: () => import('../New paegs/Register.vue'),
            // component: () => import('../DemoPages/UserPages/RegisterBoxed.vue'),
        },
    ]
})
