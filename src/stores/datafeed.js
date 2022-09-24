import {defineStore} from 'pinia'

export const useDatafeedResponses = defineStore('datafeedResponses', () => {
  const data = $ref([])
  const onEndMethods = $ref([])
  const isRunning = $ref(false)
  const hasRanLast = $ref(false)

  return {data, onEndMethods, isRunning, hasRanLast}
})