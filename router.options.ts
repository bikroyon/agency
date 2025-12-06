    // ~/app/router.options.ts
    import type { RouterConfig } from '@nuxt/schema'

    export default <RouterConfig>{
      scrollBehavior(to, from, savedPosition) {
        // If a saved position exists (e.g., from browser back/forward), use it.
        if (savedPosition) {
          return savedPosition
        }
        // If a hash is present in the URL, scroll to the corresponding element.
        if (to.hash) {
          return { el: to.hash, top: 80 } // Adjust 'top' for fixed headers/navbars
        }
        // Otherwise, scroll to the top of the page.
        return { top: 0 }
      }
    }