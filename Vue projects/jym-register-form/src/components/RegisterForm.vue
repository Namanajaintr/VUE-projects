<template>
  <h1>CUTE FITNESS CENTER</h1>
  <form @submit.prevent="handlesubmit">
    <div>
      <label for="name">Name</label>
      <input
        type="text"
        placeholder="Enter name"
        id="name"
        name="name"
        v-model="name"
      /><br />

      <label for="age">Age</label>
      <input
        type="number"
        placeholder="Enter age"
        id="age"
        name="age"
        v-model="age"
      /><br />
    </div>

    <div>
      <label for="packageDetails">Which Package would you like to ?</label>
      <select id="packageDetails" v-model="packageDetails">
        <option value="MuscleBuild">Muscle Build</option>
        <option value="BodyBuild">Body Build</option>
        <option value="MuscleBuild">Muscle Build</option>
        <option value="Zumba">Zumba</option>
      </select>
    </div>

    <div>
      <label for="packageDuration">Which Package would you like to ?</label>
      <select id="packageDuration" v-model="packageDuration">
        <option value="3months">3 Months</option>
        <option value="6months">6 Months</option>
        <option value="1year">1 Year</option>
        <option value="2year">2 Years</option>
      </select>
    </div>

    <div>
      <h3>How did you hear about us !!!</h3>
      <input type="checkbox" id="friend" name="friend" value="friend" />
      <label for="friend"> Friend Reference</label><br />

      <input type="checkbox" id="media" name="media" value="media" />
      <label for="media"> Social Media</label><br />

      <input type="checkbox" id="news" name="news" value="news" />
      <label for="news"> News Adverstisement</label><br /><br />
    </div>

    <div>
      <h3>Select rhe duration Package !!!</h3>
      <input
        type="radio"
        id="underWeight"
        name="underWeight"
        value="underWeight"
      />
      <label for="underWeight">Under Weight</label><br />
      <input
        type="radio"
        id="overWeight"
        name="overWeight"
        value="overWeight"
      />
      <label for="overWeight">Over Weight</label><br />
      <input type="radio" id="normal" name="normal" value="normal" />
      <label for="normal">Normal</label>
    </div>

    <div>
      <input type="checkbox" id="agree" name="agree" value="agree" />
      <label for="agree">Agree terms and conditions</label>
    </div>

    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
</template>

<script>
export default {
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
};
</script>

<style scoped>
h1 {
  background-color: aquamarine;
  color: black;
}
</style>
