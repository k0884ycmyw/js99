// 問題用の数字２つを抽出し、変数に代入
let mathA = Math.floor(Math.random()*9)+1;
let mathB = Math.floor(Math.random()*9)+1;
// 正しい答えの生成
let correctAnswer = mathA * mathB;

// 生成した問題用の２つの数字をHTMLで表示させる
document.getElementById("mathA").innerHTML = mathA;
document.getElementById("mathB").innerHTML = mathB;


// ダミー用の答えの配列　length:36　→　0～35
let dammy = [1,2,3,4,5,6,7,8,9,10,12,14,15,16,18,20,21,24,25,27,28,30,32,35,36,40,42,45,48,49,54,56,63,64,72,81];
// フロア+ランダムで0～35の整数をランダムで生成し、変数に代入
let dammyA = Math.floor(Math.random()*dammy.length);
let dammyB = Math.floor(Math.random()*dammy.length);

if((correctAnswer === dammy[dammyA])||(correctAnswer === dammy[dammyB])||(dammy[dammyA] === dammy[dammyB])){
while((correctAnswer !== dammy[dammyA])&&(correctAnswer !== dammy[dammyB])&&(dammy[dammyA] !== dammy[dammyB])){
    let dammyA = Math.floor(Math.random()*dammy.length);
    let dammyB = Math.floor(Math.random()*dammy.length);
}
}

//  この時点で生成される答えの変数は①correctAnswer②dammyA③dammyBの3つ。
console.log(correctAnswer);
console.log(dammy[dammyA]);
console.log(dammy[dammyB]);

// 生成した要素を配列にする
let answers = [correctAnswer, dammy[dammyA], dammy[dammyB]];

// let A = Math.floor(Math.random()*answers.length);
// let B = Math.floor(Math.random()*answers.length);
// let C = Math.floor(Math.random()*answers.length);

for(i = answers.length -1;i>0;i--){
    //乱数生成を使ってランダムに取り出す値を決める
    r = Math.floor(Math.random()*(i+1));
    //取り出した値と箱の外の先頭の値を交換する
    tmp = answers[i];
    answers[i] = answers[r];
    answers[r] = tmp;
}
console.log(answers);


//答えを生成
document.getElementById("A").innerHTML = answers[0];
document.getElementById("B").innerHTML = answers[1];
document.getElementById("C").innerHTML = answers[2];


document.getElementById("A").addEventListener("click",()=>{
    if(answers[0] === correctAnswer){
        document.getElementById("call").innerHTML = "正解！";
        document.getElementById("call").classList.add("test");
        document.getElementById("btn").classList.remove("btn");
    }else{
        document.getElementById("call").innerHTML = "残念・・・！"
        document.getElementById("call").classList.add("test")
        document.getElementById("btn").classList.remove("btn");
    }
});
document.getElementById("B").addEventListener("click",()=>{
    if(answers[1] === correctAnswer){
        document.getElementById("call").innerHTML = "正解！";
        document.getElementById("call").classList.add("test");
        document.getElementById("btn").classList.remove("btn");
    }else{
        document.getElementById("call").innerHTML = "残念・・・！"
        document.getElementById("call").classList.add("test")
        document.getElementById("btn").classList.remove("btn");
    }
});
document.getElementById("C").addEventListener("click",()=>{
    if(answers[2] === correctAnswer){
        document.getElementById("call").innerHTML = "正解！";
        document.getElementById("call").classList.add("test");
        document.getElementById("btn").classList.remove("btn");
    }else{
        document.getElementById("call").innerHTML = "残念・・・！"
        document.getElementById("call").classList.add("test")
        document.getElementById("btn").classList.remove("btn");
    }
});

document.getElementById("btn").addEventListener("click",()=>{
    document.location.reload();
})