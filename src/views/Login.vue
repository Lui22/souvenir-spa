<template>
  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
      <div class="col">
        <div class="row">
          <form>
            <div class="form-floating mb-3">
              <input id="floatingInput" class="form-control" placeholder="name@example.com" type="email" v-model="email">
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input id="floatingPassword" class="form-control" placeholder="Password" type="password" v-model="password">
              <label for="floatingPassword">Password</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary mb-3" type="submit" @click.prevent="doLogin">Войти</button>
            <router-link to="/" class="w-100 btn btn-lg btn-outline-info" type="submit">Назад</router-link>
          </form>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
import fetch from '../helpers/fetch'
import { getCurrentInstance, onMounted, ref } from 'vue'
import router from '../router'

const emit = defineEmits(['changeTitle'])
onMounted(() => {
  emit('changeTitle', 'Авторизация')
})

const email = ref('')
const password = ref('')

const doLogin = async () => {
  const res = await fetch('POST', 'login', JSON.stringify({
    email:email.value,
    password: password.value
  }))
  if (!res.error) {
    localStorage.setItem('token', res.data.user_token)
    await router.push('/')
  }
}
</script>

<style scoped>

</style>
