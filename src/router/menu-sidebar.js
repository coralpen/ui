import home from '@/assets/icons/home.svg?raw'

const icon = URL.createObjectURL(new Blob([home], {
    type: 'image/svg+xml'
}))

export default [
    {
        label: 'Swarm'
    },
    {
        label: 'Apps (Services)',
        route: '/docker/apps',
        children: [
            {
                label: 'Environments',
                route: '/docker/apps/environments'
            },
            {
                label: 'Networks',
                route: '/docker/apps/networks'
            },
            {
                label: 'Ports',
                route: '/docker/apps/ports'
            },
            {
                label: 'Volumes',
                route: '/docker/apps/volumes'
            },
        ]
    },
    {
        label: 'Tasks',
        route: '/docker/tasks'
    },
    {
        label: 'Containers',
        route: '/docker/containers'
    },
    {
        label: 'Images',
        route: '/docker/images'
    },
    {
        label: 'Machines',
        route: '/docker/nodes'
    },
    {
        label: 'Networks',
        route: '/docker/networks'
    },
    {
        label: 'Volumes',
        route: '/docker/volumes'
    }
]