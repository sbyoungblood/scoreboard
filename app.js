

let home = 0

let away = 0


function clickHome(){
  let homeElem = document.getElementById('home-score')
  home++
  homeElem.innerText = `${home}`
}

function clickAway(){
  let awayElem = document.getElementById('away-score')
  away++
  awayElem.innerText = `${away}`
}