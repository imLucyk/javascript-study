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
  const tagPre = document.getElementById('tag-pre');
  for (let index in members) {
    tagPre.innerHTML += members[index] + '\n';
  }
  return members;
}

const membersDelete = function(index) {
  members.splice(index, 1)
  membersSet();
  return members;
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