<template>
  <OverlayViews />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OverlayViews from '@/views/OverlayDemo.vue'

export default defineComponent({
  name: 'App',
  components: {
    OverlayViews
  }
})
</script>

<style>
</style>