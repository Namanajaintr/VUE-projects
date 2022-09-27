<template>
  <div>
    <b-table-simple responsive>
      <b-thead>
        <b-tr>
          <b-th>ID </b-th>
          <b-th>Product Name </b-th>
          <b-th>Product Price</b-th>
          <b-th>Product Description </b-th>
          <b-th>Product Image </b-th>
          <b-th>
            <b-button variant="warning" @click="openAddModal">ADD❤️</b-button>
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="product in products" :key="product.id">
          <b-td>{{ product.id }}</b-td>
          <b-td>{{ product.productName }}</b-td>
          <b-td>{{ product.productPrice }}</b-td>
          <b-td>{{ product.productDescription }}</b-td>
          <b-td>
            <img :src="product.productImageURL" width="220px" height="160px" />
          </b-td>
          <b-td>
            <b-button
              variant="primary"
              class="mx-2"
              @click="getSelectedProduct(product)"
              >EDIT</b-button
            >
            <b-button variant="danger" @click="removeProd(product.id)"
              >DELETE</b-button
            ></b-td
          >
        </b-tr>
      </b-tbody>
    </b-table-simple>

    <!-- add product component -->
    <add-product
      :products="products"
      :showHideAddModal="showHideAddModal"
      @closeAddModal="closeAddModal"
    />

    <!-- edit product component -->
    <edit-product
      :selectedProduct="selectedProduct"
      :showHideEditModal="showHideEditModal"
      @closeEditModal="closeEditModal"
    />
  </div>
</template>

<script>
import AddProduct from "./Add-product.vue";
import EditProduct from "./Edit-product.vue";
export default {
  components: { AddProduct, EditProduct },
  data() {
    return {
      products: [
        {
          productDescription: "yellow car",
          productImageURL:
            "https://imgd.aeplcdn.com/1056x594/cw/ec/21724/Audi-R8-Right-Front-Three-Quarter-66713.jpg?v=201711021421&q=75&wm=1",
          productName: "Audi R8",
          productPrice: 30000000,
          id: 1,
        },
        {
          productDescription: "yellow car",
          productImageURL:
            "https://imgd.aeplcdn.com/1056x594/cw/ec/21724/Audi-R8-Right-Front-Three-Quarter-66713.jpg?v=201711021421&q=75&wm=1",
          productName: "Audi R8",
          productPrice: 30000000,
          id: 2,
        },
      ],
      showHideAddModal: false,
      showHideEditModal: false,
      selectedProduct: {},
    };
  },
  methods: {
    // open add modal
    openAddModal() {
      this.showHideAddModal = true;
    },
    //close add modal
    closeAddModal() {
      this.showHideAddModal = false;
    },

    // open edit modal
    openEditModal() {
      this.showHideEditModal = true;
    },
    //close edit modal
    closeEditModal() {
      this.showHideEditModal = false;
    },

    //getting the selected product on click of edit
    getSelectedProduct(prod) {
      console.log("selected prod", prod);
      this.selectedProduct = prod;
      this.openEditModal();
    },

    //removing the product on click of delete
    removeProd(ID) {
      let tempProducts = this.products;
      let productid = ID;

      console.log("selected product id is :", productid);
      console.log("tempProducts", tempProducts);
      // this.products.splice(ID, 1);
      tempProducts = tempProducts.filter((item) => {
        return item.id != productid;
      });
      console.log("tempProducts", tempProducts);
      this.products = tempProducts;
    },
  },
};
</script>

<style></style>
