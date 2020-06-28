const ul = "https://api.npoint.io/ee4e3b00902ddc3b8948";
const lastUpdatedul = document.querySelector(".last__updated");

fetch(ul)
  .then((response) => response.json())
  .then((ul) => {
    const myData = Object.values(ul.data.ulhasnagar);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedul .number").textContent =
      myData[0];
    document.querySelector(".stat__item.confirmedul .new").textContent = `${
      myData[0] - myData[2]}`;
    document.querySelector(".stat__item.activeul .number").textContent = `${
      myData[0] - myData[4] - myData[1]
    }`;
    document.querySelector(".stat__item.recoveredul .number").textContent =
      myData[4];
    document.querySelector(".stat__item.recoveredul .new").textContent =`${
      myData[4] - myData[5]}`;
    document.querySelector(".stat__item.deceasedul .number").textContent =
      myData[1];
    document.querySelector(".stat__item.deceasedul .new").textContent =`${
      myData[1] - myData[3]}`;
    document.querySelector(".ulact").textContent = `${
      (myData[0] - myData[4] - myData[1]) / myData[0] * 100}`;  
    document.querySelector(".ulrec").textContent =`${
      myData[4] / myData[0] * 100 }`;  
    document.querySelector(".uldec").textContent =`${
      myData[1] / myData[0] * 100 }`; 
  });
