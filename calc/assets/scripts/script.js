const input = document.querySelector(".inp")
const result = document.querySelector(".res")

const bn = document.querySelectorAll(".b-n")

const bdel = document.querySelector(".b-del")
const bc = document.querySelector(".b-C")
const bce = document.querySelector(".b-CE")

const bplus = document.querySelector(".b-plus")
const bminus = document.querySelector(".b-minus")
const bdivide = document.querySelector(".b-divide")
const bmul = document.querySelector(".b-mul")
const bcalc = document.querySelector(".b-calc")

const bprecent = document.querySelector(".b-precent")
const bpower = document.querySelector(".b-power")
const bsqrt = document.querySelector(".b-sqrt")
const bnegate = document.querySelector(".b-negate")
const bdivone = document.querySelector(".b-divone")
const bdot = document.querySelector(".b-dot")

const info = document.querySelectorAll(".info span")

let num = ["", ""]
let clock = 0
let act = 0
let tinfo
//

document.addEventListener("keydown", function (e) {
    console.log(e);
    switch (e.code) {
        case "Digit1":
            numb(bn[6])
            break;
        case "Digit2":
            numb(bn[7])
            break;
        case "Digit3":
            numb(bn[8])
            break;
        case "Digit4":
            numb(bn[3])
            break;
        case "Digit5":
            numb(bn[4])
            break;
        case "Digit6":
            numb(bn[5])
            break;
        case "Digit7":
            numb(bn[0])
            break;
        case "Digit8":
            if(!e.shiftKey)numb(bn[1])
            else{
                num[0] = sum(num, act)
                act = 4
                showInfo(act)
                inp(num[0])
                // input.textContent = num[0]
                if (!clock) clock = (clock + 1) % 2;
                num[1] = ""
            }
            break;
        case "Digit9":
            numb(bn[2])
            break;
        case "Digit0":
            numb(bn[9])
            break;
        case "Backspace":
            num[clock] = (num[clock] - num[clock] % 10) / 10
            input.textContent = num[clock]
            break;
        case "Equal":
            if(e.shiftKey){
                num[0] = sum(num, act)
                act = 1
                showInfo(act)
                inp(num[0])
                if (!clock) clock = (clock + 1) % 2;
                num[1] = ""
            }
            else{
                !(tinfo === undefined) ? info[tinfo].classList.remove("active") : null
                num[0] = sum(num, act)
                clock = 0
                inp(num[0])
                num[1] = ""
            }
            break;
        case "Minus":
            num[0] = sum(num, act)
            act = 2
            showInfo(act)
            inp(num[0])
            if (!clock) clock = (clock + 1) % 2;
            num[1] = ""
            break;
        case "Slash":
            num[0] = sum(num, act)
            act = 3
            showInfo(act)
            inp(num[0])
            // input.textContent = num[0]
            if (!clock) clock = (clock + 1) % 2;
            num[1] = ""
            break;
        case "Enter":
            !(tinfo === undefined) ? info[tinfo].classList.remove("active") : null
            num[0] = sum(num, act)
            clock = 0
            inp(num[0])
            num[1] = ""
            break;

        default:
            break;
    }
})

//
bprecent.addEventListener("click", function () {
    console.log(clock, num)
})
bpower.addEventListener("click", function () {
    num[clock] = num[clock] ** 2
    inp(num[clock])
})
bsqrt.addEventListener("click", function () {
    num[clock] >= 0 ? num[clock] = Math.sqrt(num[clock]) : showInfo(0);
    inp(num[clock])
})
bnegate.addEventListener("click", function () {
    num[clock] -= num[clock] * 2
    inp(num[clock])
})
bdivone.addEventListener("click", function () {
    num[clock] = 1 / num[clock]
    inp(num[clock])
})
bdot.addEventListener("click", function () {
    num[clock] = parseInt(num[clock] + ".1")
    console.log(num[clock]);
    inp(num[clock])
})

//NUMBER
for (let i = 0; i < bn.length; i++) {
    bn[i].addEventListener("click", () =>numb(bn[i]))
}
//DELETE
bdel.addEventListener("click", function () {
    num[clock] = (num[clock] - num[clock] % 10) / 10
    input.textContent = num[clock]
})
bc.addEventListener("click", function () {
    input.textContent = "0";
    num[clock] = ""
})
bce.addEventListener("click", function () {
    input.textContent = "0";
    !(tinfo === undefined) ? info[tinfo].classList.remove("active") : null
    num = ["", ""];
    clock = 0;
})

//ACTIONS
bplus.addEventListener("click", function () {
    num[0] = sum(num, act)
    act = 1
    showInfo(act)
    inp(num[0])
    // input.textContent = num[0]
    if (!clock) clock = (clock + 1) % 2;
    num[1] = ""

})
bminus.addEventListener("click", function () {
    num[0] = sum(num, act)
    act = 2
    showInfo(act)
    inp(num[0])
    // input.textContent = num[0]
    if (!clock) clock = (clock + 1) % 2;
    num[1] = ""
})
bdivide.addEventListener("click", function () {
    num[0] = sum(num, act)
    act = 3
    showInfo(act)
    inp(num[0])
    // input.textContent = num[0]
    if (!clock) clock = (clock + 1) % 2;
    num[1] = ""
})
bmul.addEventListener("click", function () {
    num[0] = sum(num, act)
    act = 4
    showInfo(act)
    inp(num[0])
    // input.textContent = num[0]
    if (!clock) clock = (clock + 1) % 2;
    num[1] = ""
})
bcalc.addEventListener("click", function () {
    !(tinfo === undefined) ? info[tinfo].classList.remove("active") : null
    num[0] = sum(num, act)
    clock = 0
    inp(num[0])
    num[1] = ""
})

function sum(arr, act) {
    switch (act) {
        case 1:
            if (arr[1] === "") arr[1] = 0
            return arr[0] += +arr[1];
        case 2:
            if (arr[1] === "") arr[1] = 0
            return arr[0] -= +arr[1];
        case 3:
            if (arr[1] === "") arr[1] = 1;
            else if (arr[1] === 0) { showInfo(0); clock = 0; return arr[0] };
            return arr[0] /= +arr[1];
        case 4:
            if (arr[1] === "") arr[1] = 1;
            return arr[0] *= +arr[1];
        default:
            return arr[0];
    }
}
function showInfo(act) {
    !(tinfo === undefined) ? info[tinfo].classList.remove("active") : null
    tinfo = act
    info[tinfo].classList.add("active")
}

function inp(num) {
    !(num % 1) ? input.textContent = num : input.textContent = num.toFixed(3);

}
function numb(a) {
    num[clock] = parseInt(num[clock] + a.textContent)
    inp(num[clock]);
}


