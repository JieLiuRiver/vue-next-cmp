<template>
  <Transition name="overlay-fade" @click="onClick">
    <div 
      :class="classes" 
      v-show="show" 
      @touchmove.stop="touchmove" 
      :style="{animationDuration: `${duration}s`, zIndex, ...overlayStyle}"
    >
      <slot></slot>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties, PropType } from 'vue'
const overlayProps = {
  show: {
    type:Boolean,
    default: false
  },
  overlayClass: {
    type: String,
    default: ''
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  duration: {
    type: [Number, String],
    default: 0.3
  },
  zIndex: {
    type: [Number, String],
  },
  overlayStyle: {
    type: Object as PropType<CSSProperties>
  }
}
export default defineComponent({
  name: 'overlay',
  props: overlayProps,
  emits: ['click','update:show'],
  setup(props, { emit }) {
    console.log('props', props)
    const classes = computed(() => {
      return {
        ['nut-overlay']: true,
        [props.overlayClass]: true
      }
    })
    const onClick = (e: any) => {
      emit('click', e)
      if (props.closeOnClickOverlay) {
        emit('update:show', false)
      }
    }
    const touchmove = (e: any) => {
      if (props.lockScroll) {
        e.preventDefault()
      }
    }
    return {
      classes,
      onClick,
      touchmove
    }
  }
})
</script>

<style lang="scss">
.overlay-fade-enter-active {
  animation: nut-fade-in;
}

.overlay-fade-leave-active {
  animation: nut-fade-out;
}

.nut-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}

@keyframes nut-fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes nut-fade-out {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>