<template>
  <div>
    <h1>This is my pokemon route with the parameter {{ $route.params.id }}</h1>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${$route.params.id}.png`"
      alt="pokemon sprite"
    />
  </div>
</template>
