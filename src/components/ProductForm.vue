<template>
  <form @submit.prevent="guardarProducto" class="form-producto">
    <div>
      <label for="title">Nombre:</label>
      <input type="text" id="title" v-model="producto.title" required>
    </div>
    <div>
      <label for="price">Precio:</label>
      <input type="number" id="price" v-model.number="producto.price" required min="0" step="0.01">
    </div>
    <div>
      <label for="description">Descripción:</label>
      <textarea id="description" v-model="producto.description" required></textarea>
    </div>
    <div>
      <label for="category">Categoría:</label>
      <input type="text" id="category" v-model="producto.category" required>
    </div>
    <div>
      <label for="image">URL de la Imagen:</label>
      <input type="url" id="image" v-model="producto.image">
    </div>
    <button type="submit">{{ esNuevoProducto ? 'Crear Producto' : 'Actualizar Producto' }}</button>
    <button type="button" @click="cancelar">Cancelar</button>
  </form>
</template>

<script>
export default {
  props: {
    productoData: {
      type: Object,
      default: () => ({ title: '', price: null, description: '', category: '', image: '' })
    },
    esNuevoProducto: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      producto: { ...this.productoData }
    };
  },
  watch: {
    productoData: {
      handler(nuevoValor) {
        this.producto = { ...nuevoValor };
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    guardarProducto() {
      this.$emit('guardar', this.producto);
    },
    cancelar() {
      this.$emit('cancelar');
    }
  }
};
</script>

