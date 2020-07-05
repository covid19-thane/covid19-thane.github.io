const mur = "https://api.npoint.io/ee4e3b00902ddc3b8948";
const lastUpdatedmur = document.querySelector(".last__updated");

fetch(mur)
  .then((response) => response.json())
  .then((mur) => {
    const myData = Object.values(mur.data.murbad);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedmur .number").textContent =
      myData[0];
    document.querySelector(".stat__item.confirmedmur .new").textContent = `${
      myData[0] - myData[2]}`;
    document.querySelector(".stat__item.activemur .number").textContent = `${
      myData[0] - myData[4] - myData[1]
    }`;
    document.querySelector(".stat__item.recoveredmur .number").textContent =
      myData[4];
    document.querySelector(".stat__item.recoveredmur .new").textContent =`${
      myData[4] - myData[5]}`;
    document.querySelector(".stat__item.deceasedmur .number").textContent =
      myData[1];
    document.querySelector(".stat__item.deceasedmur .new").textContent =`${
      myData[1] - myData[3]}`;
    document.querySelector(".muract").textContent = `${
      (myData[0] - myData[4] - myData[1]) / myData[0] * 100}`;  
    document.querySelector(".murrec").textContent =`${
      myData[4] / myData[0] * 100 }`;  
    document.querySelector(".murdec").textContent =`${
      myData[1] / myData[0] * 100 }`; 
  });
