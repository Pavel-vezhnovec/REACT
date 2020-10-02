import React from "react";
import styles from './users.module.css';

let Users = (props) => {

   debugger
    if (props.users.length === 0) {
        props.setUsers(
            [
            {
                id: 1, photoUrl: 'https://psv4.userapi.com/c856236/u115957180/docs/d9/c5722cd887d1/KIBORG.jpg?extra=XuNZCsYGcpyYJ_-ArviYd3rRMNQSuA7oTKR6f6ZmldGxUUWkDnoWuiL6a7q08OSmKyZLgl0gHDPm904C-XVviEwF6BOjFwGp08ck7pyZZNgFZo5QruBrh5SjjU2JOZ6C8PV58i_cDpoh85fFU59d3XAR',
                followed: true, fullname: 'Pavel', status: ' I am a rich', location: { city: 'Minsk', country: 'Belarus' }
                },
            {
                id: 2, photoUrl: 'https://psv4.userapi.com/c856236/u115957180/docs/d9/c5722cd887d1/KIBORG.jpg?extra=XuNZCsYGcpyYJ_-ArviYd3rRMNQSuA7oTKR6f6ZmldGxUUWkDnoWuiL6a7q08OSmKyZLgl0gHDPm904C-XVviEwF6BOjFwGp08ck7pyZZNgFZo5QruBrh5SjjU2JOZ6C8PV58i_cDpoh85fFU59d3XAR',
                followed: true, fullname: 'ANtoha', status: ' I am a rich too', location: { city: 'Moscow', country: 'Russia' }
                },
            {
                id: 3, photoUrl: 'https://psv4.userapi.com/c856236/u115957180/docs/d9/c5722cd887d1/KIBORG.jpg?extra=XuNZCsYGcpyYJ_-ArviYd3rRMNQSuA7oTKR6f6ZmldGxUUWkDnoWuiL6a7q08OSmKyZLgl0gHDPm904C-XVviEwF6BOjFwGp08ck7pyZZNgFZo5QruBrh5SjjU2JOZ6C8PV58i_cDpoh85fFU59d3XAR',
                followed: false, fullname: 'Andrey', status: ' I am a poor rich', location: { city: 'Kiev', country: 'Ukraina' }
                }
            ]
        )    
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button> :
                            <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }

    </div>
}

export default Users;
