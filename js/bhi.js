const bhi = "https://api.npoint.io/ee4e3b00902ddc3b8948";
const lastUpdatedbad = document.querySelector(".last__updated");

fetch(bhi)
  .then((response) => response.json())
  .then((bhi) => {
    const myData = Object.values(bhi.data.bhiwandi);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedbhi .number").textContent =
      myData[0];
    document.querySelector(".stat__item.confirmedbhi .new").textContent = `${
      myData[0] - myData[2]}`;
    document.querySelector(".stat__item.activebhi .number").textContent = `${
      myData[0] - myData[4] - myData[1]
    }`;
    document.querySelector(".stat__item.recoveredbhi .number").textContent =
      myData[4];
    document.querySelector(".stat__item.recoveredbhi .new").textContent =`${
      myData[4] - myData[5]}`;
    document.querySelector(".stat__item.deceasedbhi .number").textContent =
      myData[1];
    document.querySelector(".stat__item.deceasedbhi .new").textContent =`${
      myData[1] - myData[3]}`;
  });
