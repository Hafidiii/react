import React, {useEffect, useState} from 'react';
import Title from "../../containers/Title";
import {ButtonWrapper, Paper} from "../orders/OrderComponent";
import {Button, Modal, OverlayTrigger, Tooltip} from "react-bootstrap";
import {connect, useDispatch} from "react-redux";
import {actionOnUser, allUsers} from "../../actions/authService";
import RejectIcon from "../../assets/svg/cancel-close-svgrepo-com.svg";

const columns = [
    {
        key: 'fullName',
        value: 'Full Name'
    },
    {
        key: 'lastName',
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
    },
    {
        key: 'role',
        value: 'Profile'
    }, {
        key: 'status',
        value: 'Status'
    }, {
        key: 'actions',
        value: 'Actions'
    }
];
const UserComponent = (props) => {

    const [warning, setWarning] = useState(false);
    const [action, setAction] = useState('block');
    const [selected, setSelected] = useState({});

    const {clients} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        if (clients && clients.length === 0) {
            dispatch(allUsers());
        }
    }, [clients]);

    const handleClose = () => {
        setWarning(false);
    };

    const handleBlockUser = data => {
        setWarning(true);
        setAction('block')
        setSelected(data);
    };

    const handleReactivateUser = data => {
        setWarning(true);
        setAction('reactivate')
        setSelected(data);
    };

    return (
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
                                        column.key === 'fullName' ? (
                                                <td key={column.key} className="text-center">
                                                    {`${client['firstName']} ${client['lastName']}`}

                                                </td>
                                            ) :
                                            column.key === 'status' ? (
                                                <td key={column.key} className="text-center">
                                                    {client[column.key] !== 'ACTIVE' ? (
                                                        <OverlayTrigger placement="bottom" overlay={(props) => (
                                                            <Tooltip id="tooltip-top" {...props}>
                                                                INACTIVE
                                                            </Tooltip>
                                                        )}>
                                                            <span role="button">
                                                                <img src={RejectIcon} alt='reject icon'/>
                                                            </span>

                                                        </OverlayTrigger>
                                                    ) : (
                                                        <OverlayTrigger placement="bottom" overlay={(props) => (
                                                            <Tooltip id="tooltip-top" {...props}>
                                                                ACTIVE
                                                            </Tooltip>
                                                        )}>
                                                            <span role="button">
                                                                 <svg xmlns="http://www.w3.org/2000/svg" width="35"
                                                                      height="22"
                                                                      viewBox="0 0 18 18">
                                                                    <g id="Butt_valider" data-name="Butt valider"
                                                                       transform="translate(-18.651 -0.396)">
                                                                        <rect id="Rectangle_558_copie_2"
                                                                              data-name="Rectangle 558 copie 2"
                                                                              width="18" height="18" rx="9"
                                                                              transform="translate(18.651 0.396)"
                                                                              fill="#8dc6bf"/>
                                                                        <g id="Groupe_52028" data-name="Groupe 52028"
                                                                           transform="translate(29.074 4.548) rotate(45)">
                                                                            <path id="Tracé_12239"
                                                                                  data-name="Tracé 12239"
                                                                                  d="M2.815,0V6.814L0,6.84"
                                                                                  transform="translate(0 0)"
                                                                                  fill="none" stroke="#fff"
                                                                                  stroke-linecap="round"
                                                                                  strokeWidth="3"/>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </span>

                                                        </OverlayTrigger>
                                                    )}


                                                </td>
                                            ) : column.key === 'role' ? (
                                                    <td key={column.key} className="text-center">
                                                        {client['roles'] && client['roles'][0] && client['roles'][0].roleName}
                                                    </td>
                                                ) :
                                                column.key === 'actions' && client['status'] === 'ACTIVE' ? (
                                                    <td key={column.key}>
                                                        <OverlayTrigger placement="bottom" overlay={(props) => (
                                                            <Tooltip id="tooltip-top" {...props}>
                                                                Block
                                                            </Tooltip>
                                                        )}>
                                                                <span role="button"
                                                                      onClick={() => handleBlockUser(client.id)}>
                                                                    <svg width="28px" height="30px"
                                                                         viewBox="-1.6 -1.6 19.20 19.20"
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         fill="#000000" stroke="#000000"
                                                                         stroke-width="0.00016"
                                                                         transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g
                                                                        id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                                                                        id="SVGRepo_tracerCarrier"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke="#CCCCCC" stroke-width="0.032"></g><g
                                                                        id="SVGRepo_iconCarrier"> <path fill="#ec6f6f"
                                                                                                        fill-rule="evenodd"
                                                                                                        d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M3,8 C3,10.7614237 5.23857625,13 8,13 C9.01910722,13 9.96700318,12.6951083 10.7574478,12.1715651 L3.8284349,5.24255219 C3.30489166,6.03299682 3,6.98089278 3,8 Z M8,3 C6.98089278,3 6.03299682,3.30489166 5.24255219,3.8284349 L12.1715651,10.7574478 C12.6951083,9.96700318 13,9.01910722 13,8 C13,5.23857625 10.7614237,3 8,3 Z"></path> </g></svg>
                                                                </span>
                                                        </OverlayTrigger>

                                                    </td>
                                                ) : column.key === 'actions' && client['status'] !== 'ACTIVE' ? (
                                                        <td key={column.key}>
                                                            <OverlayTrigger placement="bottom" overlay={(props) => (
                                                                <Tooltip id="tooltip-top" {...props}>
                                                                    Enable
                                                                </Tooltip>
                                                            )}>
                                                                <span role="button"
                                                                      onClick={() => handleReactivateUser(client.id)}>
                                                                    <svg width="28px" height="23px"
                                                                         viewBox="0 0 16.00 16.00"
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         fill="#000000" stroke="#000000"
                                                                         stroke-width="0.00016"><g
                                                                        id="SVGRepo_bgCarrier" stroke-width="0"></g><g
                                                                        id="SVGRepo_tracerCarrier"
                                                                        stroke-linecap="round" stroke-linejoin="round"
                                                                        stroke="#CCCCCC" stroke-width="0.064"></g><g
                                                                        id="SVGRepo_iconCarrier"> <path fill="#3f859d"
                                                                                                        fill-rule="evenodd"
                                                                                                        d="M5.23331,0.493645 C6.8801,-0.113331 8.6808,-0.161915 10.3579,0.355379 C11.4019,0.6773972 12.361984,1.20757325 13.1838415,1.90671757 L13.4526,2.14597 L14.2929,1.30564 C14.8955087,0.703065739 15.9071843,1.0850774 15.994017,1.89911843 L16,2.01275 L16,6.00002 L12.0127,6.00002 C11.1605348,6.00002 10.7153321,5.01450817 11.2294893,4.37749065 L11.3056,4.29291 L12.0372,3.56137 C11.389,2.97184 10.6156,2.52782 9.76845,2.26653 C8.5106,1.87856 7.16008,1.915 5.92498,2.37023 C4.68989,2.82547 3.63877,3.67423 2.93361,4.78573 C2.22844,5.89723 1.90836,7.20978 2.02268,8.52112 C2.13701,9.83246 2.6794,11.0698 3.56627,12.0425 C4.45315,13.0152 5.63528,13.6693 6.93052,13.9039 C8.22576,14.1385 9.56221,13.9407 10.7339,13.3409 C11.9057,12.7412 12.8476,11.7727 13.4147,10.5848 C13.6526,10.0864 14.2495,9.8752 14.748,10.1131 C15.2464,10.351 15.4575,10.948 15.2196,11.4464 C14.4635,13.0302 13.2076,14.3215 11.6453,15.1213 C10.0829,15.921 8.30101,16.1847 6.57402,15.8719 C4.84704,15.559 3.27086,14.687 2.08836,13.39 C0.905861,12.0931 0.182675,10.4433 0.0302394,8.69483 C-0.122195,6.94637 0.304581,5.1963 1.2448,3.7143 C2.18503,2.2323 3.58652,1.10062 5.23331,0.493645 Z M6,5.46077 C6,5.09472714 6.37499031,4.86235811 6.69509872,5.0000726 L6.7678,5.03853 L10.7714,7.57776 C11.0528545,7.75626909 11.0784413,8.14585256 10.8481603,8.36273881 L10.7714,8.42224 L6.7678,10.9615 C6.45867857,11.1575214 6.06160816,10.965274 6.00646097,10.6211914 L6,10.5392 L6,5.46077 Z"></path> </g></svg>
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

                <Modal size="lg" show={warning} onHide={() => setWarning(false)} centered
                       style={{fontFamily: 'Lato'}}>
                    <Modal.Header style={{backgroundColor: '#303c50', color: '#fff', fontFamily: 'Lato_light'}}>
                        <Modal.Title>Warning</Modal.Title>
                        <Button onClick={handleClose}
                                style={{backgroundColor: "transparent", borderColor: "transparent"}}
                                data-bs-dismiss="modal"
                                data-bs-target="#exampleModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor"
                                 className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path
                                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </Button>
                    </Modal.Header>
                    <Modal.Body style={{padding: '4rem 1.2rem', fontSize: 20, fontFamily: 'Lato_light'}}>
                        {`Do you really want to ${action === 'block' ? 'block' : 'reactivate'} this customer ?`}
                    </Modal.Body>

                    <div className="d-flex justify-content-sm-between" style={{padding: '0.9rem 2rem'}}>
                        <ButtonWrapper bgColor='#E7E8EB' color="#606779" onClick={handleClose}>
                            Cancel
                        </ButtonWrapper>
                        <div>
                            <ButtonWrapper bgColor={'#606779'} color={"#FFF"} className="mr-2" onClick={handleClose}>
                                Reset
                            </ButtonWrapper>
                            <ButtonWrapper
                                bgColor={action === 'block' ? '#C70039' : '#D6AE4F'}
                                color='#FFF'
                                onClick={() => dispatch(actionOnUser(selected, action))}>
                                {action === 'block' ? 'Block' : 'Enable'}
                            </ButtonWrapper>
                        </div>

                    </div>
                </Modal>
            </div>

        );
    }
;

const mapStateToProps = state => {
    return {
        clients: state.auth.clients,
    }
}
export default connect(mapStateToProps)(UserComponent);
