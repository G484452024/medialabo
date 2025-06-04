
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  let shops = data.results.shop;

  for (let i = 0; i < shops.length; i++) {
    let shop = shops[i];
    console.log("検索結果" + (i + 1)+ "件目");
    console.log("店舗名:", shop.name);
    console.log("アクセス情報:", shop.access);
    console.log("住所:", shop.address);
    console.log("予算:", shop.budget.name);
    console.log("キャッチコピー:", shop.catch);
    console.log("ジャンル:", shop.genre.name);
    console.log("営業日時:", shop.open);
    console.log("最寄駅:", shop.station_name);
    console.log("サブジャンル:", shop.sub_genre?.name ?? "なし");
    console.log("--------------------"); 
  }
}

//課題4-2 の検索欄を設置する

function greeting() {
  let input = document.querySelector('input[name="gurume"]');
  let keyword = input.value;
  console.log("検索キー: " + keyword);
}
b = document.querySelector("button#print");
b.addEventListener("click", greeting);

// 課題5-1 の関数 printDom() はここに記述すること

function printDom(data) {
  let shops = data.results.shop;
  let resultDiv = document.querySelector('div#result');
  resultDiv.innerHTML = '';

  let h2 = document.createElement('h2');
  h2.textContent = "・・・検索結果・・・";
  resultDiv.appendChild(h2); 

  let h3 = document.createElement('h3');
  h3.textContent = "検索結果は" + shops.length + "件です。";
  resultDiv.appendChild(h3);

  let ul = document.createElement('ul');

  for (let i = 0; i < shops.length; i++) {
    let shop = shops[i];

    let infoList = [
      "検索結果" + (i + 1) + "件目",
      "店舗名: " + shop.name,
      "アクセス情報: " + shop.access,
      "住所: " + shop.address,
      "予算: " + shop.budget.name,
      "キャッチコピー: " + shop.catch,
      "ジャンル: " + shop.genre.name,
      "営業日時: " + shop.open,
      "最寄駅: " + shop.station_name,
      "サブジャンル: " + (shop.sub_genre?.name ?? "なし"),
      "--------------------"
    ];

    for (let text of infoList) {
      let li = document.createElement('li');
      li.textContent = text;
      ul.appendChild(li);
    }
  }
  
  resultDiv.appendChild(ul);
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  greeting();

  let input = document.querySelector('input[name="gurume"]');
  let keyword = input.value;

  let g;
  if (keyword === '居酒屋') { 
    g = 'G001';
  } else if (keyword === 'ダイニングバー' || keyword === 'バル') { 
    g = 'G002';
  } else if (keyword === '創作料理') {
    g = 'G003';
  } else if (keyword === '和食') {
    g = 'G004';
  } else if (keyword === '洋食') {
    g = 'G005';
  } else if (keyword === 'イタリアン' || keyword === 'フレンチ') {
    g = 'G006';
  } else if (keyword === '中華') {
    g = 'G007';
  } else if (keyword === '焼肉' || keyword === 'ホルモン') {
    g = 'G008';
  } else if (keyword === 'アジア' || keyword ==='エスニック料理') {
    g = 'G009';
  } else if (keyword === '各国料理') { 
    g = 'G010';
  } else if (keyword === 'カラオケ' || keyword === 'パーティ') {
    g = 'G011';
  } else if (keyword === 'バー' || keyword === 'カクテル') {
    g = 'G012';
  } else if (keyword === 'ラーメン') { 
    g = 'G013';
  } else if (keyword === 'カフェ' || keyword === 'スイーツ') {
    g = 'G014';
  } else if (keyword === 'その他グルメ') {
    g = 'G015';
  } else if (keyword === 'お好み焼き' || keyword === 'もんじゃ') {
    g = 'G016';
  } else if (keyword === '韓国料理') {
    g = 'G017';
  }

  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + g + '.json';
  axios.get(url)
    .then(showResult)  
    .catch(showError)
    .then(finish); 
}

// 最初のイベント登録
document.querySelector("button#print").addEventListener('click', sendRequest);
// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;
  printDom(data);
  print(data);
  if (typeof data === 'string') {
		data = JSON.parse(data);
	}
  console.log(data);
  console.log(data.x);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
