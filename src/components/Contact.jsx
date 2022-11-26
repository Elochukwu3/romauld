import React from 'react';
import { Code, CodeSimple } from 'phosphor-react';

export default function Contact() {
  return (
    <div>
        <div>
            <div>
        {" "}
        <p className="flex item-center py-4">
          {" "}
          <CodeSimple size={32} color="#00ffff" />
          <span className="text-2xl text-[#64ffda] px-3">Contact Me</span>
          <Code size={32} color="#00ffff" />
        </p>
      </div>
        </div>
    </div>
  )
}
