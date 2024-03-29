const input = document.getElementById("input");
const tmp = document.getElementById("tmp");

const empty = (element) => {
  element.innerText = "";
};

document.getElementById("all-clear").addEventListener("click", () => {
  empty(input);
  empty(tmp);
});

const del = (input) => {
  input.innerText = input.innerText.substring(0, input.innerText.length - 1);
};

document.getElementById("clear").addEventListener("click", () => {
  del(input);
});

document.querySelectorAll(".number").forEach((element) => {
  element.addEventListener("click", () => {
    if (input.innerText.length > 15) return alert("maksimal angka 15");

    let isZero = false;
    if (input.innerText[0] === "0" && input.innerText[1] === undefined) {
      isZero = true;
    }

    if (isZero) {
      if (element.innerText !== "0") {
        if (input.innerText[0] === "0" && !input.innerText.includes(".")) {
          input.innerText = input.innerText.substring(
            0,
            input.innerText.length - 1
          );
          input.innerText += element.innerText;
        }
      }
    } else {
      input.innerText += element.innerText;
    }
  });
});

document.getElementById("dot").addEventListener("click", () => {
  if (input.innerText.includes(".")) return;
  if (input.innerText[0] === undefined) {
    input.innerText += "0.";
  } else {
    input.innerText += ".";
  }
});

