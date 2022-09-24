<template>
  <nav-bar />
  <div class="flexbox">
    <div>
      <receipe-book
        v-for="receipe in receipes"
        :key="receipe.id"
        :name="receipe.name"
        :img="receipe.img"
        :desc="receipe.desc"
        :id="receipe.id"
        @receipeStatus="receipeStatus"
      />
    </div>
    <div>
      <receipe-details
        v-for="receipe in receipes"
        :key="receipe.id"
        :name="receipe.name"
        :img="receipe.img"
        :desc="receipe.desc"
        :id="receipe.id"
        :thatReceipe="receipe.thatReceipe"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ReceipeBook from "./components/ReceipeBook.vue";
import ReceipeDetails from "./components/ReceipeDetails.vue";
export default {
  name: "App",
  components: { ReceipeBook, NavBar, ReceipeDetails },
  data() {
    return {
      receipes: [
        {
          id: 1,
          name: "Gulab Jamun",
          desc: "firstly, in a large bowl take ¾ cup milk powder, ½ cup maida and ½ tsp baking powder mix well, homemade gulab jamun mix is ready.now add 2 tbsp ghee and mix well making the flour moist.further, add milk as required start to combine.combine well forming a soft dough. do not knead the dough.cover and rest for 10 minutes.meanwhile, prepare the sugar syrup by taking 2 cup sugar, 2 cup water, 2 cardamom and ¼ tsp saffron.mix well and boil for 5 minutes or until the sugar syrup turns sticky. do not attain any string consistency.turn off the flame and add 1 tsp lemon juice and 1 tsp rose water. lemon juice is added to prevent sugar syrup from crystallizing.cover and keep the sugar syrup aside.after 10 minutes or resting the dough, start to prepare small ball sized jamuns.make sure there are no cracks in the jamun. if there are cracks then there are high chances for jamuns to break while frying.deep fry in medium hot oil or ghee. frying in ghee gives good flavour to jamuns.stir continuously and fry on low flame.fry until the jamuns turn golden brown.drain off and transfer the jamun into a hot sugar syrup.cover and rest for 2 hours or until jamuns absorb the sugar syrup and doubles in size.finally, enjoy gulab jamun with ice cream or as it is.",
          img: "https://media.istockphoto.com/photos/gulab-jamun11-picture-id521803129?b=1&k=20&m=521803129&s=170667a&w=0&h=tCqSAFuFRElC3jsUJP_416zWMCoi6dV_i985t1YWF5g=",
          thatReceipe: true,
        },
        {
          id: 2,
          name: "Panner Butter Masala",
          desc: "firstly, in a large kadai heat 2 tbsp oil, 2 tbsp butter, 1 bay leaf and 1 chilli. saute until the spices turn aromatic.now add 1 onion and saute until onions turn and golden brown.keeping the flame on low, add ½ tsp turmeric, 1 tsp chilli powder, ¾ tsp coriander powder, ¼ tsp cumin powder, ½ garam masala and 1 tsp salt.saute until the spices turn aromatic. make sure not to burn the spices.add in prepared onion tomato paste and mix well.cook until the oil separates from the masala paste.now add 1 cup water and mix well adjusting the consistency.further, add in 2 tbsp cream and mix well.also, add 16 cubes of paneer and mix gently.simmer for 5 minutes, or until the paneer absorbs the flavour.add 1 tsp kasuri methi and 2 tbsp coriander. mix well.finally, enjoy paneer butter masala with roti or naan.",
          img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFubmVyYnV0dGVybWFzYWxhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          thatReceipe: false,
        },
        {
          id: 3,
          name: "Noodles",
          desc: "firstly, in a large vessel take 6 cup water, 1 tsp salt and 1 tsp oil.once the water comes to a boil place a pack of hakka noodles (125 gm)boil the noodles for 3 minutes or till it turns al dente. refer package instructions to know the exact cooking time.drain off the water from noodles and pour 1 cup of cold water to prevent from further cooking.drizzle 1 tsp oil and mix gently, to avoid noodles from sticking to each other. keep aside.now in a large kadai heat 2 tbsp oil and saute 2 clove garlic, 1 inch ginger and 1 chilli.saute ½ onion, 2 tbsp spring onion on high flame.further add ½ carrot, ¼ green capsicum, 5 snow pea, 5 beans, chopped, ¼ red capsicum and 5 florets broccoli.stir fry on high flame for 2 minutes or until veggies are cooked yet retain their crunch.also add 3 tbsp cabbage and stir fry.further add 2 tbsp tomato sauce, 1 tbsp soy sauce, 1 tbsp vinegar, 1 tbsp chilli sauce, ¼ tsp pepper powder and ½ tsp salt.stir fry until sauces are well combined.add in boiled noodles and mix gently.toss and mix until noodles are cooked completely.finally, garnish with spring onion and enjoy veg noodles.",
          img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm9vZGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          thatReceipe: false,
        },
        {
          id: 4,
          name: "Manchurian",
          desc: "firstly, take 2 cup finely chopped cabbage and 1 grated carrot. ½ tsp chilli powder, ½ tsp ginger garlic paste, ½ tsp salt, ½ cup maida and 2 tbsp corn flour. combine and prepare a soft dough. deep fry cabbage balls in hot oil or bake at 200 degree celsius for 20 minutes or till cabbage balls turn crisp and gets cooked well completely from inside. now in a large kadai heat 2 tbsp oil and saute 2 clove garlic. also saute 2 tbsp spring onions, ¼ onion and 1 green chilli. additionally, add ½ capsicum and saute well. further add 1 tsp chilli sauce, 2 tbsp soy sauce, 2 tbsp vinegar, 2 tbsp tomato sauce, ¼ tsp salt and ¼ tsp pepper. saute on high flame till the sauce thickens. now add fried cabbage balls and mix gently. finally, cabbage manchurian is ready to serve by garnishing with chopped spring onions.",
          img: "https://media.istockphoto.com/photos/paneer-manchurian-or-paneer-65-picture-id1425250230?b=1&k=20&m=1425250230&s=170667a&w=0&h=miY2H5Ni3m4wqwFbvaFFreyF4a7lXQP_Ag-2_ZiEVYg=",
          thatReceipe: false,
        },
      ],
    };
  },
  methods: {
    receipeStatus(receipeID) {
      console.log("receipeID from child to parent", receipeID);
      let identifiedReceipe = this.receipes.find(
        (receipe) => receipe.id === receipeID
      );
      console.log("identifiedReceipe", identifiedReceipe);
      identifiedReceipe.thatReceipe = !identifiedReceipe.thatReceipe;
    },
  },
};
</script>

<style>
.flexbox {
  display: flex;
}
</style>
