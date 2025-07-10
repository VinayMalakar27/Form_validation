document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const userName = document.getElementById("username").value.trim();
  const passWord = document.getElementById("password").value.trim();
  const msg = document.getElementById("message");

  try {
    if (!userName) {
      throw new Error("please fill all fields");
    }
    if (!passWord) {
      throw new Error("password must be Required");
    }

    if (passWord.length < 6) {
      throw new Error("password must be at leart 6 charcters");
    }

    localStorage.setItem("savedUsername", userName)

    msg.style.color = "green";
    msg.textContent = `wellcome ${userName}! Login Succesfull`;
    msg.style.display = "block";
  } catch (error) {
    msg.style.color = "red";
    msg.textContent = error.message;
    msg.style.display = "block";
  }


});
