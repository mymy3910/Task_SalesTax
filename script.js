function ckickBtn(){
const pricecheck = document.forms.form1.price.value;   //入力された値段を取得
const price =  Number(pricecheck);                     //入力された値段を数字に変換
const itemType = document.getElementById("item_type"); //選択肢を取得
const selectItem = itemType.value ;                    //選択肢の値を取得

//入力値が空白の場合はエラーメッセージを表示する
if(price == '' || price == null){
  document.getElementById("result").innerHTML =  'Error!!値段の入力をしてください。';
}
//入力値が数字以外の場合はエラーメッセージを表示する
else if(Number.isNaN(price)){
  document.getElementById("result").innerHTML =  'Error!!数字を入力してください。';
}
else
{
//食品の場合は8%,それ以外の場合は10%で計算をする
//スコープ内になるため変数はvarで宣言した
if(selectItem === "food") {
  var priceResult =  price * 1.08;
}
if(selectItem === "other") {
  var priceResult =  price * 1.10;
}
//計算結果を結果として表示する、小数点以下は切り捨てる
document.getElementById("result").innerHTML = Math.floor( priceResult ); 
}}