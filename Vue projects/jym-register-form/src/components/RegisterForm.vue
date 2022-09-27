<template>
  <h1>CUTE FITNESS CENTER</h1>
  <Form
    @submit="handlesubmit"
    class="container-sm border border-dark mb-5 mt-5"
  >
    <div>
      <label for="name">Name</label>
      <Field
        type="text"
        placeholder="Enter name"
        id="name"
        name="name"
        class="mt-2"
        v-model="name"
        :rules="validateName"
      />
      <p><ErrorMessage name="name" class="errmsg" /></p>
      <br />
    </div>

    <div>
      <label for="age">Age</label>
      <Field
        type="number"
        placeholder="Enter age"
        id="age"
        name="age"
        v-model="age"
        :rules="validateAge"
      />
      <p><ErrorMessage name="age" class="errmsg" /></p>
      <br />
    </div>

    <div>
      <label for="packageDetails">Which Package would you like to ?</label>
      <select id="packageDetails" v-model="packageDetails">
        <option value="MuscleBuild">Muscle Build</option>
        <option value="BodyBuild">Body Build</option>
        <option value="MuscleBuild">Muscle Build</option>
        <option value="Zumba">Zumba</option>
      </select>
      <p class="errmsg" v-if="!packageDetails">Error! Choose something!</p>
    </div>

    <div>
      <label for="packageDuration">Which Package would you like to ?</label>
      <select id="packageDuration" v-model="packageDuration">
        <option value="3months">3 Months</option>
        <option value="6months">6 Months</option>
        <option value="1year">1 Year</option>
        <option value="2year">2 Years</option>
      </select>
      <p class="errmsg" v-if="!packageDuration">Error! Choose something!</p>
    </div>

    <div>
      <h3>How did you hear about us !!!</h3>
      <Field
        type="checkbox"
        id="reference"
        name="reference"
        value="friendReference"
        v-model="reference"
        :rules="validateRef"
      />
      <label for="reference"> Friend Reference</label><br />

      <Field
        type="checkbox"
        id="reference"
        name="reference"
        value="socialMedia"
        v-model="reference"
        :rules="validateRef"
      />
      <label for="reference"> Social Media</label><br />

      <Field
        type="checkbox"
        id="reference"
        name="reference"
        value="newsAdverstisement"
        v-model="reference"
        :rules="validateRef"
      />
      <label for="reference"> News Adverstisement</label><br />
      <p>
        <ErrorMessage name="reference" class="errmsg" />
      </p>
    </div>

    <div>
      <h3>Select rhe duration Package !!!</h3>
      <Field
        type="radio"
        id="underWeight"
        name="weight"
        value="underWeight"
        v-model="category"
        :rules="validateWeight"
      />
      <label for="underWeight">Under Weight</label><br />
      <Field
        type="radio"
        id="overWeight"
        name="weight"
        value="overWeight"
        v-model="category"
        :rules="validateWeight"
      />
      <label for="overWeight">Over Weight</label><br />
      <Field
        type="radio"
        id="normal"
        name="weight"
        value="normal"
        v-model="category"
        :rules="validateWeight"
      />
      <label for="normal">Normal</label>
      <p>
        <ErrorMessage name="weight" class="errmsg" />
      </p>
    </div>

    <div>
      <Field
        type="checkbox"
        id="agreeterms"
        name="agree"
        value="agreeterms"
        v-model="confirm"
        :rules="validateAgree"
      />
      <label for="agree">Agree terms and conditions</label>
      <p>
        <ErrorMessage name="agree" class="errmsg" />
      </p>
    </div>

    <div>
      <input type="submit" value="Submit" />
    </div>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      name: "",
      age: "",
      packageDetails: "",
      packageDuration: "",
      reference: "",
      category: "",
      confirm: "",
    };
  },
  methods: {
    handlesubmit() {
      //console.log("submit value", values);
      alert("Form successfully submitted");
    },
    validateName(value) {
      // if the field is empty
      if (!value) {
        return "name field is required";
      }
      // if the field is not a valid email
      const nameregex = /[a-zA-Z]{2,}/;
      if (!nameregex.test(value)) {
        return "This field must be a valid name";
      }
      // All is good
      return true;
    },

    //validate age
    validateAge(value) {
      if (value) {
        let ageRegex = /^\S[0-9]{0,3}$/;
        if (ageRegex.test(value)) {
          return true;
        } else {
          return "*enter valid age";
        }
      } else {
        return "*age required";
      }
    },

    //validate reference
    validateRef(value) {
      if (value && value.length) {
        return true;
      }
      return "You must choose a reference";
    },

    //validate weight
    validateWeight(value) {
      if (value) {
        return true;
      }
      return "You must choose a body weight";
    },

    //validate agree
    validateAgree(value) {
      if (value) {
        return true;
      }
      return "You must agree terms and conditions";
    },
  },
};
</script>

<style scoped>
h1 {
  background-color: aquamarine;
  color: black;
}
.errmsg {
  color: red;
}
</style>
