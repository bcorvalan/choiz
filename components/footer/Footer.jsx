import React from "react";
import Link from "next/link";
import ChoizLogo from "../svgs/logos/ChoizLogo";
import InstagramLogo from "../svgs/logos/InstagramLogo";
import FacebookLogo from "../svgs/logos/FacebookLogo";
import WhatsAppLogo from "../svgs/logos/WhatsAppLogo";
import EmailLogo from "../svgs/logos/EmailLogo";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__first-col">
        <ChoizLogo />
        <div className="footer__text footer__text--copyright">
          <span>&#169;</span>XCALE HEALTH srl . Todos los derechos reservados.
        </div>
      </div>
      <div className="footer__second-col">
        <p className="footer__text">¡Hablemos!</p>
        <div className="footer__socialmedia">
          <Link href="/">
            <a className="footer__anchor">
              <InstagramLogo />
            </a>
          </Link>
          <Link href="/">
            <a className="footer__anchor">
              <FacebookLogo />
            </a>
          </Link>
          <Link href="/">
            <a className="footer__anchor">
              <WhatsAppLogo />
            </a>
          </Link>
          <Link href="/">
            <a className="footer__anchor">
              <EmailLogo />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
