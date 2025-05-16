// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);
let keisoku = 0;
// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let b = document.querySelector('button#print');
b.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei(){
    kaisu++;
    let i = document.querySelector('input#kaitou');
    let yoso = Number(i.value);
    let p = document.querySelector('span#answer');
    p.textContent = yoso;
    let result = document.querySelector('p#result');
    
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  p.textContent = yoso;
    document.querySelector('span#kaisu').textContent = kaisu;
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  console.log("「"+(kaisu)+"回目の予想: "+ (yoso) +"」");
  if(keisoku === 4){
    console.log("「答えは" + kotae + "でした．すでにゲームは終わっています」");
    result.textContent = ("「答えは" + kotae + "でした．すでにゲームは終わっています」");
    return;
  }
  if (kotae === yoso){
    console.log("「正解です．おめでとう!」");
    result.textContent = ("「正解です．おめでとう!」");
    keisoku = 4;
  } else if (kaisu === 3){
    console.log("「まちがい．残念でした答えは " + kotae + "です．」");
    result.textContent = ("「まちがい．残念でした答えは " + kotae + "です．」");
    keisoku = 4;
  } else if (kotae > yoso) {
    console.log("「まちがい．答えはもっと大きいですよ」");
    result.textContent = ("「まちがい．答えはもっと大きいですよ」");
  } else if (kotae < yoso) {
    console.log("「まちがい．答えはもっと小さいですよ」");
    result.textContent = ("「まちがい．答えはもっと小さいですよ」");
  }
}