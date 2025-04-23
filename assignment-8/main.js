let one = document.querySelector('.one');
let two = document.querySelector('.two');
one.title = one.className;
two.title = two.className;
let textOne = one.innerHTML;
let textTow = two.innerHTML;
let a = textOne + ` ${two.attributes.length}`;
one.innerHTML = two.innerHTML;
two.innerHTML = a;

//swaping two scopes by using a third one