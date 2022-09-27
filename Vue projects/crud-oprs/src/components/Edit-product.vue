<template>
  <b-modal
    v-model="modalShow"
    @close="handleClose"
    @cancel="handleClose"
    @ok="handleSubmit"
    title="Edit Product"
  >
    <b-form>
      <b-form-input
        placeholder="Enter product name"
        type="text"
        v-model="singleProduct.productName"
        class="mb-2"
      ></b-form-input>

      <b-form-input
        placeholder="Enter product price"
        type="number"
        v-model="singleProduct.productPrice"
        class="mb-2"
      ></b-form-input>

      <b-form-input
        placeholder="Enter product Description"
        type="text"
        v-model="singleProduct.productDescription"
        class="mb-2"
      ></b-form-input>

      <b-form-input
        placeholder="Enter product Image"
        type="text"
        v-model="singleProduct.productImageURL"
      ></b-form-input>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  props: ["selectedProduct", "showHideEditModal"],
  emits: ["closeEditModal"],
  data() {
    return {
      singleProduct: {
        productName: "",
        productPrice: "",
        productDescription: "",
        productImageURL: "",
      },
      modalShow: false,
    };
  },
  methods: {
    handleSubmit() {
      console.log("selected data", this.selectedProduct);
      // this.singleProduct = this.$props.selectedProduct;
      // this.singleProduct.splice(
      //   this.$props.selectedProduct.id,
      //   0,
      //   this.$props.selectedProduct
      // );
      alert("product updated successfully");
      this.$emit("closeEditModal");
    },
    handleClose() {
      this.$emit("closeEditModal");
    },
  },
  // to check if the props is changed or not from parent
  watch: {
    showHideEditModal() {
      this.modalShow = this.$props.showHideEditModal;
    },
    selectedProduct() {
      this.singleProduct = this.$props.selectedProduct;
    },
  },
};
</script>

<style></style>
