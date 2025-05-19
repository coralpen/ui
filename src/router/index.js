import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/components/TemplateDefault.vue'),
        props: { renderer: 'view' },
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/Dashboard.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'routes',
                component: () => import('@/views/Routes.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'settings',
                component: () => import('@/views/Settings.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'dns-providers',
                component: () => import('@/views/DNSProviders.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'auth',
                component: () => import('@/views/OAuthProviders.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'env',
                component: () => import('@/views/Environment.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'terminal',
                component: () => import('@/views/Terminal.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'monitor',
                component: () => import('@/views/Monitor.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'users',
                component: () => import('@/views/Users.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'apps',
                component: () => import('@/views/Apps.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'apps/:id',
                component: () => import('@/views/Deploy.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'apps-static',
                component: () => import('@/views/AppsStatic.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'apps-static/:id',
                component: () => import('@/views/DeployStatic.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'deploy',
                component: () => import('@/views/Deploy.vue'),
                props: { renderer: 'slot' },
            },
            {
                path: 'deploy-static',
                component: () => import('@/views/DeployStatic.vue'),
                props: { renderer: 'slot' },
            }
        ]
    },
    {
        path: '/profile',
        component: () => import('@/views/Profile.vue')
    },
    {
        path: '/login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/register',
        component: () => import('@/views/Register.vue')
    },
    {
        path: '/recover',
        component: () => import('@/views/Recover.vue')
    },
    {
        path: '/reset-password',
        component: () => import('@/views/ResetPassword.vue')
    },
    {
        path: '/terms',
        component: () => import('@/views/Terms.vue')
    },
    {
        path: '/policy',
        component: () => import('@/views/Privacy.vue')
    },
    {
        path: '/disconnected',
        component: () => import('@/views/Disconnected.vue')
    },
    {
        path: '/setup',
        children: [
            {
                path: 'docker',
                component: () => import('@/views/SetupDocker.vue')
            },
            {
                path: 'swarm',
                component: () => import('@/views/SetupSwarm.vue')
            },
            {
                path: 'redis',
                component: () => import('@/views/SetupRedis.vue')
            },
            {
                path: 'host',
                component: () => import('@/views/SetupHost.vue')
            },
            {
                path: 'database',
                component: () => import('@/views/SetupDatabase.vue')
            },
            {
                path: 'mail',
                component: () => import('@/views/SetupMail.vue')
            },
            {
                path: 'admin',
                component: () => import('@/views/SetupAdmin.vue')
            },
            {
                path: 'letsencrypt',
                component: () => import('@/views/SetupLetsEncrypt.vue')
            },
            {
                path: 'attached',
                component: () => import('@/views/SetupAttached.vue')
            }
        ]
    },
    {
        path: '/docker',
        component: () => import('@/components/TemplateSidemenu.vue'),
        props: { renderer: 'view' },
        children: [
            {
                path: '',
                component: () => import('@/views/DockerServices.vue'),
                props: { renderer: 'slot' }
            },
            {
                path: 'apps',
                children: [
                    {
                        path: '',
                        component: () => import('@/views/DockerServices.vue'),
                        props: { renderer: 'slot' }
                    },
                    {
                        path: 'environments',
                        component: () => import('@/views/DockerServicesEnvironments.vue'),
                        props: { renderer: 'slot' }
                    },
                    {
                        path: 'networks',
                        component: () => import('@/views/DockerServicesNetworks.vue'),
                        props: { renderer: 'slot' }
                    },
                    {
                        path: 'ports',
                        component: () => import('@/views/DockerServicesPorts.vue'),
                        props: { renderer: 'slot' }
                    },
                    {
                        path: 'volumes',
                        component: () => import('@/views/DockerServicesVolumes.vue'),
                        props: { renderer: 'slot' }
                    }
                ]
            },
            {
                path: 'nodes',
                component: () => import('@/views/DockerNodes.vue'),
                props: { renderer: 'slot' }
            },
            {
                path: 'tasks',
                component: () => import('@/views/DockerTasks.vue'),
                props: { renderer: 'slot' }
            },
            {
                path: 'containers',
                component: () => import('@/views/DockerContainers.vue'),
                props: { renderer: 'slot' }
            },
            {
                path: 'containers/:identifier',
                component: () => import('@/views/DockerContainers.vue'),
                props: route => ({
                    identifier: route.params.identifier,
                    renderer: 'slot'
                })
            },
            {
                path: 'networks',
                component: () => import('@/views/DockerNetworks.vue'),
                props: { renderer: 'slot' }
            },
            {
                path: 'volumes',
                component: () => import('@/views/DockerVolumes.vue'),
                props: { renderer: 'slot' }
            },
            {
                path: 'images',
                component: () => import('@/views/DockerImages.vue'),
                props: { renderer: 'slot' }
            }
        ]
    },
    {
        path: '/oauth-token-stored',
        component: () => import('@/views/OAuthTokenStored.vue'),
        props: true
    },
    {
        path: '/:catchAll(.*)',
        component: () => import('@/views/NotFound.vue'),
        props: true
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0
        }
    }
})

export default router