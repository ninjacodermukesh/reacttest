import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { RegisterModal } from "../../pages/UserList/RegisterModal";

export const Header: React.FC = () => {
    const { t } = useTranslation();
    const [registerModal, setRegisterModal] = useState<boolean>(false);

    const handleOpenRegisterModal = () => {
        setRegisterModal(true);
    }

    const handleCloseRegisterModal = () => {
        setRegisterModal(false);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid">
                {/* <button className="btn btn-primary" id="sidebarToggle">Toggle Menu</button> */}
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <p className="nav-link" onClick={()=>handleOpenRegisterModal()}>{t('Buttons.register_user')}</p>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#!">
                                Link
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
            {registerModal && (
                <RegisterModal onHide={handleCloseRegisterModal} show={registerModal} />
            )
            }
        </nav>
    );
};
