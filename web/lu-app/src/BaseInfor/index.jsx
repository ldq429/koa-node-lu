import React from 'react';
import {useState, useEffect} from 'react';

function Index() {
  const [baseInfor, setBaseInfor] = useState([
    {
      name: '小李恺頔',
      age: 24,
      email: 'XX@qq.com'
    }
  ]);
  const lis = baseInfor.map(item => (
    <li>
      <span>{item.name}</span>
      <span>{item.age}</span>
      <span>{item.email}</span>
    </li>
  ));
  return (<ul>
    {lis}
  </ul>);
}

export default Index;