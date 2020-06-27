const tha = "https://api.covid19india.org/state_district_wise.json";
const lastUpdatedtha = document.querySelector(".last__updated");

fetch(tha)
  .then((response) => response.json())
  .then((tha) => {
    const myData = Object.values(tha.Maharashtra.districtData.Thane);
    console.log(myData); // For Debugging
    document.querySelector(".stat__item.confirmedtha .number").textContent =
      myData[2];
    document.querySelector(".stat__item.activetha .number").textContent = `${
      myData[2] - myData[4] - myData[3]
    document.querySelector(".stat__item.recoveredtha .number").textContent =
      myData[4];
    document.querySelector(".stat__item.deceasedtha .number").textContent =
      myData[3];
  });
