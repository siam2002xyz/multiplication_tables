let number = 999;
let i = 1;

while (i <= 10) {
  const heading = document.createElement("h1");
  heading.textContent = number + " x " + i + " = "+number * i;
  document.getElementById("multiplicationTable").appendChild(heading);
  i++;
}
