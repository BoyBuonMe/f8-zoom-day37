import { useState } from "react";
import DropDown from "../../../../components/DropDown";
import styles from "./MySources.module.scss";

// IMG
import mySource1 from "../../../../assets/imageMySources/mySource_1.png";
import mySource2 from "../../../../assets/imageMySources/mySource_2.png";

export default function MySources() {
  const [open, setOpen] = useState(false);

  const mySources = [
    {
      img: mySource1,
      title: "HTML CSS Pro",
      time: "Học cách đây 20 giờ trước",
    },

    {
      img: mySource2,
      title: "Fullstack Web",
      time: "Học cách đây 6 giờ trước",
    },
  ];

  return (
    <div
      className={styles.mySources}
      onClick={() => {
        setOpen(!open);
      }}
    >
      Khóa học của tôi
      {
        <DropDown isOpen={open} className={styles.drop}>
          <div className={styles.header}>
            <h3>Khóa học của tôi</h3>
            <span>Xem tất cả</span>
          </div>
          <div className={styles.content}>
            {mySources.map((mySource, index) => (
              <div key={index} className={styles.sourcesItem}>
                <img src={mySource.img} alt="" />
                <div className={styles.sourceInfo}>
                    <h4>{mySource.title}</h4>
                    <span>{mySource.time}</span>
                </div>
              </div>
            ))}
          </div>
        </DropDown>
      }
    </div>
  );
}
