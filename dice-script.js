window.addEventListener("load", init_dice);

const result_el = document.getElementById("result");

function init_dice () {
  console.log("init_dice")
  const buttons = document.querySelectorAll("button");
  buttons.forEach( function (button) {
    button.addEventListener("click", roll_die);
  });
}

function roll_die (event) {
  const target_el = event.target;
  const faces = target_el.textContent;

  console.log(faces);

  let die_roll = get_random_number (1, faces);

  show_result(die_roll);
}

function get_random_number (min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  const range = max - min;
  // includes minimum and maximum
  return Math.floor(Math.random() * (range + 1) + min); 
}

function show_result (value) {
  result_el.textContent = value;
}



// get_random_number ( min, max ) {
//   this.random_seed = this.random_seed * 16807 % 2147483647;
//   if (arguments.length === 0){
//     return parseInt(this.random_seed/2147483647);
//   } else if (arguments.length === 1){
//     return parseInt((this.random_seed/2147483647) * min);
//   } else {
//     return parseInt((this.random_seed/2147483647) * (max - min) + min);
//   }
// }
