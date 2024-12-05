const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// TITLETRON! Makes the title in the tab scroll the full length of text
const titletron = async () => {
  let text = "Welcome to Jason Carrillo's Portfolio Site! ";
  let title = document.querySelector("title");
  let index = 0;
  let deleted_letters = "";
  title.innerText = text;

  await delay(1000);

  while (true) {
    if (index == text.length) {
      index = 0;
      deleted_letters = "";
    }
    deleted_letters += text[index];

    // Display all text
    displayed_text = text.slice(index, text.length) + deleted_letters;

    title.innerText = displayed_text;
    await delay(250);
    index++;
  }
};

titletron();

console.log("just making sure");
