"use client";
import React, { useState } from "react";

const Story = () => {
  // State for stories
  const [stories, setStories] = useState([
    {
      id: 1,
      image: "/images/photo_5774136002925937798_y.jpg",
      title: "طلابنا المميزون لهذا الاسبوع",
      date: "2024-10-08",
    },
    {
      id: 2,
      image: "/images/photo_5774136002925937804_y.jpg",
      title: "طلابنا المميزون لهذا الاسبوع",
      date: "2024-10-07",
    },
    {
      id: 3,
      image: "/images/photo_5774136002925937801_y.jpg",
      title: "طلابنا المميزون لهذا الاسبوع",
      date: "2024-10-07",
    },
  ]);

  // State for new story
  const [newStory, setNewStory] = useState({
    image: "",
    title: "",
    date: "",
  });

  // Add a new story
  const handleAddStory = (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    const newId = stories.length + 1;
    setStories([...stories, { ...newStory, id: newId }]);
    setNewStory({ image: "", title: "", date: "" });
  };

  // Handle image upload and set image URL
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewStory({ ...newStory, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Edit story
  const handleEditStory = (id, updatedStory) => {
    const updatedStories = stories.map((story) =>
      story.id === id ? updatedStory : story
    );
    setStories(updatedStories);
  };

  // Delete story
  const handleDeleteStory = (id) => {
    const updatedStories = stories.filter((story) => story.id !== id);
    setStories(updatedStories);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:mt-5 mb-10">
      <div className="mb-8">
        <h2 className="text-xl mb-4 text-[#8b0000]">اضافة طالب مميز</h2>
        <form onSubmit={handleAddStory} className="space-y-4 ">
          <input
            type="text"
            placeholder="عنوان القصة"
            value={newStory.title}
            onChange={(e) =>
              setNewStory({ ...newStory, title: e.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded outline-none"
            required
          />
          <input
            type="file"
            id="image-upload"
            onChange={handleImageUpload}
            className="hidden" // Hide the default file input
            required
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer flex flex-col items-center justify-center w-full h-60 border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 hover:bg-gray-100"
          >
            {newStory.image ? (
              <img
                src={newStory.image}
                alt="Preview"
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <>
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16l-4-4m0 0l4-4m-4 4h18m-6 4l4-4m0 0l-4-4"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-500">
                  اضغط هنا لرفع صورة الطالب
                </p>
              </>
            )}
          </label>
          <button
            type="submit" // Make sure the button is type="submit"
            className="bg-[#8b0000] text-white px-4 py-2 rounded"
          >
            اضافة طالب
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div key={story.id} className="border p-4 rounded shadow-md">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-lg font-semibold">{story.title}</h3>
            <p className="text-sm text-gray-500">
              تم التحميل بتاريخ {story.date}
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() =>
                  handleEditStory(story.id, {
                    ...story,
                    title: prompt("Edit Title", story.title) || story.title,
                  })
                }
                className="bg-black text-white px-2 py-1 rounded"
              >
                تعديل
              </button>
              <button
                onClick={() => handleDeleteStory(story.id)}
                className="bg-[#8b0000] text-white px-2 py-1 rounded"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
