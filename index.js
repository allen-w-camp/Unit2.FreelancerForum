function calcAverage(prices) {
    let sum = 0;
    let i = 0;
    while (i < prices.length) {
        sum += prices.length[i]; i++;
    }
    return sum / prices.length;
}
const average = calcAverage;
console.log("The Average Starting Price is ", average)

const names = ["Alice", "Bob", "Carol", "Dr. Slice", "Dr. Pressure", "Prof. Possibility", "Prof. Prism", "Dr. Impulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"];
const occupations = ["Writer", "Teacher", "Programmer", "Gardener", "Driver"];
const prices = ["30", "50", "70", "25", "51", "43", "81", "76", "47", "72"];
const maxFreelancers = 11;
const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: "30",
    },
    {
        name: "Bob",
        occupation: "Teacher",
        price: "50",
    },
];


function addFreelancer () {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];

    names.push({name, occupation, price});
}

function render() {

  const freelancerList = document.querySelector("#freelancers");
  const freelancerElements = freelancers.map((freelancer) => {
    const freelancerElement = document.createElement("li");
    freelancerElement.classList.add(freelancer.name, freelancer.occupation, freelancer.price);
    return averageElement;
  });
  freelancerList.replaceChildren(...freelancerElements);
}
const addFreelancerIntervalId = setInterval(() => {
    addFreelancer();
    render();
    if(freelancers.length >=maxFreelancers){
      clearInterval(addFreelancerIntervalId);
    }
  }, 1000);

  render();