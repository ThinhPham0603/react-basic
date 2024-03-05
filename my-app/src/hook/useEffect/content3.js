import React, { useState, useEffect } from "react";

const lessons = [
  {
    id: 1,
    name: "Bai tap 1",
  },
  {
    id: 2,
    name: "Bai tap 2",
  },
  {
    id: 3,
    name: "Bai tap 3",
  },
];

function Content3() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessonId}`, handleComment);
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? "red" : "#333", 
              cursor: "pointer",
            }}
            onClick={() => setLessonId(lesson.id)}>
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Content3;
