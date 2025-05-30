<template>
  <div class="editProduct">
    <h1>Editar Producto</h1>
    <FormProducto 
      :productoData="producto" 
      :esNuevoProducto="false" 
      @guardar="actualizarProducto" 
    />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import apiService from '../services/apiService';
import FormProducto from '../components/ProductForm.vue';


export default {
  components: {
    ProductForm
  },
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

    const actualizarProducto = async (productoActualizado) => {
      try {
        await apiService.actualizarProducto(route.params.id, productoActualizado);
        alert('Producto actualizado con éxito.');
        router.push('/');
      } catch (error) {
        console.error('Error al actualizar el producto:', error);
        alert('No se pudo actualizar el producto.');
      }
    };

    onMounted(cargarProducto);

    return {
      producto,
      actualizarProducto
    };
  }
};
</script>

