// Calculating dots based on total Squat bench deadlift and Bodyweight
const calculateDots = (event) => {
  event.preventDefault();
  const hasilDot = document.getElementById("hasil-dots");

  const bench = Number(document.getElementById("bench").value);
  const squat = Number(document.getElementById("squat").value);
  const deadlift = Number(document.getElementById("deadlift").value);
  const bodyweight = Number(document.getElementById("bw").value);

  // Guard clause – stop early if input is invalid
  if (!bench || !squat || !deadlift || !bodyweight) {
    hasilDot.textContent = "Please fill all fields";
    return;
  }

  const total = bench + squat + deadlift;

  // DOTS coefficients (Men)
  const a = -307.75076;
  const b = 24.0900756;
  const c = -0.1918759221;
  const d = 0.0007391293;
  const e = -0.000001093;

  const denominator =
    a +
    b * bodyweight +
    c * bodyweight ** 2 +
    d * bodyweight ** 3 +
    e * bodyweight ** 4;

  const dots = (total * 500) / denominator;

  // Display result (rounded)
  hasilDot.textContent = dots.toFixed(2);
};