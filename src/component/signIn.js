// 임의 데이터
const users = [
    { id: "kim" , password: "123" },
    { id: "lee", password: "456" },
    { id: "park", password: "789" },
  ];
  

export function signIn({ id, password }) {
    const user = users.find((user) => user.id === id);
  
    if (!user) {
      throw new Error('Invalid ID');
    }
  
    if (user.password !== password) {
      throw new Error('Invalid password');
    }
  
    return user;
  }