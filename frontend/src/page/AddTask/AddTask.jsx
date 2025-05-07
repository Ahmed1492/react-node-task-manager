import React from "react";

const AddTask = () => {
  return (
    <div className="py-6 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Add New Task</h2>

      <div className="flex flex-col gap-4 max-w-xl mx-auto">
        {/* TITLE */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            className="bg-slate-200 py-2 px-3 rounded-md text-sm w-full text-gray-700"
            type="text"
            placeholder="Task Title"
          />
        </div>
        {/* DESCRIPTION */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <input
            className="bg-slate-200 py-2 px-3 rounded-md text-sm w-full text-gray-700"
            type="text"
            placeholder="Task Description"
          />
        </div>
        {/* DATE */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input
              className="bg-slate-200 py-2 px-3 rounded-md text-sm w-full text-gray-700"
              type="date"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input
              className="bg-slate-200 py-2 px-3 rounded-md text-sm w-full text-gray-700"
              type="date"
            />
          </div>
        </div>
        {/* STATUS */}
        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            className="bg-slate-200 py-2 px-3 rounded-md text-sm w-full text-gray-700"
            defaultValue=""
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="pending">Pending</option>
            <option value="inprogress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="deferred">Deferred</option>
            <option value="deployed">Deployed</option>
          </select>
        </div>

        <button className="bg-[#3F51B5] mt-5 py-2 rounded-lg text-white">
          Add
        </button>
      </div>
    </div>
  );
};
export default AddTask;
