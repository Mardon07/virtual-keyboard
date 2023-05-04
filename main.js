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
    letterEn: "Tab",
    letterRu: "Tab"
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
    letterEn: "DEL",
    letterRu: "DEL"
  }
];

const keysAsdf = [
  {
    letterEn: "CapsLock",
    letterRu: "CapsLock"
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
    letterEn: "Enter",
    letterRu: "Enter"
  }
];
const keysZxcv = [
  {
    letterEn: "Shift",
    letterRu: "Shift"
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
    letterEn: "SHIFT",
    letterRu: "SHIFT"
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
    letter: "Space"
  },
  {
    letter: "ALT"
  },
  {
    letter: "CtrL"
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

const keyArea = document.createElement("textarea");
const row0 = document.createElement("div");
row0.className = "row1";
keyArea.className = "key-area";
// keyArea.type = "textarea";
row0.append(keyArea);
container.prepend(row0);

function one() {
  const row = document.createElement("div");
  row.className = "row";
  for (const i of keysNumber) {
    const key = document.createElement("div");
    const span = document.createElement("span");
    const span2 = document.createElement("span");
    span2.className = "span-number";
    span.classList.add("span-row1");
    span.textContent = i.signs;
    key.className = "key";

    span2.textContent = i.number;
    key.append(span2);
    key.append(span);
    if (i.number === "`") {
      key.classList.add("key-black");
    }
    if (i.number === "Backspace") {
      span.remove();
      span2.remove();
      key.append(i.number);
      key.classList.add("key-backspace");
    }
    row.append(key);
    container.append(row);
  }

  const row2 = document.createElement("div");
  row2.className = "row";
  for (const i of keysQwerty) {
    const key = document.createElement("div");
    key.className = "key";
    key.textContent = i.letterEn;

    if (i.letterEn === "Tab") {
      key.classList.add("key-tab");
    }
    if (i.letterEn === "DEL") {
      key.classList.add("key-del");
    }
    row2.append(key);
    container.append(row2);
  }
  const row3 = document.createElement("div");
  row3.className = "row";
  for (const i of keysAsdf) {
    const key = document.createElement("div");
    key.className = "key";
    key.textContent = i.letterEn;
    if (i.letterEn === "CapsLock") {
      key.classList.add("key-capslock");
    }
    if (i.letterEn === "Enter") {
      key.classList.add("key-enter");
    }
    row3.append(key);
    container.append(row3);
  }
  const row4 = document.createElement("div");
  row4.className = "row";
  for (const i of keysZxcv) {
    const key = document.createElement("div");
    key.className = "key";
    key.textContent = i.letterEn;
    if (i.letterEn === "Shift") {
      key.classList.add("key-shift");
    }
    if (i.letterEn === "SHIFT") {
      key.classList.add("key-shift-right");
    }
    if (i.letterEn === "↑") {
      key.classList.add("key-down");
    }
    row4.append(key);
    container.append(row4);
  }
  const row5 = document.createElement("div");
  row5.className = "row";
  for (const i of keysSpace) {
    const key = document.createElement("div");
    key.className = "key row-last-key";
    key.textContent = i.letter;
    if (i.letter === "Ctrl") {
      key.classList.add("key-ctrl");
    }
    if (i.letter === "Alt") {
      key.classList.add("key-alt");
    }
    if (i.letter === "CtrL") {
      key.classList.add("key-ctrl");
    }
    if (i.letter === "Space") {
      key.classList.add("key-space");
    }
    row5.append(key);
    container.append(row5);
  }
}
one();

const keys = document.querySelectorAll(".key");
const divs = document.querySelectorAll("div");

keys.forEach((k) => {
  k.addEventListener("click", (e) => {
    if (e.target.textContent === "Shift" || e.target.textContent === "SHIFT") {
      keyArea.value += "";
    }
    if (e.target.textContent === "Space") {
      keyArea.value += " ";
    }
    if (e.target.textContent === "Tab") {
      keyArea.value += "\u0009";
    }
    if (e.target.textContent === "Backspace") {
      keyArea.value = keyArea.value.slice(0, -1);
    }

    if (e.target.textContent.length <= 2) {
      keyArea.value += e.target.textContent;
    }
  });
});
const span2 = document.querySelectorAll(".span-row1");
const spanNumber = document.querySelectorAll(".span-number");

divs.forEach((d) => {
  d.addEventListener("click", (e) => {
    if (e.target.textContent === "Shift" || e.target.textContent === "SHIFT") {
      if (
        e.target.className === "key key-shift active" ||
        e.target.className === "key key-shift-right active"
      ) {
        for (const s of span2) {
          s.style.zIndex = 444;
          s.style.opacity = 0.5;
        }
        for (const n of spanNumber) {
          n.style.opacity = 1;
        }

        e.target.classList.remove("active");
      } else {
        e.target.classList.add("active");

        for (const s of span2) {
          s.style.zIndex = 666;
          s.style.opacity = 1;
        }
        for (const n of spanNumber) {
          n.style.opacity = 0.5;
        }
      }
    }
    if (e.target.textContent === "Enter") {
      keyArea.value += "\n";
    }
    if (e.target.className === "key key-capslock") {
      for (let k = 0; k < keys.length; k++) {
        if (
          k > 14 &&
          k !== 28 &&
          k !== 29 &&
          k !== 41 &&
          k !== 42 &&
          k !== 29 &&
          k <= 54
        ) {
          keys[k].textContent = keys[k].textContent.toLowerCase();
        }
      }
    }
    if (e.target.className === "key key-capslock active") {
      for (let k = 0; k < keys.length; k++) {
        if (
          k > 14 &&
          k !== 28 &&
          k !== 29 &&
          k !== 41 &&
          k !== 42 &&
          k !== 29 &&
          k <= 54
        ) {
          keys[k].textContent = keys[k].textContent.toUpperCase();
        }
      }
    }
  });
});
const capslock = document.querySelector(".key-capslock");
capslock.addEventListener("click", (e) => {
  if (e.target.className === "key key-capslock active") {
    e.target.classList.remove("active");
  } else {
    e.target.classList.add("active");
  }
});
const numbers = document.querySelectorAll(".span-number");
document.addEventListener("keydown", (k) => {
  for (const i of divs) {
    console.log(k.code);
    if (k.code === `Key${i.textContent.toUpperCase()}`) {
      i.classList.add("code");
    }
    if (k.code === i.textContent) {
      i.classList.add("code");
    }
    if (k.code === "ShiftLeft" && i.textContent === "Shift") {
      i.classList.add("code");
    }
    if (k.code === "ShiftRight" && i.textContent === "SHIFT") {
      i.classList.add("code");
    }
    if (k.code === "ControlLeft" && i.textContent === "Ctrl") {
      i.classList.add("code");
    }
    if (k.code === "ControlRight" && i.textContent === "CtrL") {
      i.classList.add("code");
    }
    if (k.code === "MetaLeft" && i.textContent === "Win") {
      i.classList.add("code");
    }
    if (k.code === "AltLeft" && i.textContent === "Alt") {
      i.classList.add("code");
    }
    if (k.code === "AltRight" && i.textContent === "ALT") {
      i.classList.add("code");
    }
    if (k.code === "ArrowUp" && i.textContent === "↑") {
      i.classList.add("code");
    }
    if (k.code === "ArrowDown" && i.textContent === "↓") {
      i.classList.add("code");
    }
    if (k.code === "ArrowLeft" && i.textContent === "←") {
      i.classList.add("code");
    }
    if (k.code === "ArrowRight" && i.textContent === "→") {
      i.classList.add("code");
    }
    if (k.code === "Delete" && i.textContent === "DEL") {
      i.classList.add("code");
    }
  }
  for (const i of numbers) {
    if (k.code === `Digit${i.textContent}`) {
      i.classList.add("code");
    }
    if (k.code === "Backquote" && i.textContent === "`") {
      i.classList.add("code");
    }
  }
});

document.addEventListener("keyup", (k) => {
  for (const i of divs) {
    if (k.code === `Key${i.textContent.toUpperCase()}`) {
      i.classList.remove("code");
    }
    if (k.code === i.textContent) {
      i.classList.remove("code");
    }
    if (k.code === "ShiftLeft" && i.textContent === "Shift") {
      i.classList.remove("code");
    }
    if (k.code === "ShiftRight" && i.textContent === "SHIFT") {
      i.classList.remove("code");
    }
    if (k.code === "ControlLeft" && i.textContent === "Ctrl") {
      i.classList.remove("code");
    }
    if (k.code === "ControlRight" && i.textContent === "CtrL") {
      i.classList.remove("code");
    }
    if (k.code === "MetaLeft" && i.textContent === "Win") {
      i.classList.remove("code");
    }
    if (k.code === "AltLeft" && i.textContent === "Alt") {
      i.classList.remove("code");
    }
    if (k.code === "AltRight" && i.textContent === "ALT") {
      i.classList.remove("code");
    }
    if (k.code === "ArrowUp" && i.textContent === "↑") {
      i.classList.remove("code");
    }
    if (k.code === "ArrowDown" && i.textContent === "↓") {
      i.classList.remove("code");
    }
    if (k.code === "ArrowLeft" && i.textContent === "←") {
      i.classList.remove("code");
    }
    if (k.code === "ArrowRight" && i.textContent === "→") {
      i.classList.remove("code");
    }
    if (k.code === "Delete" && i.textContent === "DEL") {
      i.classList.remove("code");
    }
  }
  for (const i of numbers) {
    if (k.code === `Digit${i.textContent}`) {
      i.classList.remove("code");
    }
    if (k.code === "Backquote" && i.textContent === "`") {
      i.classList.remove("code");
    }
  }
});
