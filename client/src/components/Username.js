import React, {useState} from 'react';

export default function Username () {

  const [userInfo, setUserInfo] = useState({name:'', code:''})

  const postUserData = (userInfo) => {
    fetch('http://localhost:3000/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: userInfo.name,
      code: userInfo.code,
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  }
  const handleChange = (key, event) => {
    console.log('handleChange: ', key)
    let newInfo = userInfo;
    newInfo[key] = event.target.value
    setUserInfo(newInfo)
    console.log('setUserInfo')
  }

  const handleSubmit = (event) => {
    console.log('handleSubmit')
    postUserData(userInfo)
    event.preventDefault();
  }
  return (
    <div>
      <h2>username</h2>
         <input type="text" name="name" onChange={(event) => handleChange('name', event)}></input>
      <h2>password</h2>   
         <input type="text" name="code" onChange={(event) => handleChange('code', event)}></input>
         <button type="button" onClick={(e) => handleSubmit(e)} >SUBMIT</button>
         <br>
         </br>
    </div>
    )
}