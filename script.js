var card = new Vue({
  el: "#card",
  data: {
    title: "Hi Dinosaur!!!",
    content: "<strong>Dinosaur</strong> was once ruling the earth.",
    items: [{ text: "Velocraptor" }, { text: "Figer" }, { text: "Stegosaurus" }]
  },
  methods: {
    addItem: function() {
      var input = document.getElementById("itemForm");
      if (input.value !== "") {
        this.items.push({
          text: input.value
        });
        input.value = "";
      }
    },
    deleteItem: function(index) {
      this.items.splice(index, 1);
    }
  }
});
