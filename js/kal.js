const kal = "https://api.npoint.io/2536b2b232c49e0ea1ee";
const lastUpdatedkal = document.querySelector(".last__updated");

fetch(kal)
  .then((response) => response.json())
  .then((kal) => {
    const myData = Object.values(kal.data.kalyan);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedkal .number").textContent =
      myData[0];
    document.querySelector(".stat__item.activekal .number").textContent = `${
      myData[0] - myData[1] - myData[2]
    }`;
    document.querySelector(".stat__item.recoveredkal .number").textContent =
      myData[2];
    document.querySelector(".stat__item.deceasedkal .number").textContent =
      myData[1];
  });
