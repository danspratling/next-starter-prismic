import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "../Link";

export const Socials = ({ socials }) => (
  <div className="flex -mx-2">
    {Object.entries(socials.data).map((social, index) => {
      const [type, link] = social;

      return (
        <Link
          key={index}
          href={link}
          className="mx-2 text-paragraph hover:text-heading focus:text-heading transition duration-200"
          aria-label={type}
        >
          <FontAwesomeIcon
            icon={mapSocialIcon[type]}
            className="fill-current"
            size="lg"
          />
        </Link>
      );
    })}
  </div>
);

const mapSocialIcon = {
  twitter: faTwitter,
  linkedin: faLinkedinIn,
  instagram: faInstagram,
  facebook: faFacebookF,
  github: faGithub,
};
