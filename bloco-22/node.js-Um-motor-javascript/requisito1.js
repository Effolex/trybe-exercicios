
function asyncFunc (param1, param2, param3) {
  return new Promise((resolve, reject) => {
    if (!Number(param1) && !Number(param2) && !Number(param3)) {
      return reject(new Error("Por favor informe um numero"));
    }
    const result = (+param1 + +param2) * +param3;
    return (result > 50 ) ? resolve(result)
    : reject("Valor muito baixo");
  });
}

function testAsyncfunction() {
  const randN = () => Math.floor(Math.random()*101);
  asyncFunc(randN(), randN(), randN())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

testAsyncfunction();

async function testAsyncFunction2() {
  const randN = () => Math.floor(Math.random()*101);
  const numbers = [randN(), randN(),randN()]
  console.log(numbers)
  try {
    const response = await asyncFunc(...numbers);
    console.log(response);
  } catch (error) {
    console.log(error);
    
  }
}

testAsyncFunction2();

