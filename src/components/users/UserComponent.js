import React, {useEffect, useState} from 'react';
import Title from "../../containers/Title";
import {Paper, SpanWrapper} from "../orders/OrderComponent";
import {clients} from "../../context/data";
import {OverlayTrigger, Tooltip} from "react-bootstrap";

const UserComponent = () => {

        const columns = [
            {
                key: 'firstname',
                value: 'First Name'
            },
            {
                key: 'lastname',
                value: 'Last Name'
            },
            {
                key: 'email',
                value: 'Email'
            }, {
                key: 'phone',
                value: 'Phone'
            }, {
                key: 'username',
                value: 'Username'
            }, {
                key: 'password',
                value: 'Password'
            }, {
                key: 'role',
                value: 'Role'
            }, {
                key: 'status',
                value: 'Status'
            }, {
                key: 'actions',
                value: 'Actions'
            }
        ];
        const [handledPwd, setHandledPwd] = useState([]);

        useEffect(() => {
            const items = [];
            clients && clients.map(client => {
                const item = {
                    username: client.username,
                    password: client.password,
                    hidden: '*****',
                }
                items.push(item);
            })

            setHandledPwd([...items]);

        }, []);

        const getPassword = username => {
            for (let i in handledPwd) {
                if (handledPwd[i].username === username) {
                    return handledPwd[i].hidden
                }
            }
        }

        const handleClick = username => {
            const all = handledPwd;
            for (let i in all) {
                if (all[i].username === username) {
                    all[i].hidden = all[i].password
                }
            }
            setHandledPwd([...all]);

            setTimeout(() => {
                for (let i in all) {
                    if (all[i].username === username) {
                        all[i].hidden = '*****'
                    }
                }
                setHandledPwd([...all]);
            }, 3000);

        }

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title title="Client Management"/>
                        <Paper>
                            <table className="table" style={{fontSize: 14}}>
                                <thead className="text-center" style={{fontFamily: 'Lato_semibold'}}>
                                <tr>
                                    {columns && columns.map(column =>
                                        <th key={column.key} scope="col" style={{fontFamily: 'Lato'}}>
                                            {column.value}
                                        </th>
                                    )}
                                </tr>
                                </thead>
                                <tbody className="text-center">
                                {clients && clients.map(client =>
                                    <tr style={{fontFamily: 'Lato'}} key={client.id}>
                                        {columns && columns.map(column =>
                                            column.key === 'password' ? (
                                                    <td key={column.key} className="text-center">
                                                        {getPassword(client.username)}
                                                    </td>
                                                ) :
                                                column.key === 'status' ? (
                                                        <td key={column.key} className="text-center">
                                                            <SpanWrapper width={100} color="#FFF" padding='5px 20px'
                                                                         bgColor={client[column.key] === 'active' ? 'rgb(124, 197, 181)' : '#fb9b9b'}>
                                                                {client[column.key]}
                                                            </SpanWrapper>

                                                        </td>
                                                    ) :
                                                    column.key === 'actions' ? (
                                                            <td key={column.key}>
                                                                <OverlayTrigger  placement="bottom" overlay={(props) => (
                                                                    <Tooltip id="tooltip-top" {...props}>
                                                                        Password
                                                                    </Tooltip>
                                                                )}>
                                                                    <span role="button" className="mr-1"
                                                                          onClick={() => handleClick(client.username)}>
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             width="22px"
                                                                             height="30px" fill="rgb(53, 132, 167)"
                                                                             className="bi bi-record-circle"
                                                                             viewBox="0 0 16 16">
                                                                          <path
                                                                              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                                        </svg>
                                                                    </span>
                                                                </OverlayTrigger>

                                                                <OverlayTrigger placement="bottom" overlay={(props) => (
                                                                    <Tooltip id="tooltip-top" {...props}>
                                                                        Update
                                                                    </Tooltip>
                                                                )}>
                                                                    <span role="button">
                                                                        <svg fill="#1c8c34" width="27px" height="30px"
                                                                             viewBox="0 0 24 24"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M12.5,10.2071068 L8,14.7071068 L8,16 L9.29289322,16 L13.7928932,11.5 L12.5,10.2071068 Z M13.2071068,9.5 L14.5,10.7928932 L15.7928932,9.5 L14.5,8.20710678 L13.2071068,9.5 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M14.8535534,7.14644661 L16.8535534,9.14644661 C17.0488155,9.34170876 17.0488155,9.65829124 16.8535534,9.85355339 L9.85355339,16.8535534 C9.7597852,16.9473216 9.63260824,17 9.5,17 L7.5,17 C7.22385763,17 7,16.7761424 7,16.5 L7,14.5 C7,14.3673918 7.05267842,14.2402148 7.14644661,14.1464466 L14.1464466,7.14644661 C14.3417088,6.95118446 14.6582912,6.95118446 14.8535534,7.14644661 Z"/>
                                                                        </svg>
                                                                    </span>
                                                                </OverlayTrigger>

                                                                <OverlayTrigger placement="bottom" overlay={(props) => (
                                                                    <Tooltip id="tooltip-top" {...props}>
                                                                        Delete
                                                                    </Tooltip>
                                                                )}>
                                                                    <span role="button">
                                                                        <svg width="28px" height="30px"
                                                                             viewBox="0 0 1024 1024" fill="#d8503d"
                                                                             className="icon"
                                                                             version="1.1"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6 76-76 177.6-118.4 285.6-118.4 108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4z m0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z"
                                                                                fill=""/>
                                                                            <path
                                                                                d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z"
                                                                                fill=""/>
                                                                            <path d="M328 340.8l32-31.2 348 348-32 32z"
                                                                                  fill=""/>
                                                                        </svg>
                                                                    </span>
                                                                </OverlayTrigger>

                                                            </td>
                                                        )
                                                        : (
                                                            <td key={column.key}>
                                                                {client[column.key]}
                                                            </td>
                                                        )
                                        )}
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </Paper>
                    </div>
                </div>
            </React.Fragment>
        );
    }
;

export default UserComponent;
