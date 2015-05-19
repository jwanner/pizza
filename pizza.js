	function myFunction() {
    var person = prompt("How many people?", "Enter a number");
    var preorder = person * (3/8);
        document.getElementById("result").innerHTML =
          Math.ceil(preorder);
}
