<template>
  <form class="container border mt-4" @submit.prevent="handleSubmit">
    <!-- Email input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="email">Email address</label>

      <input
        id="email"
        class="form-control"
        required="true"
        v-model="formdata.email"
      />
      <p class="msgErr">{{ setEmailError }}</p>
    </div>

    <!-- Password input -->
    <div class="form-outline mb-4">
      <label class="form-label" for="password">Password</label>

      <input
        type="password"
        id="password"
        class="form-control"
        required="true"
        v-model="formdata.password"
      />
      <p class="msgErr">{{ setPasswordError }}</p>
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  emits: ["getFormDataFromLogin"],
  data() {
    return {
      formdata: {
        email: "",
        password: "",
      },
      setEmailError: "",
      setPasswordError: "",
    };
  },
  methods: {
    //To validate Email
    validateEmail() {
      if (this.formdata.email) {
        let emailRegex = /^\S+@\S+$/;
        if (emailRegex.test(this.formdata.email)) {
          this.setEmailError = "";
          return true;
        } else {
          this.setEmailError = "enter valid email";
        }
      } else {
        this.setEmailError = " email is required";
      }
    },
    //To validate Password
    validatePassword() {
      if (this.formdata.password) {
        let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (passwordRegex.test(this.formdata.password)) {
          this.setPasswordError = "";
          return true;
        } else {
          this.setPasswordError = "enter valid password";
        }
      } else {
        this.setPasswordError = " password is required";
      }
    },

    handleSubmit() {
      // validate the data frst and then send it to the parent or backend
      this.validateEmail();
      this.validatePassword();

      if (this.validateEmail() && this.validatePassword()) {
        console.log("formdata is:", this.formdata);
        this.$emit("getFormDataFromLogin", this.formdata);
        (this.formdata = { email: "", password: "" }),
          //after submitt again set to empty input feilds
          alert("form submitted successfully");
      }
    },
  },
};
</script>

<style>
.msgErr {
  color: red;
}
</style>
