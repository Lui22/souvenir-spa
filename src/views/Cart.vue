<template>
  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <cart-item
      v-for="(el, ind) in cart"
      :key="ind"
      :item="el"
      @updatePrice="updateCost"/>
    </div>
    <div class="row justify-content-center gap-1">
      <h2 class="mb-5">Итоговая стоимость: {{ cartCost }}р.</h2>
      <router-link to="/" class="col-6 btn btn-lg btn-outline-info mb-3" type="button">Назад</router-link>
      <button class="col-6 btn btn-lg btn-primary mb-3" type="button"
      @click="makeOrder">Оформить заказ</button>

    </div>
  </main>
</template>

<script setup>
import { onMounted, defineEmits, ref, computed } from 'vue'
import fetch from '../helpers/fetch'
import CartItem from '../components/CartItem'
import router from '../router'
const emit = defineEmits(['changeTitle'])
onMounted(() => {
  emit('changeTitle', 'Корзина')
  getCart()
})

const cart = ref([])
const getCart = async () => {
  const res = await fetch('GET', 'cart')
  if (!await res.error) {
    cart.value = res
  }
}

const makeOrder = async () => {
  const res = await fetch('POST', `order`)
  await router.push('/orders')
}

const cost = ref(0)
const cartCost = computed(() => {
  for (const cartProduct of cart.value) {
    cost.value += cartProduct.price
  }
  return cost
})

const updateCost = (price) => {
  cost.value += price
}
</script>

<style scoped>

</style>
