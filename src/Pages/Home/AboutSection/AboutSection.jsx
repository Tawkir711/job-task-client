import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Components/Provider/Context";

const AboutSection = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <section className="bg-base-200 rounded-lg py-16 px-4 border my-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Technovision</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          SCC Technovision Inc. specializes in revolutionizing task management
          solutions. Our platform is designed to empower teams and individuals
          by providing a collaborative workspace that simplifies task handling,
          enhances productivity, and fosters seamless communication.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mt-4">
          Leveraging cutting-edge technologies such as React.js, Firebase,
          Express, Node.js, and MongoDB, our platform offers a user-friendly
          interface, allowing users to create, organize, and track tasks
          effortlessly. Whether you're a developer, corporate professional,
          banker, or from any other industry, our platform caters to your
          specific needs, enabling efficient task management tailored to your
          workflow.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mt-4">
          At Technovision, we are committed to delivering an intuitive,
          responsive, and visually appealing experience. From task creation with
          detailed descriptions, deadlines, and priorities to drag-and-drop
          functionality across various stages of task completion, our platform
          ensures a seamless workflow.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mt-8">
          Join us in transforming the way you manage tasks, streamline your
          processes, and achieve unparalleled efficiency with SCC Technovision
          Inc.
        </p>
        <button
          onClick={() => navigate(!user ? "/Login" : "/dashboard")}
          className="rounded-full btn btn-primary mt-7"
        >
          Let's Explore
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
