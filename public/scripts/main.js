const BanInput = document.getElementById('BanInput');       //Span
const SteamID64 = document.getElementById("SteamID");       //Input
const Check_Ban = document.getElementById('Check_Ban');     //Button
const loadingIcon = document.getElementById('loading');     //Span
const result = document.getElementById("result");           //Span
const SteamResult = document.getElementById('SteamResult'); //Div
const Retry = document.getElementById('Retry');             //Button
const myHeaders = new Headers();
const myConf = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};


function CheckBan(SID){
  BanInput.classList.replace('visible','hidden');
  loadingIcon.classList.replace('hidden','visible');

  return fetch(`https://marketplace.tf/api/Bans/GetUserBan/v1?steamid=${SID}`, myConf)
}

function CBClick(){
  CheckBan(SteamID64.value).then((verdict)=>{
    loadingIcon.classList.replace('visible','hidden');
    result.classList.replace('hidden','visible');
    window.verdict = verdict;
    console.log(verdict.json())
  })
}

function RetryClick(){
  result.classList.replace('visible','hidden');
  BanInput.classList.replace('hidden','visible');
}

Check_Ban.addEventListener('click', CBClick);
Retry.addEventListener('click', RetryClick);
