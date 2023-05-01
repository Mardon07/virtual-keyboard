const body = document.querySelector("body");

const container = document.createElement("div");
container.className = "container";
body.prepend(container);
const keysNumber = [
  {
    number: "`",
    signs: "~"
  },
  {
    number: "1",
    signs: "!"
  },
  {
    number: "2",
    signs: "@"
  },
  {
    number: "3",
    signs: "#"
  },
  {
    number: "4",
    signs: "$"
  },
  {
    number: "5",
    signs: "%"
  },
  {
    number: "6",
    signs: ":"
  },
  {
    number: "7",
    signs: "?"
  },
  {
    number: "8",
    signs: "*"
  },
  {
    number: "9",
    signs: "("
  },
  {
    number: "0",
    signs: ")"
  },
  {
    number: "-",
    signs: "_"
  },
  {
    number: "=",
    signs: "+"
  },
  {
    number: "Backspace"
  }
];
const keysQwerty = [
  {
    letterEn: "Tab"
  },
  {
    letterEn: "q",
    letterRu: "й"
  },
  {
    letterEn: "w",
    letterRu: "ц"
  },
  {
    letterEn: "e",
    letterRu: "у"
  },
  {
    letterEn: "r",
    letterRu: "к"
  },
  {
    letterEn: "t",
    letterRu: "е"
  },
  {
    letterEn: "y",
    letterRu: "н"
  },
  {
    letterEn: "u",
    letterRu: "г"
  },
  {
    letterEn: "i",
    letterRu: "ш"
  },
  {
    letterEn: "o",
    letterRu: "щ"
  },
  {
    letterEn: "p",
    letterRu: "з"
  },
  {
    letterEn: "[",
    letterRu: "х"
  },
  {
    letterEn: "]",
    letterRu: "ъ"
  },
  {
    letterEn: " \\ ",
    letterRu: "/"
  },
  {
    letterEn: "DEL"
  }
];

const keysAsdf = [
  {
    letterEn: "Caps Lock"
  },
  {
    letterEn: "a",
    letterRu: "ф"
  },
  {
    letterEn: "s",
    letterRu: "ы"
  },
  {
    letterEn: "d",
    letterRu: "в"
  },
  {
    letterEn: "f",
    letterRu: "а"
  },
  {
    letterEn: "g",
    letterRu: "п"
  },
  {
    letterEn: "h",
    letterRu: "р"
  },
  {
    letterEn: "j",
    letterRu: "о"
  },
  {
    letterEn: "k",
    letterRu: "л"
  },
  {
    letterEn: "l",
    letterRu: "д"
  },
  {
    letterEn: ";",
    letterRu: "ж"
  },
  {
    letterEn: "'",
    letterRu: "э"
  },
  {
    letterEn: "ENTER"
  }
];
const keysZxcv = [
  {
    letterEn: "Shift"
  },
  {
    letterEn: "\\"
  },
  {
    letterEn: "z",
    letterRu: "я"
  },
  {
    letterEn: "x",
    letterRu: "ч"
  },
  {
    letterEn: "c",
    letterRu: "с"
  },
  {
    letterEn: "v",
    letterRu: "м"
  },
  {
    letterEn: "b",
    letterRu: "и"
  },
  {
    letterEn: "n",
    letterRu: "т"
  },
  {
    letterEn: "m",
    letterRu: "ь"
  },
  {
    letterEn: ",",
    letterRu: "б"
  },
  {
    letterEn: ".",
    letterRu: "ю"
  },
  {
    letterEn: "/",
    letterRu: "."
  },
  {
    letterEn: "↑"
  },
  {
    letterEn: "Shift"
  }
];
const keysSpace = [
  {
    letter: "Ctrl"
  },
  {
    letter: "Win"
  },
  {
    letter: "Alt"
  },
  {
    letter: "                     "
  },
  {
    letter: "Alt"
  },
  {
    letter: "Ctrl"
  },
  {
    letter: "←"
  },
  {
    letter: "↓"
  },
  {
    letter: "→"
  }
];

function one() {
  const row = document.createElement("div");
  row.className = "row";
  for (const i of keysNumber) {
    const input = document.createElement("input");
    input.className = "input";
    input.type = "button";
    input.value = i.number;
    row.append(input);
    container.append(row);
  }

  const row2 = document.createElement("div");
  row2.className = "row";
  for (const i of keysQwerty) {
    const input = document.createElement("input");
    input.className = "input";
    input.type = "button";
    input.value = i.letterEn;
    row2.append(input);
    container.append(row2);
  }
  const row3 = document.createElement("div");
  row3.className = "row";
  for (const i of keysAsdf) {
    const input = document.createElement("input");
    input.className = "input";
    input.type = "button";
    input.value = i.letterEn;
    row3.append(input);
    container.append(row3);
  }
  const row4 = document.createElement("div");
  row4.className = "row";
  for (const i of keysZxcv) {
    const input = document.createElement("input");
    input.className = "input";
    input.type = "button";
    input.value = i.letterEn;
    row4.append(input);
    container.append(row4);
  }
  const row5 = document.createElement("div");
  row5.className = "row";
  for (const i of keysSpace) {
    const input = document.createElement("input");
    input.className = "input";
    input.type = "button";
    input.value = i.letter;
    row5.append(input);
    container.append(row5);
  }
}

one();
