<template>
  <DatePicker />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DatePicker from '@/Picker/DatePicker'

export default defineComponent({
  name: 'App',
  components: {
    DatePicker,
  },
})
</script>

<style>
body {
  background: #90a4ae;
}
</style>
