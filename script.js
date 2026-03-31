function generate() {
  let topic = document.getElementById("topic").value;

  let result = "Hook: You won’t believe this about " + topic +
               "\n\nContent: Here’s why it matters..." +
               "\n\nCTA: Follow for more!";

  document.getElementById("output").innerText = result;
}
