import { FC } from "react";
import { IconContext } from "react-icons";
import {FaDiscord, FaGithub, FaTwitter} from "react-icons/fa";

export const SocialMediaIconsList:FC<{className?: string}> = (props) => {
  const { className } = props;

  return (
    <ul className={`flex items-center gap-6 ${className}`}>
      <li>
        <a
        title="Link to Discord server (External Link)"
        className="dark:text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
        href="https://discord.com/invite/NvK67YnJX5"
        aria-label="Visit us on Discord"
        >
          <IconContext.Provider
            value={{ className: "shared-class", size: "24" }}
          >
            <FaDiscord className="hover:text-violet-500 transition duration-300 ease-in-out " />
          </IconContext.Provider>
        </a>
      </li>
      <li>
        <a
        title="Link to Github project (External Link)"
        className="dark:text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/rupali-codes/LinksHub"
        aria-label="Visit us on Github"
        >
          <IconContext.Provider
            value={{ className: "shared-class", size: "24" }}
          >
              <FaGithub className="hover:text-violet-500 transition duration-300 ease-in-out" />
          </IconContext.Provider>
        </a>
      </li>
      <li>
        <a
          title="Link to Twitter page (External Link)"
          className="dark:text-gray-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/linkshubdotdev"
          aria-label="Visit us on Twitter"
        >
        <IconContext.Provider
          value={{ className: "shared-class", size: "24" }}
        >
          <FaTwitter className="hover:text-violet-500 transition duration-300 ease-in-out" />
        </IconContext.Provider>
        </a>
      </li>
    </ul>
  );
};
