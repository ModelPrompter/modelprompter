<template lang="pug">
.fullscreen.text-white.text-center.q-pa-md.flex.flex-center
  div
    div(style='font-size: 30vh')
      | 404
    .text-h2(style='opacity:.4')
      | Oops. Nothing here...
    q-btn.q-mt-xl(unelevated='' to='/' label='Go Home' no-caps='')
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
