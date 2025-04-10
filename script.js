console.log("This is my script");

let result = {
  tag: "",
  free: true,
  role: false,
  user: "champatisatyabrata26",
  email: "champatisatyabrata26@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        console.log("Clicked");
        let key = "ema_live_REgYhHAwq8YPrzO3gICU8KrCVQMP63rRtljfhPxb";
        let email = document.getElementById("username").value;
        let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
        let res = await fetch(url);
        let result = await res.json();
        let str = ``;
        for (let key of Object.keys(result)) {
            if (result[key] !== "" && result[key] !== null) {
                str = str + `<div>${key}: ${result[key]}</div>`;
            }
        }
        console.log(str);
        document.getElementById("resultCont").innerHTML = str;
    });
});

