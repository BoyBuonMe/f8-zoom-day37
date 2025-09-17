import { useEffect, useState } from "react";
import DropDown from "../../../../components/DropDown";
import styles from "./SearchForm.module.scss";

// IMG
import course1 from "../../../../assets/course/f8_course_1.png";
import course2 from "../../../../assets/course/f8_course_2.png";
import course3 from "../../../../assets/course/f8_course_3.png";

// BLOG
import blog1 from "../../../../assets/blogs/blog_1.png";
import blog2 from "../../../../assets/blogs/blog_2.png";
import blog3 from "../../../../assets/blogs/blog_3.png";

// VIDEO
import imageVideo1 from "../../../../assets/imageVideo/imageVideo_1.png";
import imageVideo2 from "../../../../assets/imageVideo/imageVideo_2.png";
import imageVideo3 from "../../../../assets/imageVideo/imageVideo_3.png";

export default function SearchForm() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  const courses = [
    {
      title: "KHÓA HỌC",
      body: [
        {
          img: course1,
          name: "Lập Trình JavaScript Cơ Bản",
        },

        {
          img: course2,
          name: "Lập Trình JavaScript Nâng Cao",
        },

        {
          img: course3,
          name: "JavaScript Pro",
        },
      ],
    },

    {
      title: "BÀI VIẾT",
      body: [
        {
          img: blog1,
          name: "Không Nên Học JavaScript, Liệu Có Đúng Như Vậy?",
        },

        {
          img: blog2,
          name: "Xử Lý Bất Đồng Bộ Trong Javascript - Phần 1",
        },

        {
          img: blog3,
          name: "Chuyện  cũ xưa: Nên dùng === hay == để so sánh trong Javascript?",
        },
      ],
    },

    {
      title: "VIDEO",
      body: [
        {
          img: imageVideo1,
          name: 'Giải thích các trường hợp "phi lý" trong JavaScript?',
        },

        {
          img: imageVideo2,
          name: '"Học Xong" Javascript Có Giải Được "Code Thiếu Nhi"?',
        },

        {
          img: imageVideo3,
          name: "Fn.apply() method trong Javascript?",
        },
      ],
    },
  ];

  return (
    <div className={styles.search}>
      <div className={styles.wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={styles.icon}
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <input
          type="text"
          placeholder="Tìm kiếm khóa học, bài viết, video..."
          onClick={() => setOpen(!open)}
        />
      </div>

      { (
        <DropDown isOpen={open} onRequestClose={() => {
          setOpen(false);
        }}>
          <div className={styles.content}>
            {courses.map((course, index) => (
              <div key={index} className={styles.list}>
                <h4>{course.title}</h4>
                <hr />
                {course.body.map((courseItem, index) => (
                  <div key={index} className={styles.course}>
                    <img src={courseItem.img} alt="" />
                    <span>{courseItem.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </DropDown>
      )}
    </div>
  );
}
