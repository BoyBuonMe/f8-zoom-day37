import { useState } from "react";
import Modal from "../../components/Modal";
import styles from "./ModalDemo.module.scss";
import imageDemo from "../../assets/imageMySources/mySource_2.png";

export default function ModalDemo() {
  const [open, setOpen] = useState(false);

  const handleRequestClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.modalDemo}>
      <h1>Modal Demo</h1>
      <button className={styles.openBtn} onClick={() => setOpen(true)}>
        Open Modal
      </button>
      {
        <Modal
          isOpen={open}
          onRequestClose={handleRequestClose}
          onAfterOpen={() => console.log("Modal đã mở")}
          onAfterClose={() => console.log("Modal đã đóng")}
          closeTimeoutMS={900}
          overlayClassName="custom-overlay"
          className="custom-modal"
          bodyOpenClassName="modal-open"
          htmlOpenClassName="modal-open"
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
        >
          <img src={imageDemo} alt="" />
          <div className={styles.body}>
            <h2>Xin Chào F8</h2>
            <p>
              Mình xin gửi lời cảm ơn chân thành đến F8 – nơi đã tạo ra một cộng
              đồng học lập trình đầy nhiệt huyết và bổ ích. Nhờ F8, mình đã có
              cơ hội tiếp cận những kiến thức nền tảng và thực tế một cách dễ
              hiểu, có hệ thống. Các khóa học miễn phí, tài liệu chất lượng cùng
              sự hỗ trợ tận tình từ cộng đồng đã giúp mình tự tin hơn trên hành
              trình học tập. F8 không chỉ là nơi học mà còn là động lực, là môi
              trường để mỗi người phát triển kỹ năng và đam mê. Xin cảm ơn F8
              rất nhiều!
            </p>
          </div>
        </Modal>
      }
    </div>
  );
}
