var jsonValidator = document.getElementById('json-validator');
var nowDate = document.getElementById('now-date');

var topContent = document.getElementById("top-content");
var cardsContent = document.getElementById("cards-content");
var dropIt = document.getElementById("drop-it");
var utils = document.getElementById("utils");
var utilsBtn = document.getElementById("utils-btn");
var utilsTimer = document.getElementById("utils-timer");
var timer = 0;

const nswInfo = document.querySelector('#nsw-info');
nswInfo.addEventListener('click', () => {
    window.open('./assets/infos-workflow.png', '_blank', 'width=1215,height=485');
});

const sgdInfo = document.querySelector('#sgd-info');
sgdInfo.addEventListener('click', () => {
    window.open('./assets/infos-sgd.png', '_blank', 'width=796,height=461');
});

const aTag = document.querySelector('a');
aTag.addEventListener('click', () => {
    const textToCopy = aTag.innerText;
    navigator.clipboard.writeText(textToCopy).then(()=>{
        aTag.style.color = '#22ff22';
    }).catch( err =>{
        aTag.style.color = '#ff2222';
        alert('Erro ao copiar o texto: '+ err);
    });
});

const defaultTopContentClasses = topContent.className;
const defaultCardsContentClasses = cardsContent.className;
const defaltDropItInnerText = dropIt.innerText;
const innerTextsList = Object.freeze({
    0: 'Good!!',
    1: 'Try again',
    2: 'Hmmm..',
    3: 'Indeed',
    4: "Are you sure?",
    5: "Great!!",
    6: "Yes, of course",
    7: "Cheese me"
})

function navigate(url){
    window.open(url);
}

function relogio(){
    let today = new Date();
    nowDate.innerHTML = today.toLocaleString().replace(',',' - ');
}
setInterval(relogio, 1000);

function resetDrop(){
    topContent.className = topContent.className + ' reset-drop';
    cardsContent.className = cardsContent.className + ' reset-drop';
    setTimeout(()=>{
        topContent.className = defaultTopContentClasses;
        cardsContent.className = defaultCardsContentClasses;
        dropIt.innerText = innerTextsList[Math.floor(Math.random() * (7)).toString()];
    }, 3000);
}

function setSetupDrop(){
    if (!topContent.classList.contains('setup-drop')){
        topContent.className = topContent.className + ' setup-drop';
        cardsContent.className = cardsContent.className + ' adapt-cards-content';
    }
    else{
        resetDrop();
    }
}
dropIt.onclick = setSetupDrop;

function utilsButton(){
    utils.classList.add('show');
    utils.classList.remove('hidden');
    utilsBtn.classList.remove('show');
    utilsBtn.classList.add('hidden');
    
    timer = 6;
    utilsTimer.innerText = timer;
    const timerInterval = setInterval(() => {
        timer--;
        utilsTimer.innerText = timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
            utils.classList.remove('show');
            utils.classList.add('hidden');
            utilsBtn.classList.add('show');
            utilsBtn.classList.remove('hidden');
        }
    }, 1000);
}
utilsBtn.onclick = utilsButton;

jsonValidator.onclick = () => {
    const param = "https://jsonlint.com/";
    navigate(param);
}

linkedin.onclick = () => {
    const param = "https://www.linkedin.com/";
    navigate(param);
}

gepeto.onclick = () => {
    const param = "https://chatgpt.com/";
    navigate(param);
}

helpdesk.onclick = () => {
    const param = "https://google.com/";
    navigate(param);
}

intra.onclick = () => {
    const param = "https://google.com/";
    navigate(param);
}

sgd.onclick = () => {
    const param = "https://google.com/";
    navigate(param);
}

prd.onclick = () => {
    const param = "https://google.com/";
    navigate(param);
}

dev.onclick = () => {
    const param = "https://google.com/";
    navigate(param);
}

qa.onclick = () => {
    const param = "https://google.com/";
    navigate(param);
}

nsw.onclick = () => {
    const param = "https://google.com/";
    navigate(param);
}

outlook.onclick = () => {
    const param = "https://google.com/";
    navigate(param);
}

planner.onclick = () => {
    const param = "https://google.com/";
    navigate(param);
}