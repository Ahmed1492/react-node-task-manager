import React from "react";

const TaskCard = ({ allTasks }) => {
  const getStatusColor = (task) => {
    try {
      let color;
      if (task.type === "completed") color = "bg-green-300";
      else if (task.type === "pending") color = "bg-orange-300";
      else if (task.type === "inprogress") color = "bg-blue-300";
      else if (task.type === "deployed") color = "bg-purple-300";
      else if (task.type === "deferred") color = "bg-gray-300";
      else color = "black"; // fallback
      return color;
    } catch (error) {
      console.error(error);
      return "black";
    }
  };

  const getTextColor = (task) => {
    try {
      let color;
      if (task.type === "completed") color = "text-green-800";
      else if (task.type === "pending") color = "text-orange-800";
      else if (task.type === "inprogress") color = "text-blue-800";
      else if (task.type === "deployed") color = "text-purple-800";
      else if (task.type === "deferred") color = "text-gray-800";
      else color = "black"; // fallback
      return color;
    } catch (error) {
      console.error(error);
      return "black";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return `${year} - ${month} - ${day}`;
  };

  return (
    <div className="w-full flex flex-wrap justify-between gap-4">
      {allTasks?.map((task, index) => (
        <div
          onClick={() => console.log(task)}
          key={index}
          className="flex  flex-col gap-4 w-[100%] lg:w-[44%] xl:w-[29%] shadow-2xl  border p-3 rounded-xl "
        >
          {/* TOP */}
          <div
            className={` ${getStatusColor(task)} 
            )}-300 h-[9rem] rounded-xl flex justify-center items-center`}
          >
            <h3
              className={`${getTextColor(task)} font-bold w-[80%] text-center`}
            >
              {task.title}
            </h3>
          </div>
          {/* BOTTOM */}
          <div className="w-full">
            <p className="w-[90%] text-base text-slate-600 m-auto text-center">
              {task.content}
            </p>
            <div className="flex items-center justify-between mt-[1rem]">
              {/* START DATE */}
              <div className="flex flex-col gap-1">
                <span className="font-bold">Start Date</span>
                <span className="text-sm text-slate-600 text-center">
                  {formatDate(task.startDate)}
                </span>
              </div>
              {/* END DATE */}

              <div className="flex flex-col gap-1">
                <span className="font-bold">End Date</span>
                <span className="text-sm text-slate-600 text-center">
                  {formatDate(task.endDate)}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-[1rem]">
              <span className="text-sm text-slate-600">park roy</span>
              <span
                className={`${getTextColor(task)} ${getStatusColor(
                  task
                )} rounded-2xl px-4 py-2 font-bold text-sm`}
              >
                {task?.type?.toUpperCase() || "NAN"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
