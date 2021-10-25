<template>
    <div class="flex min-h-scre">
    <the-sidebar />
    <div class="flex flex-col flex-grow bg-gray-200">
      <TheHeader />
      <div class="mb-auto">
        <ListUser />
      </div>
      <the-footer />
    </div>
  </div></template>

<script>
    import ListUser from '../dashboard/users/UserList.vue'
    import TheSidebar from '@/components/layouts/TheSidebar.vue'
    import TheHeader from '@/components/layouts/TheHeader.vue'
    import TheFooter from '@/components/layouts/TheFooter.vue'
export default {
    components : { ListUser, TheSidebar, TheHeader, TheFooter, TheSidebar },
}
</script>

<style>

</style>
