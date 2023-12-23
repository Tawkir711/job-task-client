import React from "react";

const FAQ = () => {
  return (
    <div className="bg-base-200 my-5">
      <h3 className="text-center text-3xl py-3">FAQ Section</h3>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          How do I create a new task?
        </div>
        <div className="collapse-content">
          <p>
            To create a new task, simply navigate to the dashboard, click on the
            'New Task' button, fill in the task details (title, description,
            deadline, and priority), and click 'Create'.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can tasks be edited after creation?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you can edit tasks by clicking the 'Edit' button on the task
            card. Make the necessary changes and then save the updated details.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How can I track the status of my tasks?
        </div>
        <div className="collapse-content">
          <p>
            Tasks are categorized into 'To-Do', 'Ongoing', and 'Completed'. Use
            the drag-and-drop functionality to move tasks between these
            categories and track their progress.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Is there a way to receive notifications for task updates?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we provide toast notifications for task assignments, updates,
            and deadlines to keep you informed about any changes or new tasks.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What sets SCC Technovision apart from other task management platforms?
        </div>
        <div className="collapse-content">
          <p>
            SCC Technovision stands out with its user-friendly interface,
            seamless collaboration features, and intuitive design. Our platform
            is built to cater to diverse industry needs and enhance productivity
            through efficient task handling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
