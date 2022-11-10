// let plusOneEl = document.getElementById("plusOne")
// let plusTwo = document.getElementsByClassName("plusTwo")
// let plusThree = document.getElementsByClassName("plusThree")

// plusOneEl.addEvenetListner("click", function() {
//     let val = document.getElementById("leftScoreCard").textContent
//     val = Number(val) + 1
//     document.getElementById("leftScoreCard").innerHTML = 5
// })

// LEFT SCORECARD

function plusOneLeft() {
    let val = document.getElementById("leftScoreCard").textContent
    val = Number(val) + 1
    document.getElementById("leftScoreCard").textContent = val
    leadingPlayer()
}

function plusTwoLeft() {
    let val = document.getElementById("leftScoreCard").textContent
    val = Number(val) + 2
    document.getElementById("leftScoreCard").textContent = val
    leadingPlayer()
}

function plusThreeLeft() {
    let val = document.getElementById("leftScoreCard").textContent
    val = Number(val) + 3
    document.getElementById("leftScoreCard").textContent = val
    leadingPlayer()
}

// RIGHT SCORECARD

function plusOneRight() {
    let val = document.getElementById("rightScoreCard").textContent
    val = Number(val) + 1
    document.getElementById("rightScoreCard").textContent = val
    leadingPlayer()
}

function plusTwoRight() {
    let val = document.getElementById("rightScoreCard").textContent
    val = Number(val) + 2
    document.getElementById("rightScoreCard").textContent = val
    leadingPlayer()
}

function plusThreeRight() {
    let val = document.getElementById("rightScoreCard").textContent
    val = Number(val) + 3
    document.getElementById("rightScoreCard").textContent = val
    leadingPlayer()
}

// RESET BUTTON

function reset() {
    document.getElementById("leftScoreCard").textContent = 0
    document.getElementById("rightScoreCard").textContent = 0
    leadingPlayer()
}

function leadingPlayer(){
    let val1 = document.getElementById("leftScoreCard").textContent
    let val2 = document.getElementById("rightScoreCard").textContent

    let txtEl = document.getElementById("leadingPlayer")

    if(val1 == val2){
        txtEl.textContent = "Both are Equal"
    } else if(val1 > val2){
        txtEl.textContent = "HOME is leading"
    } else {
        txtEl.textContent = "GUEST is leading"
    }
}
