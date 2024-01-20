import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { useTranslation } from "react-i18next";

import { RootState, UserData } from "../../types/types";
import { PopupModal } from "../../components"
import { doEditUser } from "../../store/actions/userActions";

interface EditModalProps {
    show: boolean,
    onHide: () => void,
    userData:UserData
}
export const EditModal: React.FC<EditModalProps> = ({ show, onHide ,userData}) => {
    const dispatch = useDispatch<ThunkDispatch<RootState, any, Action>>();
    const navigate=useNavigate();
    const {t} =useTranslation();
    
    const handleResetForm = () => {
        Formik.resetForm();
    }

    const Formik = useFormik({
        initialValues: {
            id:userData?.id,
            fullName: userData?.fullName ? userData?.fullName :'',
            userName: userData?.userName ? userData?.userName :''
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Fullname is required!"),
            userName: Yup.string().required("Username is required!")
        }),
        onSubmit: (values) => {
            if (Formik.isValid && Formik.dirty) {
                const userPaylod = {
                    ...values,
                }
                dispatch(doEditUser(userPaylod)).then((res: any) => {                    
                    if (res?.status === 200 && res?.success) {
                        alert("User updated successfully.");
                        onHide();
                        navigate("/users");
                    }
                })
            }
        }
    })

    return (
        <div className="container-fluid">
            <PopupModal title={t('ModalTitles.edit_user')} onHide={onHide} show={show} >
                <form onSubmit={Formik.handleSubmit}>
                    <div className="row">
                        <div className="col-md-12 mb-1">
                            <div className="form-group">
                                <label>{t("FieldHeadings.fullname")}:</label>
                                <input name="fullName" placeholder="Enter fullname" type="text" className="form-control" value={Formik.values.fullName} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                                {Formik.errors.fullName && Formik.touched.fullName &&
                                    (
                                        <p> {Formik.errors.fullName}</p>
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-md-12 mt-1">
                            <div className="form-group">
                                <label>{t("FieldHeadings.username")}:</label>
                                <input name="userName" placeholder="Enter username" type="text" className="form-control" value={Formik.values.userName} onChange={Formik.handleChange} onBlur={Formik.handleBlur} />
                                {Formik.errors.userName && Formik.touched.userName &&
                                    (
                                        <p> {Formik.errors.userName}</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <Row>
                        <div className="col-md-12">
                            <div className="formGroup d-flex justify-content-center mt-3">
                                <Button type="submit" style={{ marginRight: '5px' }}>
                                {t("Buttons.submit")}
                                </Button>
                                <Button type="button" onClick={() => handleResetForm()}>
                                {t("Buttons.reset")}
                                </Button>
                            </div>
                        </div>
                    </Row>
            </form>
        </PopupModal>

        </div >
    )
}