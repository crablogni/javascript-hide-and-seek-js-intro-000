function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
<<<<<<< HEAD
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li')
=======
  return document.querySelector('.target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
>>>>>>> c5db3f513e5d979f06068823d6186e3ec197555e
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n)
  }
}

function deepestChild(){
<<<<<<< HEAD
  let node = document.querySelector('#grand-node')
  let nextNode = node.children[0]

  while (nextNode){
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
=======
  const element = document.getElementById('app').querySelectAll('div.grand-node')
  return element
}
>>>>>>> c5db3f513e5d979f06068823d6186e3ec197555e
