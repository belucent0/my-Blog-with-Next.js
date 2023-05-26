"use client";

export default function ListItem({ result }) {
  const handleDelete = async (id, index, e) => {
    try {
      const response = await fetch("/api/guestbook/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (response.ok) {
        const listItem = e.target.closest('.list-item');
        if (listItem) {
          listItem.style.opacity = 0;
          alert(data.message);
          setTimeout(() => {
            listItem.style.display = "none";
          }, 1000);
        }
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("삭제 중 오류 발생:", error);
      alert(error.message);
    }
  };

  return (
    <div>
      {result.map((v, i) => (
        <div className="bg-white rounded-lg p-4 mb-5 shadow-md" key={i}>
          <h4 className="text-xl font-bold mb-1">{result[i].content}</h4>
          <p className="text-gray-500 mb-1">{result[i].authorName}</p>
          <span onClick={(e) => handleDelete(result[i]._id, i, e)}>🗑삭제</span>
        </div>
      ))}
    </div>
  );
}
