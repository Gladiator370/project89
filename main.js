score=0;
function update(){
    score=score+1;
    document.getElementById("score").innerHTML="score:"+score;
}
function Savescore(){
    localStorage.setItem("score",score);
}
function NextPage(){
    window.location="activity_2.html";
}