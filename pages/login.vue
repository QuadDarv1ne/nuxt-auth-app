<template>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Логин" required />
      <input v-model="password" type="password" placeholder="Пароль" required />
      <button type="submit">Войти</button>
    </form>
  </template>
  
  <script setup>
  const username = ref('')
  const password = ref('')
  
  const login = async () => {
    try {
      await useAuth().signIn({ username: username.value, password: password.value })
      navigateTo('/')
    } catch (error) {
      console.error('Ошибка входа:', error)
    }
  }
  </script>
  