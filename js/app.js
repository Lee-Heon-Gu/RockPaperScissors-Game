// 가위, 바위, 보
let userChoice = 0;
let comChoice = 0;
let recode = [0, 0, 0, 0]; // 승 무 패 기록

let resetBtn = document.getElementById('reset-btn');
let saveBtn = document.getElementById('save-btn');
let loadBtn = document.getElementById('load-btn');

function rps(Choice) { // 가위, 바위, 보 게임 함수
    let userImg = document.getElementsByClassName("user-img");
    let comImg = document.getElementsByClassName("com-img");
    
    for (let i = 0; i < userImg.length; i++)
    {
        userImg[i].style.display = "none";
        comImg[i].style.display = "none";
    }

    alert(Choice);
    userChoice = Choice; // 사용자 선택
    
    if (userChoice == "바위")
    {
        userImg[0].style.display = "inline";
    }
    else if (userChoice == "보")
    {
        userImg[1].style.display = "inline";
    }
    else if (userChoice == "가위")
    {
        userImg[2].style.display = "inline";
    }

    setTimeout(rpsCom, 500);
}

function rpsCom() {
    alert("컴퓨터 선택!");
    comChoice = Math.ceil(Math.random() * 3); // 1 ~ 3 랜덤 생성
                                              // 1 = 바위, 2 = 보, 3 = 가위
    let comImg = document.getElementsByClassName("com-img");

    if (comChoice == 1)
    {
        comImg[0].style.display = "inline";
    }
    else if (comChoice == 2)
    {
        comImg[1].style.display = "inline";
    }
    else if (comChoice == 3)
    {
        comImg[2].style.display = "inline";
    }

    setTimeout(rpsResult, 500);
}

function rpsResult() {
    if (userChoice == "바위") // 사용자 선택이 바위일때
    {  
        switch (comChoice)
        {
            case 1:
                alert("무승부");
                recode[2]++;
                break;
            case 2:
                alert("패배");
                recode[3]++;
                break;
            case 3:
                alert("승리");
                recode[1]++;
                break;
       
            default:
                break;
        }
    }
    else if (userChoice == "보") // 사용자 선택이 보일때
    {
        switch (comChoice) 
        {
            case 1:
                alert("승리");
                recode[1]++;
                break;
            case 2:
                alert("무승부");
                recode[2]++;
                break;
            case 3:
                alert("패배");
                recode[3]++;
                break;
        
            default:
                break;
        }
    }
    else if (userChoice == "가위") // 사용자 선택이 가위일때
    {
        switch (comChoice) 
        {
            case 1:
                alert("패배");
                recode[3]++;
                break;
            case 2:
                alert("승리");
                recode[1]++;
                break;
            case 3:
                alert("무승부");
                recode[2]++;
                break;
        
            default:
                break;
        }
    }

    score();
}

resetBtn.addEventListener("click", function () {
    alert("초기화!");
    let userImg = document.getElementsByClassName("user-img");
    let comImg = document.getElementsByClassName("com-img");

    for (var i = 0; i < userImg.length; i++)
    {
        userImg[i].style.display = "none";
        comImg[i].style.display = "none";
        recode[i + 1] = 0;
    }
    
    score();
});

saveBtn.addEventListener("click", function () {
    alert("저장!");
    // 배열을 JSON 문자열로 변환
    let arrString = JSON.stringify(recode);
    localStorage.setItem("score", arrString);
    console.log(localStorage.getItem("score"));
});

loadBtn.addEventListener("click", function () {
    alert("불러오기!");
    recode = JSON.parse(localStorage.getItem("score"));
    console.log(recode);

    score();   
});

function score() {
    let scoreFormat = recode[1]+" : "+recode[2]+" : "+recode[3];
    let scoreBar = document.getElementById('score-bar');
    scoreBar.textContent = scoreFormat;
}