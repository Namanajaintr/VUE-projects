<template>
  <div>
    <h1>Welcome to Dusshera offers</h1>

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
          productDescription:
            "Embellish your home or office space with this extremely elegant looking piece of home décor, a cycle shaped flower vase. A perfect gift for all occasions, be it your mother, sister, in-laws, boss or your friends, this cycle vase wherever placed, is sure to beautify the surroundings. The Package Contains: 1 Cycle vase (assorted colors) + Peonies Bunches | Cycle Size with Flower - 21 cm X 19 cm",
          productImageURL:
            "https://m.media-amazon.com/images/I/91jKRVXmaML._SX522_.jpg",
          productName:
            "TiedRibbons® Cycle Shape Flower Vase with Peonies Bunches",
          productPrice: 999,
          id: 1,
        },
        {
          productDescription:
            "Material : Fine Premium Jute with HD Digital Print ,Size : 16 INCH x 16 INCH (40cm x 40cm) ,Good quality Zip closure backed with Premium Upholstery Fabric",
          productImageURL:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/JUPITER22/HomeMainPage/Unrec/Explore-more-categories_07.jpg",
          productName: "Cushion covers",
          productPrice: 99,
          id: 2,
        },
        {
          productDescription:
            "The Paradise Set of 2 Tea Light Candle Holder Mosaic Glass Votives Turkish Design Diwali Gift Candle Tealight Votive Holder Handmade Decorative Items for Home (Multicolor 1)",
          productImageURL:
            "https://m.media-amazon.com/images/I/411SDvuBa+L._SY300_SX300_.jpg",
          productName: "Tea Light Candle Holder",
          productPrice: 349,
          id: 3,
        },
        {
          productDescription:
            " Size	1-Pack,Material	Cotton ,Colour	Green,	Double bedsheet with pillow cover + Double bedsheet with pillow cover,Brand	Amazon Brand - Solimo",
          productImageURL:
            "https://m.media-amazon.com/images/I/91cZ1DjG1gL._SX522_.jpg",
          productName: "Cotton Double Bedsheet with 2 Pillow Covers",
          productPrice: 599,
          id: 4,
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

<style scoped>
h1 {
  background-color: rgb(49, 228, 168);
  color: brown;
  box-shadow: gold;
  border-radius: 50px;
  margin-top: 0%;
}
</style>
