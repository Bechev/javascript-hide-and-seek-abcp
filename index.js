function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return getFirstSelector('#nested .target');
}

function increaseRankBy(n){
  const lis =  document.querySelectorAll( '.ranked-list')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i])+n;
  }
}


function deepestChild(){
  var main = document.querySelector('div#grand-node')
  while(main.children){
    main = main.children;
  }
  return main;
}
