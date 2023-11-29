<template>
  <section>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink :to="`/pokemon/${1}`">Pokemon</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <slot />
  </section>
</template>

<script></script>

<style></style>
