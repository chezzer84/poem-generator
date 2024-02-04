function generateDadJoke(event) {
  event.preventDefault();

  new Typewriter("#joke", {
    strings: "Joke will go here about the topic",
    autoStart: true,
    Delay: 1,
    cursor: "",
  });
}

let jokeFormElement = document.querySelector("#dad-joke-generator");
jokeFormElement.addEventListener("submit", generateDadJoke);
