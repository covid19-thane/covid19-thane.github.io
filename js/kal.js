const kal = "https://api.npoint.io/ee4e3b00902ddc3b8948";
const lastUpdatedkal = document.querySelector(".last__updated");

fetch(kal)
  .then((response) => response.json())
  .then((kal) => {
    const myData = Object.values(kal.data.kalyan);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedkal .number").textContent =
      myData[0];
    document.querySelector(".stat__item.confirmedkal .new").textContent =
      myData[2];
    document.querySelector(".stat__item.activekal .number").textContent = `${
      myData[0] - myData[4] - myData[1]
    }`;
    document.querySelector(".stat__item.recoveredkal .number").textContent =
      myData[4];
    document.querySelector(".stat__item.recoveredkal .new").textContent =
      myData[5];	  
    document.querySelector(".stat__item.deceasedkal .number").textContent =
      myData[1];
    document.querySelector(".stat__item.deceasedkal .new").textContent =
      myData[3];
  });
