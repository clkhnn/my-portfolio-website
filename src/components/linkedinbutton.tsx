import { FaLinkedin } from "react-icons/fa";

export default function LinkedinButton() {
  return (
    <a
      href="https://linkedin.com/in/mustafa-celikhan-celik/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
      className="text-3xl text-blue-600 hover:scale-110 transition"
    >
      <FaLinkedin />
    </a>
  );
}