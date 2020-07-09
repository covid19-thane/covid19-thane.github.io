const thanec = "https://api.npoint.io/ee4e3b00902ddc3b8948";
const lastUpdatedthane = document.querySelector(".last__updated");

fetch(thanec)
  .then((response) => response.json())
  .then((thanec) => {
    const myData = Object.values(thanec.data.thane);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedthane .number").textContent =
      myData[0];
    document.querySelector(".stat__item.confirmedthane .new").textContent = `${
      myData[0] - myData[2]}`;
    document.querySelector(".stat__item.activethane .number").textContent = `${
      myData[0] - myData[4] - myData[1]
    }`;
    document.querySelector(".stat__item.recoveredthane .number").textContent =
      myData[4];
    document.querySelector(".stat__item.recoveredthane .new").textContent =`${
      myData[4] - myData[5]}`;
    document.querySelector(".stat__item.deceasedthane .number").textContent =
      myData[1];
    document.querySelector(".stat__item.deceasedthane .new").textContent =`${
      myData[1] - myData[3]}`;
    document.querySelector(".thaact").textContent = `${
      (myData[0] - myData[4] - myData[1]) / myData[0] * 100}`;  
    document.querySelector(".tharec").textContent =`${
      myData[4] / myData[0] * 100 }`;  
    document.querySelector(".thadec").textContent =`${
      myData[1] / myData[0] * 100 }`;
    document.querySelector(".stat__item.tests_tha .number").textContent =
      myData[6];
    document.querySelector(".stat__item.tests_tha .new").textContent =`${
      myData[6] - myData[7]}`; 
  });
