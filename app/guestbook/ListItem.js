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
        const listItem = e.target.closest('.listitem');
        if (listItem) {
          listItem.style.opacity = 0;
          alert(data.message);
          setTimeout(() => {
            listItem.style.display = "none";
          }, 300);
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
        <div className="listitem rounded-lg p-1.5 sm:p-3 mb-1 sm:mb-3 shadow-md bg-gray-100 dark:bg-gray-800" key={i}>
          <h4 className="text-base sm:text-lg font-bold sm:mb-1">{result[i].content}</h4>
          <p className="text-sm sm:text-base text-gray-500 sm:mb-1">{result[i].authorName}</p>
          <span className="text-xs sm:text-base" onClick={(e) => handleDelete(result[i]._id, i, e)}>🗑삭제</span>
        </div>
      ))}
    </div>
  );
}