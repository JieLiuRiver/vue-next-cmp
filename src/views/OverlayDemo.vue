<template>
  <div :style="{height: '2000px'}">
    <Overlay v-model:show="state.show" @click="onClick">
      <div>
        content
      </div>
    </Overlay>
    <button @click="state.show = true">show</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Overlay from '@/components/Overlay/index.vue'

export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive({
      show: false
    })
    const onClick = () => {
      console.log('on click')
    }
    return {
      state,
      onClick
    }
  },
  components: {
    Overlay,
    
  }
})
</script>

<style>
</style>