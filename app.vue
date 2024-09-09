<template>
  <!--
  <div>
      <NuxtRouteAnnouncer />
      <NuxtWelcome />
  </div>
  -->
  <nav>
    <NuxtLink to="/">Главная</NuxtLink>
    <NuxtLink to="/login">Вход</NuxtLink>
    <NuxtLink to="/register">Регистрация</NuxtLink>
    <NuxtLink to="/profile" v-if="status === 'authenticated'">Профиль</NuxtLink>
    <button @click="logout" v-if="status === 'authenticated'">Выйти</button>
  </nav>
  <NuxtPage />
</template>

<script setup>
const { status } = useAuth()

const logout = async () => {
  await useAuth().signOut()
  navigateTo('/')
}
</script>
