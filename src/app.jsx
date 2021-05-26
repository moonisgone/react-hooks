import './app.css';
import React, { useRef, useState , useMemo, useReducer } from 'react';
//import InputSample from './components/InputSample';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = e => {
    //console.log(e.target);
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);
  /*const i = Date.now();
  const moongon = {
      id : i,
      username: 'Moongon',
      email:'moongon1004@gamil.com',
  }
  users.push(moongon);
*/
  const nextId = useRef(4);

  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    console.log(id);
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  //const count = countActiveUsers(users);
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}></UserList>
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
