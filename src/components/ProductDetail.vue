<template>
  <div class="card-producto">
    <img :src="producto.image" :alt="producto.title" />
    <h3>{{ producto.title }}</h3>
    <p class="precio">${{ producto.price }}</p>
    <p class="descripcion">{{ producto.description }}</p>
    <div class="acciones">
      <router-link :to="{ name: 'DetalleProducto', params: { id: producto.id } }">Ver Detalles</router-link>
      <router-link :to="{ name: 'EditarProducto', params: { id: producto.id } }">Editar</router-link>
      <button @click="eliminarProducto(producto.id)" class="delete">Eliminar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    producto: {
      type: Object,
      required: true
    }
  },
  methods: {
    async eliminarProducto(id) {
      try {
        await this.$emit('eliminar-producto', id);
      } catch (err) {
        console.error('Error al eliminar el producto:', err);
      }
    }
  }
};
</script>



