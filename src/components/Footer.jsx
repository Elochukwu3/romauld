import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  Envelope,
  WhatsappLogo,
} from "phosphor-react";

export default function Footer() {
  return (
    <div>
      <div>
        <div>
          <ul className="ph-icons flex  items-center justify-center gap-x-4 text-[#e9b171] ">
            <li className="py-2 hover:-translate-y-1 cursor-pointer border px-2 border-[#e9b171] rounded-full">
              <a
                href="https://github.com/Elochukwu3/"
                target={"_blank"}
                rel="noreferrer"
              >
                <GithubLogo size={24} />
              </a>
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer border px-2 border-[#e9b171] rounded-full">
              <a
                href="https://www.linkedin.com/in/romauld-elochukwu/"
                target={"_blank"}
                rel="noreferrer"
              >
                <LinkedinLogo size={24} />
              </a>
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer border px-2 border-[#e9b171] rounded-full">
              <a
                href="https://twitter.com/Romauld_J"
                target={"_blank"}
                rel="noreferrer"
              >
                <TwitterLogo size={24} />
              </a>
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer border px-2 border-[#e9b171] rounded-full">
              <a
                href="mailto:oguajuromauld5@gmail.com"
                target={"_blank"}
                rel="noreferrer"
              >
                <Envelope size={24} />
              </a>
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer border px-2 border-[#e9b171] rounded-full">
              <a
                href="https://wa.me/+2348132531639"
                target={"_blank"}
                rel="noreferrer"
              >
                <WhatsappLogo size={24}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
