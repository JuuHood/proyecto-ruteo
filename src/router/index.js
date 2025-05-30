import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CreateProductView from '../views/CrearProductoView.vue';
import DetailProductView from '../views/DetalleProductoView.vue';
import EditProductView from '../views/EditarProductoView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-Product',
    name: 'CreateProductView',
    component: CreateProductView
  },
  {
    path: '/detail-product',
    name: 'DetailProductView',
    component: DetailProductView,
    props: true
  },
  {
    path: '/edit-product/: id',
    name: 'EditProductView',
    component: EditProductView,
    props: true
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;