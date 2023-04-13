function makeData(expenses, category) {
  // if !category - all together
  /// else filter by category
  const dummyData = [];
  for (let i = 0; i < 10; i++) {
    dummyData.push(Math.random() * 50);
  }
  return dummyData;
}

// expenditures comes from the data.js file
console.log(expenditures);

// Select location in index.html to load the chart (must be a Canvas element)
const ctx = document.getElementById("myChart");

// Create a new chart
new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: makeData(),
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
