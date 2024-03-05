import React, { useEffect, useState } from "react";
//1.useEffect(callback)
// callback luon duoc goi sau componet re-render
// goi callback sau khi component them element vao DOM
//2.useEffect(callback,[]) + dùng trong trường hợp goi api mot lan
//chi callback 1 lan sau khi component mounted
//3.useEffect(callback,[deps]) [deps] la mot bien chua gia tri du lieu
//callback se duoc goi lai moi khi deps thay doi
// callback function luon duoc goi truoc khi component unmounted
// cleanup function luon duoc foi truoc khi component unmounted
// cleanup function luon duoc goi truoc khi calback duoc goi (tru lan mounted)
const tabs = ["posts", "comments", "albums"];

function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    console.log("type changed");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("removeEventlistener");
    };
  }, []);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  background: "#333",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts && posts.map((post) => <li key={post.id}>{post.title || post.name}</li>)}
        {showGoToTop && (
          <button style={{ position: "fixed", right: 20, bottom: 20 }}>
            Go to Top
          </button>
        )}
      </ul>
    </div>
  );
}

export default Content;
