import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>

      <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwPIG4fjoxT0oGYaddYashbzzShyKJYjLjlQZk7dzDYBReKoGs&usqp=CAU' />
      </div>
      <div className={s.descriptionBlock}>
        ava + desc
      </div>
      
    </div>
  );
}

export default ProfileInfo;