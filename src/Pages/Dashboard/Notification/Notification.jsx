import React, { useContext } from "react";

import { useQuery } from "@tanstack/react-query";

import moment from "moment";
import { AuthContext } from "../../../Components/Provider/Context";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Notification = () => {
  const { user } = useContext(AuthContext);
  const axiosUrl = useAxiosPublic();

  const { data: task = [],  } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axiosUrl.get(`/task/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className="mx-10">
      {task?.map((tas) => (
        <div className="bg-[#cbd5e1] rounded pl-3" key={tas._id}>
          <h1 className="mt-5">Task: {tas.title}</h1>
          <p>
            Deadline: <span>{moment(tas.deadline).format("ll")}</span>
          </p>
          <p>
            Added: <span>{moment(tas.addTime).fromNow()}</span>
          </p>
          <p>
            Update:{" "}
            <span>
              {tas.update ? moment(tas.update).fromNow() : "Not Updated Yet"}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Notification;