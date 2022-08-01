let form = document.getElementById("dataForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let userName = document.getElementById("userName").value;
  let userLastName = document.getElementById("userLastName").value;
  let dataInfo = {
    userName: userName,
    userLastName: userLastName,
  };
  let dataJson = JSON.stringify(dataInfo);
  // mandar data al backend
  fetch("http://localhost:3000/adduser", {
    method: "Post",
    body: dataJson,
  });

  console.log(dataJson);
});
