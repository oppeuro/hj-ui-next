<template>
  <DatePicker />
  <Paper class="sdf" @click="ss" data-name="huangjin">
    <p>1223</p>
    <p>34556</p>
  </Paper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DatePicker from '@/Picker/DatePicker'
import Paper from '@/Paper'

export default defineComponent({
  name: 'App',
  components: {
    DatePicker,
    Paper,
  },
  methods: {
    ss() {
      alert(1)
    },
  },
})
</script>

<style>
body {
  background: #90a4ae;
}
</style>
