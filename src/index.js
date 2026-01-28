function displayPoem(reponse) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autostart: true,
    delay: 1,
    cursor: "💗",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7e43t102ob02c30d9fabf0c6b85d4a1a";
  let prompt =
    "User instructions: Generate a short poem about ${instructionsInput.value}";
  let context =
    "You are a world class poet and you are very good at writing short poems. Your mission is to create a four-line poem in basic HTML. Make sure to follow the users instructions.";
  let apiUrl =
    "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}";

  console.log("Writing the poem for you... please, stand by");
  console.log("Prompt: ${prompt}");
  console.log("Context: ${context}");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
