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


const membersSubmit = function(f) {
  const inputTextObject = f['input-text'];
  try {
    const evalReturn = eval(inputTextObject.value);
    console.log(evalReturn);
  } catch(error) {
    console.error(error);
    alert(error);
    return false;
  }
}
const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
}

const membersCreate = function(member) {
  members.push(member);
  membersSet();
  return members;
};

const membersRead = function() {
  const t = document.getElementById('name');
  t.innerHTML = '';
  for (let index in members) {
    t.innerHTML += '<input type="text" name="members-name" value="' + members[index] + '">';
    t.innerHTML += '<button onclick="membersDelete(' + index + ')">Delete</button>';
    t.innerHTML += '\n';
  }
  console.log('Readed', members);
  return members;
}

const membersDelete = function(index) {
  members.splice(index, 1)
  membersSet();
  return membersRead();
}

const membersUpdate = function(index, member){
  members[index] = member;
  membersSet();
  return members;

}

membersRead();

const testFunction = function() {
  return undefined;
};