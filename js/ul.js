const ul = "https://api.npoint.io/493ec6628785a08d7820";
const lastUpdatedul = document.querySelector(".last__updated");

fetch(ul)
  .then((response) => response.json())
  .then((ul) => {
    const myData = Object.values(ul.data.ulhasnagar);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedul .number").textContent =
      myData[0];
    document.querySelector(".stat__item.activeul .number").textContent = `${
      myData[0] - myData[1] - myData[2]
    }`;
    document.querySelector(".stat__item.recoveredul .number").textContent =
      myData[2];
    document.querySelector(".stat__item.deceasedul .number").textContent =
      myData[1];
  });