import React from 'react';

const List = ({peaple}) => {

  return (
    <>
      {peaple.map((person)=>{
        const {id,name,age,image} = person;
        return <article key={id} className='person'>
        <img src={image} alt={name} />  
        <div>
          <p>{age} years</p>
        </div>
        </article>
      }

      )}
    </>
  );
};

export default List;
