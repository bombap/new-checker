import {createApp, h} from 'vue';
import {createInertiaApp, Head, Link} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from "@inertiajs/progress";
import BootstrapVue3 from 'bootstrap-vue-3'
import VueSweetalert2 from 'vue-sweetalert2';
import PerfectScrollbar from 'vue3-perfect-scrollbar'

import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import '../css/app.css'

export function resolvePageComponent(name, pages) {
  for (const path in pages) {
    if (path.endsWith(`${name.replace('.', '/')}.vue`)) {
      return typeof pages[path] === 'function'
        ? pages[path]()
        : pages[path]
    }
  }

  throw new Error(`Page not found: ${name}`)
}

createInertiaApp({
  resolve(name) {
    return resolvePageComponent(name, import.meta.glob("../Pages/**/*.vue"))
  },
  setup({el, App, props, plugin}) {
    createApp({ render: () => h(App, props)})
      .use(plugin)
      .use(BootstrapVue3)
      .use(PerfectScrollbar)
      .use(VueSweetalert2)
      .component('InertiaHead', Head)
      .component('InertiaLink', Link)
      .mount(el)
  }
})

InertiaProgress.init();
