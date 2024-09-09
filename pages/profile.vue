<template>
    <div v-if="status === 'authenticated'">
      <h1>Профиль пользователя</h1>
      <p>Добро пожаловать, {{ user?.username }}!</p>
      <button @click="logout">Выйти</button>
    </div>
  </template>
  
  <script setup>
  const { status, user } = useAuth()
  
  const logout = async () => {
    await useAuth().signOut()
    navigateTo('/')
  }
  </script>
  