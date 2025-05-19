import home from '@/assets/icons/home.svg?raw'

const icon = URL.createObjectURL(new Blob([home], {
    type: 'image/svg+xml'
}))

export default [{
        label: 'Dashboard',
        route: '/dashboard'
    },
    {
        label: 'Routes',
        route: '/routes'
    },
    {
        label: 'Settings',
        route: '/settings'
    },
    {
        label: 'Env',
        route: '/env'
    },
    {
        label: 'Auth',
        route: '/auth'
    },
    {
        label: 'Users',
        route: '/users'
    },
    {
        label: 'Tools',
        children: [
            {
                label: 'Terminal',
                route: '/terminal'
            },
            {
                label: 'Monitor',
                route: '/monitor'
            },
            {
                label: 'Docker',
                route: '/docker/apps'
            },
            {
                label: 'DNS Providers',
                route: '/dns-providers'
            }
        ]
    },
    {
        label: 'Deploy',
        children: [
            {
                label: 'Docker Apps',
                route: '/apps'
            },
            {
                label: 'New Docker App',
                route: '/deploy'
            },
            {
                label: 'Static Apps',
                route: '/apps-static'
            },
            {
                label: 'New Static App',
                route: '/deploy-static'
            },
        ]
    }
]