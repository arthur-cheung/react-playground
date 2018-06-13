import { Home, About } from '../components';

export const routes = [
    {
        label: 'Home', key: 'home_route', path: '/', component: Home
    },
    {
        label: 'About', key: 'about_route', path: '/about', component: About
    },
    {
        label: 'Second About', key: 'second_about_route', path: '/second_about', component: About
    },
]
