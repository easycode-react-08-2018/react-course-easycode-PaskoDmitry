import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
// import _ from 'lodash';
// import 'bootstrap3/dist/css/bootstrap.css';
// import 'bootstrap3/dist/css/bootstrap.min.css';

const mountNode = document.getElementById('app');
const button = document.getElementById('button');


const users = [
    {
        id: 1,
        fullName: 'Иванов Иван',
        avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
        birthdate: '1976-10-10',
        gender: 'мужской',
        address: 'ул. Звенигороская, 47б',
        email: 'ivanov@mail.ru'
    },
    {
        id: 2,
        fullName: 'Петров Петр',
        avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
        birthdate: '1957-01-14',
        gender: 'мужской',
        address: 'ул.Пушкиская, 13',
        email: 'ivanov@mail.ru'
    },
    {
        id: 3,
        fullName: 'Натальина Наталья',
        avatarUrl: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
        birthdate: '1990-07-03',
        gender: 'женский',
        address: 'ул. Лермонтова, 59',
        email: 'ivanov@mail.ru'
    }
];

let newUsers = users;
const arr = [{key:'birthdate', val:'Дата рождения'}, {key:'gender', val:'Пол'}, {key:'address', val:'Адрес'},{key:'email', val:'Email'} ];

const Table = (props) => {
    console.log(props.user);
	return (
		<table className={"table table-user-information"}>
            <tbody>
			{
                arr.map(data => {
                    console.log(data);
                    return (
                        <TableRow data={data} user={props.user}/>
                    )
                })
            }
            </tbody>
		</table>
	)
};

const TableRow = (props) => {
  return (
      <tr>
          <td>{props.data.val}</td>
          <td>{props.user[props.data.key]}</td>
      </tr>
  )
};

const UserContent = (props) => {
    return (

        props.users.map(user => {
            return (
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">{user.fullName}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 " align="center">
                                <img src="http://psdexport.com/storage/avatars/default.png" className="pull-left" />
                            </div>
                            <div>
                                <div className="col-md-3 col-lg-3 " align="center">

                                </div>
                                <div className=" col-md-9 col-lg-9">
                                    <Table user={user} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

    )
};

const Button = (props) => {
    return <button className="btn btn-primary" onClick={() => addUsers(props.users)}>Add users</button>
};

ReactDOM.render(<UserContent users={users}/>, mountNode);

ReactDOM.render(<Button users={users} />, button);


function addUsers(users) {
    newUsers = newUsers.concat(users);
    ReactDOM.render(<UserContent users={newUsers}/>, mountNode);
}