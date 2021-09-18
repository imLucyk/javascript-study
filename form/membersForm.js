const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);

const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
}

const membersCreate = function(member) {
  members.push(member);
  membersSet();
  window.location.reload();
  return members;
};

const membersRead = function() {
  for (let i in members) {
    document.writeln(members[i]);
  }
  return members;
}

const membersDelete = function(index) {
  members.splice(index, 1)
  membersSet();
  window.location.reload();
  return members;
}

const membersUpdate = function(index, member){
  members[index] = member;
  membersSet();
  window.location.reload();
  return members;

}

membersRead();

const testFunction = function() {
  return NaN;
};