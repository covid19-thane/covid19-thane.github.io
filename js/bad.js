const bad = "https://api.npoint.io/bc4aafd7496af962150e";
const lastUpdatedbad = document.querySelector(".last__updated");

fetch(bad)
  .then((response) => response.json())
  .then((bad) => {
    const myData = Object.values(bad.data.badlapur);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedbad .number").textContent =
      myData[0];
    document.querySelector(".stat__item.activebad .number").textContent = `${
      myData[0] - myData[1] - myData[2]
    }`;
    document.querySelector(".stat__item.recoveredbad .number").textContent =
      myData[2];
    document.querySelector(".stat__item.deceasedbad .number").textContent =
      myData[1];
  });
