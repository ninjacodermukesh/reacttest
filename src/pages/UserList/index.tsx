import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { useTranslation } from "react-i18next";
import { RootState, UserData } from '../../types/types';
import { Header, Layout, Sidebar } from "../../components";
import { doDeleteUser } from "../../store/actions/userActions";
import { EditModal } from "./EditModal";
import { ViewModal } from "./ViewModal";
import "./style.css";

export const UserListView: React.FC = () => {
    const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();
    const {t}=useTranslation();
    const userList = useSelector((state: RootState) => state.users.users);
    const [editModal, setEditModal] = useState<boolean>(false);
    const [viewModal, setViewModal] = useState<boolean>(false);
    const userInitialdetails = { id: 0, userName: "", fullName: "" };
    const [userDetails, setUserDetails] = useState<UserData>(userInitialdetails);

    const headerOptions = [t('FieldHeadings.id'), t('FieldHeadings.fullname'), t('FieldHeadings.username'), t('FieldHeadings.action')];

    const handleDeleteUser = (userDetails: UserData) => {
        dispatch(doDeleteUser(userDetails)).then((res) => {
            if (res?.status === 200 && res?.success) {
                alert("User deleted successfully.");
            }
        })
    }

    const handleCloseEditModal = () => {
        setEditModal(false);
        setUserDetails(userInitialdetails);
    }

    const handleEditModal = (userDetails: UserData) => {
        setUserDetails(userDetails);
        setEditModal(true);
    }

    const handleViewModal = (userDetails: UserData) => {
        setUserDetails(userDetails);
        setViewModal(true);
    }
    const handleCloseViewModal = () => {
        setViewModal(false);
        setUserDetails(userInitialdetails);
    }

    return (
        <Layout>
            <Sidebar />
            <div id="page-content-wrapper">
                <Header />
                <div className="userList">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    {headerOptions?.map((headings, index) => (
                                        <th key={`heading-${index}`}>{headings}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {userList?.length > 0 ? (
                                    userList.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td className="align-left">{user.fullName}</td>
                                            <td>{user.userName}</td>
                                            <td>
                                                <Button variant="secondary" className="action-button" onClick={() => {
                                                    handleViewModal(user)
                                                }}>
                                                    {t('Buttons.view_button')}
                                                </Button>
                                                <Button variant="secondary" className="action-button" onClick={() => {
                                                    handleEditModal(user)
                                                }}>
                                                    {t('Buttons.edit_button')}
                                                </Button>
                                                <Button variant="secondary" className="action-button" onClick={() => {
                                                    handleDeleteUser(user)
                                                }}>
                                                    {t('Buttons.delete_button')}
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4}>No user records found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                {editModal &&
                    (
                        <EditModal show={editModal} onHide={handleCloseEditModal} userData={userDetails} />
                    )
                }
                {viewModal &&
                    (
                        <ViewModal show={viewModal} onHide={handleCloseViewModal} userData={userDetails} />
                    )
                }
            </div>
        </Layout>
    );
};
