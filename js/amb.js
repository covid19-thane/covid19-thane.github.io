const amb = "https://api.npoint.io/ee4e3b00902ddc3b8948";
const lastUpdated = document.querySelector(".last__updatedamb");

fetch(amb)
  .then((response) => response.json())
  .then((amb) => {
    const myData = Object.values(amb.data.ambarnath);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedamb .number").textContent =
      myData[0];
    document.querySelector(".stat__item.confirmedamb .new").textContent =
      myData[2];
    document.querySelector(".stat__item.activeamb .number").textContent = `${
      myData[0] - myData[4] - myData[1]
    }`;
    document.querySelector(".stat__item.recoveredamb .number").textContent =
      myData[4];
    document.querySelector(".stat__item.recoveredamb .new").textContent =
      myData[5];	  
    document.querySelector(".stat__item.deceasedamb .number").textContent =
      myData[1];
    document.querySelector(".stat__item.deceasedamb .new").textContent =
      myData[3];
  });
