var Sentence = prompt("Write Something");

Upper1 = function(Sentence) {
  return Sentence.charAt(0).toUpperCase()+
  Sentence.slice(1)
};

alert(Upper1(Sentence));
