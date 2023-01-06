let form = document.getElementById("dataForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let userName = document.getElementById("userName").value;
  let userLastName = document.getElementById("userLastName").value;
  let dataInfo = {
    userName: userName,
    userLastName: userLastName,
  };
  console.log(dataInfo);
  let dataJson = JSON.stringify(dataInfo);
  // mandar data al backend
  fetch("http://localhost:3000/add", {
    method: "Post",
    body: dataJson,
  });

  console.log(dataJson);
});
