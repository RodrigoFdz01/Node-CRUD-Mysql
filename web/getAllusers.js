let getAll = document.getElementById("allUsers");

getAll.addEventListener("click", function () {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      let names = data;
      //console.log(names);
      names.map(function (e) {
        let lu = document.createElement("ul");
        lu.innerHTML = `<h3>${e.name}-${e.usuario_id}</h3>`;
        let divContainer = document.getElementById("div2");
        divContainer.appendChild(lu);
        //console.log(e);
      });
    });
});
