//「決定」ボタン押下で消費税計算
function clickBtn(){
  const priceValue = document.forms.form1.price.value;        //入力された価格を取得
  const price =  Number(priceValue);                          //入力された価格を数字に変換
  const itemTypeValue = document.getElementById("item_type"); //選択肢を取得
  const itemType = itemTypeValue.value ;                      //選択肢の値を取得
  let result = document.getElementById("result");             //結果表示欄へ出力する

  //価格入力値が空白の場合はエラーメッセージを表示する
  if(price == '' || price == null){
    result.innerHTML = 'Error!!値段の入力をしてください。';
    result.style.color = '#ff0000'
  }
  //価格入力値が数字以外の場合はエラーメッセージを表示する
  else if(Number.isNaN(price)){
    result.innerHTML = 'Error!!数字を入力してください。';
    result.style.color = '#ff0000'
  }
  //食品の場合は8%,それ以外の場合は10%で計算をする
  else{
    let calculate;     //計算結果
    const unit = '円'; //表示用単位
    let priceResult;   //結果表示
    if(itemType === "food") {
      calculate = Math.floor(price * 1.08).toLocaleString();
      priceResult = calculate + unit;
    }
    if(itemType === "other") {
      calculate = Math.floor(price * 1.10).toLocaleString();
      priceResult = calculate + unit;
    }
  //計算結果を結果として表示する、小数点以下は切り捨てカンマ有り表示
   result.innerHTML = priceResult;
   result.style.color = '#000000' 
  }
}

//「クリア」ボタン押下で入力値をクリア、結果を空表示とする
function clickCrearBtn(){
  document.forms.form1.reset();
  result.innerHTML = "";
}