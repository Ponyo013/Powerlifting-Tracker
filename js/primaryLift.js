// Primary Bench
const weeks = document.getElementById("table-primary-bench").rows[0].cells
  .length;

const primaryTopSet = document.getElementById("top-primary-bench");
const primaryBackOffSet = document.getElementById("backoff-primary-bench");

const bench = document.getElementById("bench");

const primaryBenchHandler = () => {
  const baseWeight = Number(bench.value);

  let topSet = baseWeight;
  let topSetHTML = "<tr>";

  for (let i = 0; i < weeks; i++) {
    if (i === 4) topSet += 5;
    topSetHTML += `<td>${topSet}</td>`;
  }

  topSetHTML += "</tr>";
  primaryTopSet.innerHTML = topSetHTML;
  
  let backoffHTML = "";

  for (let i = 0; i < Math.min(weeks, 3); i++) {
    const backoffWeight = baseWeight - (i === 0 ? 10 : 15);

    backoffHTML += `
      <tr>
        <td colspan="5">${backoffWeight}</td>
      </tr>
    `;
  }

  primaryBackOffSet.innerHTML = backoffHTML;
};

bench.addEventListener("input", primaryBenchHandler);