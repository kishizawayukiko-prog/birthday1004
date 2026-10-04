/* =========================
   ページ切り替え
========================= */
function nextPage(pageNumber) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document
    .getElementById("page" + pageNumber)
    .classList.add("active");

}

/* =========================
   パスワード
========================= */

function checkPassword() {

  const password =
    document.getElementById("password").value;

  /*
    ここを2人の思い出の数字にする
    例：0518
  */

  if (password === "0518") {
	 
	 document.getElementById("password").blur();

    startCountdown();

  } else {

    document.getElementById("error").textContent =
      "もう一度、思い出してみて。";

  }

}



/* =========================
   カウントダウン
========================= */
function startCountdown() {

  // page6を表示
  nextPage(6);

  let number = 3;

  const countdown = document.getElementById("countdown");

  countdown.textContent = number;

  const timer = setInterval(() => {

    number--;

    if (number > 0) {

      countdown.textContent = number;

    } else {

      clearInterval(timer);

      countdown.textContent = "1";

      setTimeout(() => {

        nextPage(7);

      }, 800);

    }

  }, 1000);

}

page.classList.remove("active");
page.classList.add("active");