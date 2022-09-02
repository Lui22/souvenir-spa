<template>
  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center bg-light">
    <h2 class="w-100">{{ orderNum }}</h2>

    <ordered-item
        v-for="(el, ind) in productsInOrder"
        :key="ind"
        :count="el"
        :item="getProduct(ind)"></ordered-item>
    <h2 class="w-100">{{ orderCost }}</h2>
  </div>
</template>

<script setup>
import { computed, defineProps, onMounted, ref } from 'vue'
import OrderedItem from './OrderedItem'
import fetch from '../helpers/fetch'

const props = defineProps(['item'])

const orderNum = computed(() => {
  return 'Заказ №' + props.item.id
})
const orderCost = computed(() => {
  return `Итоговая стоимость: ${props.item.order_price}р.`
})

const countItemsInOrder = (order) => {
  const counter = {}
  order.forEach((x) => { counter[x] = (counter[x] || 0) + 1 })

  return counter
}

const productsInOrder = ref({})
const products = ref([])
onMounted(async () => {
  productsInOrder.value = countItemsInOrder(props.item.products)
  const res = await fetch('GET', 'products')
  products.value = await res
})

const getProduct = (index) => {
  return products.value[(index - 1)]
}
</script>

<style scoped>

</style>
