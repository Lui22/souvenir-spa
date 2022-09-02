<template>
  <div class="col">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">{{ item.name }}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">{{ item.price }}</h1>
        <p>{{ item.description }}</p>
        <button type="button" class="w-100 btn btn-lg btn-outline-primary"
        v-if="isAuthed()"
        @click="addToCart">Добавить в корзину</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import fetch from '../helpers/fetch'

const props = defineProps(['item'])

const isAuthed = () => {
  return localStorage.getItem('token')
}

const addToCart = async () => {
  const res = await fetch('POST', `cart/${props.item.id}`)
}
</script>

<style scoped>

</style>
