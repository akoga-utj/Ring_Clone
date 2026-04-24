'use strict'

{
  function appearModal(){
    const modal = document.querySelector("#modal");
    const mask = document.querySelector("#mask"); 

    handleMessage();

    modal.classList.remove("hidden");
    mask.classList.remove("hidden");
  }

  function closeModal(){
    const modal = document.querySelector("#modal");
    const mask = document.querySelector("#mask"); 

    modal.classList.add("hidden");
    mask.classList.add("hidden");
  }

  function handleMessage() {
    // ユーザーIDとパスワードを取得
    const userId = document.querySelector("input[type='text']").value;
    const userPw = document.querySelector("input[type='password']").value;
    // console.log(`${userId}, ${userPw}`);

    //入力パターンに応じて条件分岐
    //ひとまず分岐が想定通りできているかテスト
    if (userId && userPw){
      document.querySelector("#modal > p").textContent = "ログインしました。";
    } else {
      document.querySelector("#modal > p").textContent = "ログインに失敗しました。";
    }
  }

  document.querySelector("button").addEventListener("click", () => {
    appearModal();
  });

  document.querySelector("#close").addEventListener("click", () => {
    closeModal();
  });
}