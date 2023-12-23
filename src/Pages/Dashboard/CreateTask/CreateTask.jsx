import React from 'react';
import useTodo from '../../../hooks/useTodo';

const CreateTask = () => {
  const [task, refetch] = useTodo();
  return (
    <div className="max-h-screen flex justify-between ml-4 shadow-xl px-8 py-10 bg-blue-400 rounded-lg w-full">
      <div>
        <h3
          className="text-xl font-bold bg-red-400 text-white inline shadow-2xl rounded-full px-6 py-3 text-center cursor-pointer"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          +
        </h3>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-white p-8 rounded-md shadow-md max-w-md mx-auto">
            <form>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Create a New Task
              </h2>

              <div className="mb-4">
                <label className="text-gray-700 block mb-2">Task Title</label>
                <input
                  type="text"
                  className="form-input w-full px-4 py-2 border rounded-md"
                  placeholder="Enter task title"
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-700 block mb-2">
                  Task Description
                </label>
                <textarea
                  className="form-textarea w-full px-4 py-2 border rounded-md"
                  rows="4"
                  placeholder="Enter task description"
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-700 block mb-2">Deadline</label>
                <input
                  type="date"
                  className="form-input w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-700 block mb-2">Priority</label>
                <select className="form-select w-full px-4 py-2 border rounded-md">
                  <option value="" disabled>
                    Select priority
                  </option>
                  <option value="low">Low</option>
                  <option value="moderate">Moderate</option>
                  <option value="high">High</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
              >
                Create Task
              </button>
            </form>

            <div className="modal-action absolute top-0 right-0 mt-2 mr-2">
              <button
                className="text-gray-600 hover:text-gray-800 text-lg"
                onClick={() => document.getElementById("my_modal_1").close()}
              ></button>
            </div>
          </div>
        </dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {task?.map((tas) => (
          <div
            key={tas._id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title">{tas.title}</h2>
              <p>{tas.description}</p>
              <div className="card-actions justify-around">
                <button className="btn btn-primary text-white"> {tas.priority} </button>
                <button className="btn btn-primary text-white"> {tas.status} </button>
              </div>
              <div className='card justify-center'>
                <button className='btn btn-primary text-white'>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTask;