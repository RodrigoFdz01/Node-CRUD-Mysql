let form2 = document.getElementById("dataForm2");

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("dataForm2----------");

  let id = document.getElementById("user_id").value;
  let userName = document.getElementById("userName2").value;
  let userLastName = document.getElementById("userLastName2").value;
  let dataInfo2 = {
    id: id,
    userName: userName,
    userLastName: userLastName,
  };
  console.log(dataInfo2);
  let dataJson2 = JSON.stringify(dataInfo2);
  // mandar data al backend
  fetch("http://localhost:3000/update/:usuarioId", {
    method: "Put",
    body: dataJson2,
  });

  console.log(dataJson2);
});
