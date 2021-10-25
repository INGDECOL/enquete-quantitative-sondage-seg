<template>
  <div class="flex min-h-scre">
    <the-sidebar />
    <div class="flex flex-col flex-grow bg-gray-200">
      <TheHeader />
      <div class="mb-auto">
        <Home />
      </div>
      <the-footer />
    </div>
  </div>
</template>

<script>
  import Home from '../admin/dashboard/Home.vue'
  import TheSidebar from '@/components/layouts/TheSidebar.vue'
  import TheHeader from '@/components/layouts/TheHeader.vue'
  import TheFooter from '@/components/layouts/TheFooter.vue'

  export default {
    components : { Home, TheSidebar, TheHeader, TheFooter, TheSidebar },

  }
</script>

<style>

</style>
