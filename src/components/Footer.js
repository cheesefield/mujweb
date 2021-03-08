import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaPaypal,
  FaSnapchatGhost,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { a } from "react-router-dom";

function Footer(props) {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/o_mne" ||
    window.location.pathname === "/projekty" ||
    window.location.pathname === "/kontakt"
  ) {
    return (
      <div>
        <footer>
          <p>Sleduj mě</p>
          <a
            href="https://www.twitter.com/w1erd00"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icons">
              <FaTwitter />
            </div>
          </a>
          <a
            href="https://www.instagram.com/dqmnk_k"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icons">
              <FaInstagram />
            </div>
          </a>
          <a
            href="https://www.paypal.me/dominikkostka"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icons">
              <FaPaypal />
            </div>
          </a>
          <a
            href="https://www.snapchat.com/add/dqmnk_k"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icons">
              <FaSnapchatGhost />
            </div>
          </a>
          <a
            href="https://vm.tikhrefk.com/ZSpVC8YA"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icons">
              <SiTiktok />
            </div>
          </a>
          <p class="vodoznak">
            Designed by <b>CheeseField</b>
          </p>
        </footer>
      </div>
    );
  }
  if (
    window.location.pathname === "/en" ||
    window.location.pathname === "/en/about" ||
    window.location.pathname === "/en/projects" ||
    window.location.pathname === "/en/contact" ||
    !props.language
  ) {
    return (
      <div>
        <footer>
          <p>Follow me</p>
          <a
            href="https://www.twitter.com/stupid_w1erd00"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icons">
              <FaTwitter />
            </div>
          </a>
          <a
            href="https://www.instagram.com/dqmnk_k"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icons">
              <FaInstagram />
            </div>
          </a>
          <a
            href="https://www.paypal.me/dominikkostka"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icons">
              <FaPaypal />
            </div>
          </a>
          <a
            href="https://www.snapchat.com/add/dqmnk_k"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icons">
              <FaSnapchatGhost />
            </div>
          </a>
          <a
            href="https://vm.tikhrefk.com/ZSpVC8YA"
            target="_blank"
            rel="noreferrer"
          >
            <div class="icons">
              <SiTiktok />
            </div>
          </a>
          <p class="vodoznak">
            Designed by <b>CheeseField</b>
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
