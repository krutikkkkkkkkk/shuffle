function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function mixUp() {
	var input = document.getElementById("input").value.split("\n");
	var shuffled = shuffle(input);

	var output = document.getElementById("output");
shuffled.forEach(function(currentNumber) {
    output.innerHTML += currentNumber + "\n";
})
alert("Shuffling Successful")
}

function copy() {
  var copyText = document.getElementById("output");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
///Stack Overflow 


