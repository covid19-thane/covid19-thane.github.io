const nm = "https://api.npoint.io/ee4e3b00902ddc3b8948";
const lastUpdatednm = document.querySelector(".last__updated");

fetch(nm)
  .then((response) => response.json())
  .then((nm) => {
    const myData = Object.values(nm.data.navimumbai);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmednm .number").textContent =
      myData[0];
    document.querySelector(".stat__item.confirmednm .new").textContent = `${
      myData[0] - myData[2]}`;
    document.querySelector(".stat__item.activenm .number").textContent = `${
      myData[0] - myData[4] - myData[1]
    }`;
    document.querySelector(".stat__item.recoverednm .number").textContent =
      myData[4];
    document.querySelector(".stat__item.recoverednm .new").textContent =`${
      myData[4] - myData[5]}`;
    document.querySelector(".stat__item.deceasednm .number").textContent =
      myData[1];
    document.querySelector(".stat__item.deceasednm .new").textContent =`${
      myData[1] - myData[3]}`;
    document.querySelector(".nmact").textContent = `${
      (myData[0] - myData[4] - myData[1]) / myData[0] * 100}`;  
    document.querySelector(".nmrec").textContent =`${
      myData[4] / myData[0] * 100 }`;  
    document.querySelector(".nmdec").textContent =`${
      myData[1] / myData[0] * 100 }`;
    document.querySelector(".stat__item.tests_nm .number").textContent =
      myData[6];
    document.querySelector(".stat__item.tests_nm .new").textContent =`${
      myData[6] - myData[7]}`; 
  });
