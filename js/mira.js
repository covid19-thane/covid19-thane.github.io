const mn = "https://api.npoint.io/ee4e3b00902ddc3b8948";
const lastUpdatedmn = document.querySelector(".last__updated");

fetch(mn)
  .then((response) => response.json())
  .then((mn) => {
    const myData = Object.values(mn.data.mira);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedmn .number").textContent =
      myData[0];
    document.querySelector(".stat__item.confirmedmn .new").textContent = `${
      myData[0] - myData[2]}`;
    document.querySelector(".stat__item.activemn .number").textContent = `${
      myData[0] - myData[4] - myData[1]
    }`;
    document.querySelector(".stat__item.recoveredmn .number").textContent =
      myData[4];
    document.querySelector(".stat__item.recoveredmn .new").textContent =`${
      myData[4] - myData[5]}`;
    document.querySelector(".stat__item.deceasedmn .number").textContent =
      myData[1];
    document.querySelector(".stat__item.deceasedmn .new").textContent =`${
      myData[1] - myData[3]}`;
  });
