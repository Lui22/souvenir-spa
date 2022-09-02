<template>
  <main>
    <order
    v-for="(el, ind) in orders"
    :key="ind"
    :item="el"
    />

    <div class="row justify-content-center gap-1">
      <router-link to="/" class="col-6 btn btn-lg btn-outline-info mb-3" type="button">Назад</router-link>
    </div>
  </main>
</template>

<script setup>
import { onMounted, defineEmits, ref } from 'vue'
import fetch from '../helpers/fetch'
import Order from '../components/Order'

const emit = defineEmits(['changeTitle'])
onMounted(() => {
  emit('changeTitle', 'Ваши заказы')
  getOrders()
})

const orders = ref([])
const getOrders = async () => {
  const res = await fetch('GET', 'order')

  if (!res.error) {
    orders.value = res
  }
}
</script>

<style scoped>

</style>
