<template>
  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
      <div class="col">
        <div class="row">
          <form>
            <h1 class="h3 mb-3 fw-normal">Пожалуйста заполните все поля</h1>
            <div class="form-floating mb-3">
              <input id="floatingFio" class="form-control" placeholder="ФИО" type="text" v-model="fio">
              <label for="floatingFio">ФИО</label>
            </div>
            <div class="form-floating mb-3">
              <input id="floatingInput" class="form-control" placeholder="name@example.com" type="email" v-model="email">
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input id="floatingPassword" class="form-control" placeholder="Password" type="password" v-model="password">
              <label for="floatingPassword">Password</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary mb-3" type="submit" @click="doRegister">Зарегистрироваться</button>
            <router-link to="/" class="w-100 btn btn-lg btn-outline-info" type="submit">Назад</router-link>
          </form>
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, defineEmits, ref } from 'vue'
import fetch from '../helpers/fetch'
import router from '../router'

const emit = defineEmits(['changeTitle'])
onMounted(() => {
  emit('changeTitle', 'Регистрация')
})

const fio = ref('')
const email = ref('')
const password = ref('')

const doRegister = async () => {
  const res = await fetch('POST', 'signup', JSON.stringify({
    'fio': fio.value,
    'email': email.value,
    'password': password.value,
  }))

  if (!res.error) {
    localStorage.setItem('token', res.data.user_token)
    router.push('/login')
  }
}
</script>

<style scoped>

</style>
