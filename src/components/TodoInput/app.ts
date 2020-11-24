let favoriteActivities: string[];
favoriteActivities = ['hello']

function addAndHandle(n1: number, n2: number, cb: (n: number) => void) {
  const result = n1 + n2;
  cb(result)
}
addAndHandle(10, 20, (result) => {
  console.log(result)
})

// function getErrorMessage(message: string, code: number): never {
//   throw {
//     message,
//     code
//   }
// }
// getErrorMessage('An error message here', 500)







