<template>
    <form @submit.prevent="register">
      <input v-model="username" placeholder="Логин" required />
      <input v-model="password" type="password" placeholder="Пароль" required />
      <button type="submit">Зарегистрироваться</button>
    </form>
  </template>
  
  <script setup>
  const username = ref('')
  const password = ref('')
  
  const register = async () => {
    try {
      await useAuth().signUp({ username: username.value, password: password.value })
      navigateTo('/login')
    } catch (error) {
      console.error('Ошибка регистрации:', error)
    }
  }
  </script>
  