document.querySelectorAll(".operation").forEach((element) => {
  element.addEventListener("click", () => {
    if (input.innerText) {
      if (tmp.innerText) {
        tmp.innerText = `${tmp.innerText} ${input.innerText} ${element.value}`;
      } else {
        tmp.innerText = `${input.innerText} ${element.value}`;
      }
    } else if (tmp.innerText.slice(-1).match(/-|\+|\*|\//)) {
      let string = tmp.innerText.slice(0, -1);
      string += element.value;

      tmp.innerText = string;
    }

    empty(input);
  });
});

document.getElementById("result").addEventListener("click", () => {
  if (input.innerText) {
    input.innerText = eval(tmp.innerText + input.innerText);
    empty(tmp);
  }
});

function toggleTheme1() {
  // change background body
  document.body.style.background = "#3b4664";

  // change calculator background color
  const changeCalcColor = document.getElementById("calculator");
  changeCalcColor.style.background = "#3b4664";

  // change font color
  document.body.style.color = "white";

  // change screen color
  const changeScreen = document.getElementById("input-wrap");
  changeScreen.style.background = "#181f32";

  // change calculator side background color
  const changeCalcSideColor = document.querySelector(".button-container");
  changeCalcSideColor.style.background = "#252c46";

  /// change DEL, RESET, =, & plus,min,divide,times
  // Reset
  const changeReset = document.getElementById("all-clear");
  changeReset.style.background = "#647299";
  changeReset.style.boxShadow = "inset 0px -6px #404d75";
  // DEL
  const changeDel = document.getElementById("clear");
  changeDel.style.background = "#647299";
  changeDel.style.boxShadow = "inset 0px -6px #404d75";
  // Result
  const changeResult = document.getElementById("result");
  changeResult.style.background = "#d13f30";
  changeResult.style.color = "white";
  changeResult.style.boxShadow = "inset 0px -6px #842d27";
  // plus, min, divide, times
  const changeoperation = document.querySelectorAll(".operation");
  changeoperation.forEach((x) => (x.style.background = "#eae3dc"));
  changeoperation.forEach((x) => (x.style.color = "#302F26"));
  changeoperation.forEach(
    (x) => (x.style.boxShadow = "inset 0px -6px #afa69c")
  );

  // change dot
  const changeDot = document.getElementById("dot");
  changeDot.style.background = "#eae3dc";
  changeDot.style.boxShadow = "inset 0px -6px #afa69c";
  changeDot.style.color = "#252c46";

  // change button color
  const changeButton = document.querySelectorAll(".number");
  changeButton.forEach((x) => (x.style.background = "#eae3dc"));
  changeButton.forEach((x) => (x.style.color = "#252c46"));
  changeButton.forEach((x) => (x.style.boxShadow = "inset 0px -6px #afa69c"));

  //round toggle switch button
  const changeToggle = document.querySelector(".round");
  changeToggle.style.background = "#d63c34";
}

function toggleTheme2() {
  // change background body
  document.body.style.background = "#FFF";

  // change calculator background color
  const changeCalcColor = document.getElementById("calculator");
  changeCalcColor.style.background = "#FFF";

  // change font color
  document.body.style.color = "#393831";

  // change screen color
  const changeScreen = document.getElementById("input-wrap");
  changeScreen.style.background = "white";

  // change calculator side background color
  const changeCalcSideColor = document.querySelector(".button-container");
  changeCalcSideColor.style.background = "#D3CDCD";

  /// change DEL, RESET, =, & plus,min,divide,times
  // Reset
  const changeReset = document.getElementById("all-clear");
  changeReset.style.background = "#3A8089";
  changeReset.style.boxShadow = "inset 0px -6px #404d75";
  // DEL
  const changeDel = document.getElementById("clear");
  changeDel.style.background = "#3A8089";
  changeDel.style.boxShadow = "inset 0px -6px #404d75";
  // Result
  const changeResult = document.getElementById("result");
  changeResult.style.background = "#C85401";
  changeResult.style.color = "white";
  changeResult.style.boxShadow = "inset 0px -6px #842d27";

  // plus , min, divide, times
  const changeoperation = document.querySelectorAll(".operation");
  changeoperation.forEach((x) => (x.style.background = "#E5E4E0"));
  changeoperation.forEach((x) => (x.style.color = "#302F26"));
  changeoperation.forEach(
    (x) => (x.style.boxShadow = "inset 0px -6px #afa69c")
  );

  // change dot
  const changeDot = document.getElementById("dot");
  changeDot.style.background = "#E5E4E0";
  changeDot.style.boxShadow = "inset 0px -6px #afa69c";
  changeDot.style.color = "#252c46";

  // change button color
  const changeButton = document.querySelectorAll(".number");
  changeButton.forEach((x) => (x.style.background = "#E5E4E0"));
  changeButton.forEach((x) => (x.style.color = "#252c46"));
  changeButton.forEach((x) => (x.style.boxShadow = "inset 0px -6px #afa69c"));

  //round toggle switch button
  const changeToggle = document.querySelector(".round");
  changeToggle.style.background = "#d63c34";
}

function toggleTheme3() {
  // change background body
  document.body.style.background = "#17062A";

  // change calculator background color
  const changeCalcColor = document.getElementById("calculator");
  changeCalcColor.style.background = "#17062A";

  // change font color
  document.body.style.color = "#F1D971";

  // change screen color
  const changeScreen = document.getElementById("input-wrap");
  changeScreen.style.background = "#1E0836";

  // change calculator side background color
  const changeCalcSideColor = document.querySelector(".button-container");
  changeCalcSideColor.style.background = "#1E0836";

  // change DEL, RESET, =, & plus,min,divide,times
  // Reset
  const changeReset = document.getElementById("all-clear");
  changeReset.style.background = "#56077C";
  changeReset.style.boxShadow = "inset 0px -6px #ad22dd";
  // DEL
  const changeDel = document.getElementById("clear");
  changeDel.style.background = "#55087A";
  changeDel.style.boxShadow = "inset 0px -6px #ad22dd";
  // result
  const changeResult = document.getElementById("result");
  changeResult.style.background = "#00DECF";
  changeResult.style.color = "#003D41";
  changeResult.style.boxShadow = "inset 0px -6px #6ae2dd";

  // plus , min, divide, times
  const changeoperation = document.querySelectorAll(".operation");
  changeoperation.forEach((x) => (x.style.background = "#331B4D"));
  changeoperation.forEach((x) => (x.style.color = "#F1D971"));
  changeoperation.forEach(
    (x) => (x.style.boxShadow = "inset 0px -6px #7b2491")
  );

  // change dot
  const changeDot = document.getElementById("dot");
  changeDot.style.background = "#331B4D";
  changeDot.style.boxShadow = "inset 0px -6px #7b2491";
  changeDot.style.color = "#F1D971";

  // change button color
  const changeButton = document.querySelectorAll(".number");
  changeButton.forEach((x) => (x.style.background = "#331B4D"));
  changeButton.forEach((x) => (x.style.color = "#F1D971"));
  changeButton.forEach((x) => (x.style.boxShadow = "inset 0px -6px #7b2491"));

  //round toggle switch button
  const changeToggle = document.querySelector(".round");
  changeToggle.style.background = "#00DDCE";
}
