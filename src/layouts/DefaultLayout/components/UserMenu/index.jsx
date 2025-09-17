import styles from "./UserMenu.module.scss";
import avatar from "../../../../assets/images/avatar.png"
import { useEffect, useState } from "react";

export default function UserMenu() {
    const [file, setFile] = useState(null);

    useEffect(() => {
       return () => {
        URL.revokeObjectURL(file)
       } 
    },[file]);

    const handleAvatar = (e) => {
        const image = e.target.files[0];
        const imageLink = URL.createObjectURL(image);
        console.log(imageLink);
        setFile(imageLink);
    };

    return <div className={styles.avatar}>
        <label>
            <input hidden type="file" onChange={handleAvatar} />
            <img src={file || avatar} alt="avatar" />
        </label>
    </div>
}