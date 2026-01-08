import { schedule } from "./data.js";

// Schedule
const days = Object.keys(schedule);
const maxRows = Math.max(...days.map((day) => schedule[day].length));

const tableBody = document.getElementById("table-body");
let tableData = "";

for (let row = 0; row < maxRows; row++) {
  tableData += `<tr>`;
  for (const day of days) {
    tableData += `<td contenteditable=true>${schedule[day][row] ?? ""}`;
  }
  tableData += `<tr>`;
}

tableBody.innerHTML = tableData;
