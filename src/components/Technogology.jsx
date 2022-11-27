import React from "react";
import { CheckCircle } from "phosphor-react";

export default function Technogology({name1, name2, name3, name4}) {
  return (
    <div>
      <ul
       
        class=" list-disc pl-1 space-y-0 text-slate-400 break-normal"
       
      >
        <li className="flex items-center gap-x-2">
          <CheckCircle size={16} color="#00ffff" /> {name1}
        </li>
        <li className="flex items-center gap-x-2">
          <CheckCircle size={16} color="#00ffff" />{name2}
        </li>
        <li className="flex items-center gap-x-2 break-keep">
          <CheckCircle size={16} color="#00ffff" /> {name3}
        </li>
        <li className="flex items-center gap-x-2 break-keep">
          <CheckCircle size={16} color="#00ffff" />{ name4}
        </li>
      </ul>
    </div>
  );
}
