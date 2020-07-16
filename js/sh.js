const sh = "https://api.npoint.io/ee4e3b00902ddc3b8948";
const lastUpdatedsh = document.querySelector(".last__updated");

fetch(sh)
  .then((response) => response.json())
  .then((sh) => {
    const myData = Object.values(sh.data.shahapur);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedsh .number").textContent =
      myData[0];
    document.querySelector(".stat__item.confirmedsh .new").textContent = `${
      myData[0] - myData[2]}`;
    document.querySelector(".stat__item.activesh .number").textContent = `${
      myData[0] - myData[4] - myData[1]
    }`;
    document.querySelector(".stat__item.recoveredsh .number").textContent =
      myData[4];
    document.querySelector(".stat__item.recoveredsh .new").textContent =`${
      myData[4] - myData[5]}`;
    document.querySelector(".stat__item.deceasedsh .number").textContent =
      myData[1];
    document.querySelector(".stat__item.deceasedsh .new").textContent =`${
      myData[1] - myData[3]}`;
    document.querySelector(".shact").textContent = `${
      (myData[0] - myData[4] - myData[1]) / myData[0] * 100}`;  
    document.querySelector(".shrec").textContent =`${
      myData[4] / myData[0] * 100 }`;  
    document.querySelector(".shdec").textContent =`${
      myData[1] / myData[0] * 100 }`;
    document.querySelector(".stat__item.tests_sh .number").textContent =
      myData[6];
    document.querySelector(".stat__item.tests_sh .new").textContent =`${
      myData[6] - myData[7]}`; 
  });
