function check() {
  let score = 0;

  if (document.querySelector('input[name="q1"]:checked')?.value == "a")
    score++;

  if (document.querySelector('input[name="q2"]:checked')?.value == "b")
    score++;

  if (document.querySelector('input[name="q3"]:checked')?.value == "a")
    score++;

  document.getElementById("score").innerText = "Your Score: " + score + "/3";
}