const amb = "https://api.npoint.io/2536b2b232c49e0ea1ee";
const lastUpdated = document.querySelector(".last__updatedamb");

fetch(amb)
  .then((response) => response.json())
  .then((amb) => {
    const myData = Object.values(amb.data.ambarnath);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedamb .number").textContent =
      myData[0];
    document.querySelector(".stat__item.activeamb .number").textContent = `${
      myData[0] - myData[1] - myData[2]
    }`;
    document.querySelector(".stat__item.recoveredamb .number").textContent =
      myData[2];
    document.querySelector(".stat__item.deceasedamb .number").textContent =
      myData[1];
  });
