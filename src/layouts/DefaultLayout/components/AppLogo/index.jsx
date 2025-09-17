import styles from "./AppLogo.module.scss";
import f8Icon from "../../../../assets/images/f8_icon.png";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import { useEffect, useState } from "react";

export default function AppLogo() {
    const [back, setBack] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if(back) navigate("/");
    }, [back, navigate])

    return <div className={styles.appLogo} onClick={() => setBack(true)}>
        <img src={f8Icon} className={styles.logo} alt="" />
        <span>Học Lập Trình Để Đi Làm</span>
    </div>
}