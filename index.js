function getFirstSelector(string) {
  return document.querySelector(string)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < list.length; i++) {
    let child = list[i].children
    for (var j = 0; j < child.length; j++) {
      child[j].innerHTML = parseInt(child[j].innerHTML + n)
    }
  }
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children;

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let div = node.children[0]
  while (div) {
    node = div
    div = node.children[0]
  }
  return node
}
