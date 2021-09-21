window.addEventListener("load", init_tests);

function init_tests () {
  console.log("init_tests");
  run_test( test_1 );
  run_test( test__add );
  // run_test( test__show_result );
  // run_test( test__get_random_number__str );
  // run_test( test__get_random_number__1_6 );
}

function run_test ( test_name ) {
  let test_result = test_name("foo");
  console.log(test_name.name, "test result: ", test_result);
}

function test_1 ( val ) {
  console.log("test_1");
  return val;
}

// testing `result` function
// expect input value to be displayed as value of DOM element
function test__show_result () {
  // test setup
  const val = "hello";
  show_result(val);

  const result_el = document.getElementById("result");
  const result_val = result_el.textContent;

  let test_result = "fail";
  // test condition
  if (result_val === val) {
    test_result = "pass";
  }
  
  return test_result;
}


















// testing `get_random_number` function
// expect string argument to return 0 
function test__get_random_number__str () {
  // test setup
  const test_param = "hello";
  const result_val = get_random_number(test_param);

  let test_result = "fail";
  // test condition
  const expected_val = 0;
  if (result_val === expected_val) {
    test_result = "pass";
  }

  // test expectations
  console.log(`${arguments.callee.name} status: ${test_result}`, 
    {
      "_function": get_random_number.name,
      test_param,
      expected_val,
      result_val
    }
  );
  
  return test_result;
}


// testing `get_random_number` function
// expect argments (1,6) argument to return number greater than or equal to 1, and less than or equal to 6 
function test__get_random_number__1_6 () {
  // test setup
  const test_param_1 = 1;
  const test_param_2 = 6;
  const result_val = get_random_number(test_param_1, test_param_2);

  let test_result = "fail";
  // test condition
  const expected_val_1 = 1;
  const expected_val_2 = 6;
  if (result_val >= expected_val_1
    && result_val <= expected_val_2) {
    test_result = "pass";
  }

  // test expectations
  console.log(`${arguments.callee.name} status: ${test_result}`, 
    {
      "_function": get_random_number.name,
      test_param_1,
      test_param_2,
      expected_val_1,
      expected_val_2,
      result_val
    }
  );
  
  return test_result;
}


// testing `add` function
// expect (1,2,3) argument to return 6 
function test__add () {
  // test setup
  const params = [1, 2, 3];
  const result_val = add(...params);

  let test_result = "fail";
  // test condition
  const expected_val = 6;
  if (result_val === expected_val) {
    test_result = "pass";
  }
  
  return test_result;
}
