<template>
    <main>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <item-card
        v-for="(el, ind) in products"
        :key="ind"
        :item="el">
        </item-card>
      </div>
    </main>
</template>

<script setup>
import ItemCard from '../components/ItemCard'
import { onMounted, onUpdated, ref } from 'vue'
import fetch from '../helpers/fetch'
const emit = defineEmits(['changeTitle'])


let products = ref([])
const getProducts = async () => {
  const res = await fetch('GET', 'products')
  products.value = await res
}

onMounted(() => {
  emit('changeTitle', 'Каталог товаров')
  getProducts()
})

</script>
