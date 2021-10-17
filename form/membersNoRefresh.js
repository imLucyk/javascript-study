const queryString = new URLSearchParams(window.location.search);
const nameText = queryString.get('input-text');

// const inputTextObjects = document.getElementsByName('input-text');
// const inputTextObject = inputTextObjects[0];

const inputTextObject = document.getElementsByName('input-text')[0];
inputTextObject.value = nameText;

const inputHiddens = queryString.getAll('input-hidden');
const inputHidden = inputHiddens[0];

inputTextObject.focus();
// inputTextObject.blur();

const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);

const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
}

const membersCreate = function(form) {
  const inputTextObject = form['input-text'];
  members.push(inputTextObject.value);
  inputTextObject.value = '';
  membersSet();
  return membersRead();
};

const membersRead = function() {
  const tagDivParent = document.getElementById('tag-div-parent');
  tagDivParent.innerHTML = '';
  const tagDivChild = document.getElementById('tag-div-child');
  for (let index in members) {
    const newDivChild = tagDivChild.cloneNode(true);
    tagDivParent.appendChild(newDivChild);
  }
  console.log('Readed', members);
  return members;
};


const membersDelete = function(index) {
  members.splice(index, 1)
  membersSet();
  return membersRead();
}

const membersUpdate = function(index) {
  const name = document.getElementsByName('members-name')[index].value;
  members[index] = name;
  membersSet();
  return membersRead();
};


membersRead();

const testFunction = function() {
  return undefined;
};