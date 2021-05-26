import React,{useEffect} from 'react';

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log(user);
  },  [user]);

    return (
      <div>
        <b style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
        >
          {user.username}
        </b>
          &nbsp;
           <span>({user.email})</span>
        <button onClick={() => onRemove(user.id)}>삭제</button>
      </div>
    );
  }

function UserList({users, onRemove, onToggle}) {
    

    return (
        /*<div>
      <div>
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[1].email})</span>
      </div>
    </div>*/
    /*
    <>
        <User user ={users[0]}></User>
        <User user ={users[1]}></User>
        <User user ={users[2]}></User>
    </>
    */
    <>
        {users.map(item => (
            <User 
              user={item} 
              key={item.id} 
              onRemove={onRemove} 
              onToggle={onToggle}
              >

            </User>

        ))}
    </>
    );
}

export default UserList;