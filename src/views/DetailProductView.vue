<template>
  <div class="detalle-producto" v-if="producto">
    <img :src="producto.image" :alt="producto.title" class="producto-img" />
    <h1 class="producto-titulo">{{ producto.title }}</h1>
    <p class="producto-precio">$ {{ producto.price }}</p>
    <p class="producto-descripcion">{{ producto.description }}</p>
    <span class="producto-categoria">{{ producto.category }}</span>
    <button @click="volver" class="btn-volver">Volver</button>
  </div>
  <div v-else>
    <p>Cargando...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import apiService from '../services/apiService';

export default {
  setup() {
    const producto = ref(null);
    const route = useRoute();
    const router = useRouter();

    const cargarProducto = async () => {
      try {
        const response = await apiService.obtenerProductoPorId(route.params.id);
        producto.value = response.data;
      } catch (error) {
        console.error('Error al cargar el producto:', error);
        alert('No se pudo cargar el producto.');
        router.push('/');
      }
    };

    const volver = () => {
      router.push('/');
    };

    onMounted(cargarProducto);

    return {
      producto,
      volver
    };
  }
};
</script>

