
        const para = document.querySelector(".para");

        const url = "http://www.boredapi.com/api/activity/";

        async function onClick() {
          let response = await fetch(url);

          //console.log(response);

          let data = await response.json();

          //console.log(data.activity);

          para.textContent = data.activity;
        }