// // 임의 데이터
// const users = [
//   { email: "kim", password: "123" },
//   { email: "lee", password: "456" },
//   { email: "park", password: "789" },
// ];

// //   export function signIn({ id, password }) {
// //     const user = users.find(
// //       (user) => user.id === id && user.password === password
// //     );
// //     if (user === undefined) throw new Error();
// //     return user;
// //   }

// export default function SignUp({ email, password }) {
//   const user = users.find((user) => user.email === email);

//   if (!user) {
//     throw new Error("Invalid ID");
//   }

//   if (user.password !== password) {
//     throw new Error("Invalid password");
//   }

//   return user;
// }
