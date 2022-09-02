<template>
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">{{ item?.name }}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">{{ item?.price }}р.<small class="text-muted fw-light"> &times; {{ count }} шт.</small>
        </h1>
        <p>{{ item?.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['count', 'item'])
</script>

<style scoped>

</style>
