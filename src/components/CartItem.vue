<template>
  <div class="col" v-if="count >= 1">
    <div class="card mb-4 rounded-3 shadow-sm">
      <div class="card-header py-3">
        <h4 class="my-0 fw-normal">{{ item.name }}</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">{{ item.price }}р.<small class="text-muted fw-light"> &times; {{
            count
          }}
          шт.</small></h1>
        <p>{{ item.description }}</p>

        <button class="btn btn-lg btn-info mb-3" type="button"
                @click="addProduct">+
        </button>
        <button class="btn btn-lg btn-warning mb-3" type="button"
                @click="removeProduct">&minus;
        </button>
        <button class="btn btn-lg btn-outline-danger mb-3" type="button"
                @click="removeProduct">Удалить из корзины
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import fetch from '../helpers/fetch'
import router from '../router'

const props = defineProps(['item'])
const emit = defineEmits(['updatePrice'])

const count = ref(1)

const addProduct = async () => {
  const res = await fetch('POST', `cart/${props.item.product_id}`)
  count.value += 1
  emit('updatePrice', props.item.price)
}

const removeProduct = async () => {
  const res = await fetch('DELETE', `cart/${props.item.id}`)
  count.value -= 1
}

</script>

<style scoped>

</style>
