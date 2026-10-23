import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);
    console.log(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen bg-black text-white lg:flex">
      <form onSubmit={submitHandler} className="w-full p-5 sm:p-10 lg:w-1/2">
        <div className="flex w-full flex-col gap-4">
          <h1 className="text-3xl font-bold">Add Notess</h1>

          {/* First Input For Heading */}
          <input
            type="text"
            placeholder="Enter Notes Heading"
            className="w-full rounded border-2 px-5 py-2 font-medium outline-none"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {/* Detailed Input */}
          <textarea
            placeholder="Write details here"
            className="h-32 w-full rounded border-2 px-5 py-2 font-medium outline-none"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />

          <button
            type="submit"
            className="w-full rounded bg-white active:bg-gray-400 px-5 py-2 font-medium text-black"
          >
            Add Notes
          </button>
        </div>
      </form>

      <div className=" w-full bg-gray-900 lg:border-l-2  content-start p-5 sm:p-10 lg:w-1/2">
        <h1 className="text-3xl font-bold">Recent Notes</h1>

        <div className="flex flex-wrap items-start justify-start gap-4 mt-5  h-full overflow-auto ">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl bg-cover text-black pt-9 pb-5 px-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprLtbfR7pNrP2llW86CO0bQzI8hcYame5ipuIVdOp_Q&s=10')]"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>{" "}
                  <p className="mt-4 leading-tight font-medium text-gray-500">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className=" w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-xs rounded-2xl font-bold text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
