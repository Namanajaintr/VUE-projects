let fetchfunc = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      let details = "<h1>";
      data.map((value) => {
        details += `<li>${value.title}</li>`;
      });
      details += "</h1>";
      console.log(details);
      const divElement = document.getElementById("users");
      users.innerHTML = details;
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchfunc();
