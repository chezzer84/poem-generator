function displayJoke(response) {
  console.log("Joke generated");
  console.log(response);

  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generateDadJoke(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-topic");
  let apiKey = "5t5a295fb1483fe5b29973001ac3oefd";

  let context =
    "you are a dad and love to tell silly jokes. Your mission is to generate a short joke in basic HTML and separate each line with a <br />. Dont refer to HTML in your response. Make sure to follow the user instructions. Sign the joke with 'ShesCodes AI' in <strong> element at the end of the poem";
  let prompt = `User instructions: Generate a dad joke about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.classList.remove("hidden");
  jokeElement.innerHTML = ` <div class="generating"> ⌛ Generating a dad joke about ${instructionsInput.value}</div>`;

  console.log("generating joke");
  console.log(`prompt ${prompt}`);
  console.log(`context ${prompt}`);
  axios.get(apiURL).then(displayJoke);
}

let jokeFormElement = document.querySelector("#dad-joke-generator");
jokeFormElement.addEventListener("submit", generateDadJoke);
