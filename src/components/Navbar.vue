<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-logo"> Mi tienda</router-link>
      <ul class="navbar-menu">
        <li class="navbar-item">
          <router-link to="/" class="navbar-link">Inicio</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/crear-producto" class="navbar-link">Crear Producto</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
};
</script>

