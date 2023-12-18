import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [peaple, setpeaple] = useState(data);
  return( 
  <main>
    <section className='container'>
      <h3>{peaple.length} birthdays today</h3>
      <List peaple = {peaple}/>
      <button onClick={()=>setpeaple([]) }>clear all</button>
    </section>
  </main>
  );
}

export default App;
