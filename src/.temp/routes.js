const c1 = () => import(/* webpackChunkName: "page--src--templates--project-post-vue" */ "/Users/Francesco/Downloads/shedgraf/src/templates/ProjectPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--journal-post-vue" */ "/Users/Francesco/Downloads/shedgraf/src/templates/JournalPost.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/Francesco/Downloads/shedgraf/src/pages/Journal.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/Francesco/Downloads/shedgraf/src/pages/Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/Francesco/Downloads/shedgraf/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/Francesco/Downloads/shedgraf/src/pages/Index.vue")

export default [
  {
    path: "/projects/shed626-music-hub/",
    component: c1
  },
  {
    path: "/projects/trasvedute/",
    component: c1
  },
  {
    path: "/projects/spinnit/",
    component: c1
  },
  {
    path: "/projects/sunk/",
    component: c1
  },
  {
    path: "/journal/use-gridsome-vuejs/",
    component: c2
  },
  {
    path: "/projects/iris-giardino-sonoro/",
    component: c1
  },
  {
    path: "/projects/ios-concept/",
    component: c1
  },
  {
    path: "/journal/macos-development-environment/",
    component: c2
  },
  {
    path: "/journal/music/",
    component: c2
  },
  {
    path: "/projects/giovesi/",
    component: c1
  },
  {
    path: "/journal/brand-event/",
    component: c2
  },
  {
    path: "/journal/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
