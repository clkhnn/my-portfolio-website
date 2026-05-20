import { FaGithub } from "react-icons/fa";

export default function GithubButton() {
  return (
    <a
      href="https://github.com/clkhnn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Github Profile"
      className="text-3xl text-blue-600 hover:scale-110 transition"
    >
      <FaGithub />
    </a>
  );
}