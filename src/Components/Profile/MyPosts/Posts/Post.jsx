import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://psv4.userapi.com/c856236/u115957180/docs/d9/156d7bf272dc/KIBORG.jpg?extra=xCt0ecjN1wRpMAQ5-YIMHfHXRQ6lSduMBK220sgBtJc4EvddA4vAG22bNGDI95slU3u8WwKOlGFf-AEzuRJjCTRlcqwEGhQpNoqffKYzxFfGKEH1KujHAj_SjKf0q0M79m4qAxC8OX18pOz1dzZn5U8' />
      {props.message}
      <div>
        <span>like {props.count}</span>
      </div>
    </div>

  );
}

export default Post;