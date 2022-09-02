<template>
  <div class="container py-3">
    <header>
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a class="d-flex align-items-center text-dark text-decoration-none" href="/">
          <span class="fs-4">«Матрешка»</span>
        </a>

        <nav v-if="!isAuthed()"
             class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <router-link class="me-3 py-2 text-dark text-decoration-none" href="#" to="/register">Регистрация
          </router-link>
          <router-link class="me-3 py-2 text-dark text-decoration-none" href="#" to="/login">Авторизация</router-link>
        </nav>

        <nav v-if="isAuthed()"
             class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a @click="logout()" class="me-3 py-2 text-dark text-decoration-none" href="#">Выход</a>
          <router-link class="me-3 py-2 text-dark text-decoration-none" href="#" to="/orders">Мои заказы</router-link>
          <router-link class="me-3 py-2 text-dark text-decoration-none" href="#" to="/cart">Корзина</router-link>
        </nav>
      </div>

      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">{{ title }}</h1>
      </div>
    </header>
    <router-view @changeTitle="changeTitle"/>
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
      <div class="row">
        <div class="col-12 col-md">
          <small class="d-block mb-3 text-muted">&copy; 2017–2021</small>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
</style>

<script setup>
import { onBeforeMount, onMounted, onUpdated, ref } from 'vue'
import fetch from './helpers/fetch'
import router from './router'

const isAuthed = () => {
  return localStorage.getItem('token')
}

const title = ref('Каталог товаров')
const changeTitle = (newValue) => {
  title.value = newValue
}

const logout = async () => {
  localStorage.removeItem('token')
  await router.push('/')
  const res = await fetch('GET', 'logout')
}
</script>
