<template lang="pug">
div
  Teleport(:disabled='!teleportTarget' :to='teleportTarget')
    q-btn.full-width(v-if='!isRunning' icon='extension' @click='toggleBlocks')
      span.q-ml-sm Run blocks
    q-btn.full-width(v-else color='red' icon='extension' @click='toggleBlocks')
      span.q-ml-sm Stop blocks
</template>

<script setup>
import {useSettingsStore} from 'stores/settings'
import {useDatafeedResponses} from 'stores/datafeed'
import {inject, onMounted, onUnmounted, watch} from 'vue'

const $bus = inject('$bus')
const dataFeed = useDatafeedResponses()
const settings = useSettingsStore()
const props = defineProps(['target'])
const emit = defineEmits(['toggled'])
const teleportTarget = $ref(null)

let isRunning = $ref(false)

/**
 * React to global toggle events
 */
onMounted(() => {
  $bus.on('button.blocklyToggle', onBlocklyToggleEvent)
})
onUnmounted(() => {
  $bus.off('button.blocklyToggle', onBlocklyToggleEvent)
})
// Only triggered if no traget is set, since it is assumed it's a global button like the one in the header
function onBlocklyToggleEvent (state = null) {
  if (!props.target) {
    if (state === null) {
      toggleBlocks()
    } else {
      isRunning = state
    }
  }
}

/**
 * Swaps state
 * - Called when clicked
 */
function toggleBlocks () {
  if (typeof settings.ui.toolbar.toggleBlocksWorkspaceRef?.setState === 'function') {
    isRunning = !isRunning
    settings.ui.toolbar.toggleBlocksWorkspaceRef.setState(isRunning)
  } else if (!props.target) {
    isRunning = dataFeed.isRunning = !dataFeed.isRunning
  } else {
    isRunning = !isRunning
    emit('toggled', props.target, isRunning)
  }

  if (isRunning) {
    teleportTarget = '#global-blockly-toggle'
  } else {
    teleportTarget = ''
  }
}

watch(() => settings.ui.sidebar.right.open, (isOpen) => {
  if (!isOpen) {
    teleportTarget = null
  }
})

/**
 * Force set state
 * @exposed
 */
function setState (state) {
  isRunning = state
}

defineExpose({setState})
</script>
