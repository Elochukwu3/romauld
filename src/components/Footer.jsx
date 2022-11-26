
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  Envelope,
  FacebookLogo,
} from "phosphor-react";

export default function Footer() {
  return (
    <div>
      <div>
        <div>
          <ul className="ph-icons flex  items-center justify-center gap-x-4 text-[#e9b171] ">
            <li className="py-2 hover:-translate-y-1 cursor-pointer border px-2 border-[#e9b171] rounded-full">
              <GithubLogo size={24} />
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer border px-2 border-[#e9b171] rounded-full">
              <LinkedinLogo size={24} />
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer border px-2 border-[#e9b171] rounded-full">
              <TwitterLogo size={24} />
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer border px-2 border-[#e9b171] rounded-full">
              <Envelope size={24} />
            </li>
            <li className="py-2  hover:-translate-y-1 cursor-pointer border px-2 border-[#e9b171] rounded-full">
              <FacebookLogo size={24} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
