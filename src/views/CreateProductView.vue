<template>
  <div class="createProduct">
    <h1>Crear Producto</h1>
    <FormProducto 
      :esNuevoProducto="true" 
      @guardar="createProduct" 
      @cancelar="volver" 
    />
  </div>
</template>

<script>
import ProductForm from '../components/ProductForm.vue';
import apiService from '../services/postService';
import { useRouter } from 'vue-router';

export default {
  components: {
    FormProducto
  },
  setup() {
    const router = useRouter();

    const createProduct = async (nuevoProducto) => {
      try {
        await apiService.createProduct(nuevoProducto);
        alert('Producto creado con éxito');
        router.push('/');
      } catch (err) {
        console.error('Error al crear el producto:', err);
        alert('No se pudo crear el producto.');
      }
    };

    const volver = () => {
      router.push('/');
    };

    return {
      createProduct,
      volver
    };
  }
};
</script>

