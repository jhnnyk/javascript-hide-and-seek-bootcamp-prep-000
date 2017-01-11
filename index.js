function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var rankedListItems = document.querySelectorAll('.ranked-list li');

  for (var i = 0; i < rankedListItems.length; i++) {
    var rank = parseInt(rankedListItems[i].innerHTML);
    rank += n;
    rankedListItems[i].innerHTML = rank.toString();
  }
}

function deepestChild() {
  var grandNode = document.getElementById('grand-node');
  var child = grandNode.children;

  while (child.children) {
    child = child.children[0];
  }

  return child[0];
}
