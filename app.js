let btnComment = document.getElementById("btnComment");
    let comments = document.querySelector(".comments");
    let showComments = document.querySelector(".showComments");
    let btnSend = document.getElementById("btnSend");
    let clienMessage = document.querySelector(".clienMessage");
    let titleuser = document.querySelector(".titleuser");
    let totlaCommnets = document.getElementById("totlaCommnets");
    let like = document.getElementById("like");
    let totalLike = document.getElementById("totalLike");
    let shareBtn = document.getElementById("shareBtn");
    let totaShare = document.getElementById("totaShare");
    btnComment.addEventListener("click", () => {
      comments.classList.toggle("show");
    });

    let sumComments = 1;
    // ____اینجا کامنت ها ثبت و نمایش داده میشود
    btnSend.addEventListener("click", () => {
      if (titleuser.value === "" && clienMessage.value === "") {
        alert("All fields requoired");
      } else {
        let li = document.createElement("li");
        li.classList.add("text");
        li.innerHTML = `
                <strong>${titleuser.value}</strong>
                <p>${clienMessage.value}</p>
            `;
        showComments.appendChild(li);
        titleuser.value = null;
        clienMessage.value = null;
        totlaCommnets.textContent = sumComments++;
      }
    });

    // اینجا تعداد لایک ها نمایش داده میشود
    let indexLike = true;
    like.addEventListener("click", () => {
      if (indexLike) {
        totalLike.textContent = 1;
        indexLike = false;
      } else {
        totalLike.textContent = 0;
        indexLike = true;
      }
    });



    let sumShare = 1
    shareBtn.addEventListener("click", async () => {
      const productUrl = window.location.href; // لینک صفحه محصول
      const productTitle = "نام محصول";
      const productText = "این محصول را ببین 👇";

      if (navigator.share) {
        try {
          await navigator.share({
            title: productTitle,
            text: productText,
            url: productUrl,
        });
        totaShare.textContent=sumShare++
          console.log("Shared successfully");
        } catch (error) {
          console.log("Share canceled", error);
        }
      } else {
        alert("مرورگر شما از Share پشتیبانی نمی‌کند");
      }
    });