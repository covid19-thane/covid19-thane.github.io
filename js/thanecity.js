const thanec = "https://api.npoint.io/2536b2b232c49e0ea1ee";
const lastUpdatedthane = document.querySelector(".last__updated");

fetch(thanec)
  .then((response) => response.json())
  .then((thanec) => {
    const myData = Object.values(thanec.data.thane);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedthane .number").textContent =
      myData[0];
    document.querySelector(".stat__item.activethane .number").textContent = `${
      myData[0] - myData[1] - myData[2]
    }`;
    document.querySelector(".stat__item.recoveredthane .number").textContent =
      myData[2];
    document.querySelector(".stat__item.deceasedthane .number").textContent =
      myData[1];
  });
