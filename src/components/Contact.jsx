import React,{useState} from "react";
import { Code, CodeSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import emailJs from '@emailjs/browser'
export default function Contact() {
    const [value, setValue] = useState({username:"", email:"", message:""})
    const{username, email, message} = value
    const sendEmail = (e)=>{
        e.preventDefault();
        if (emailJs.sendForm("service_j5ibj4f", "template_pcr0asj", e.target, "aF3tKuqaEPz4Ti0U_") ) {
            setValue({
                ...value,
                username:"", email:"", message:""
            })
        }else{

        } 
       
       
    }
    const changeValue =(e)=>{
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div className="mb-9">
      <div>
        <div id="contact">
          {" "}
          <p className="flex item-center py-4 pl-10">
            {" "}
            <CodeSimple size={32} color="#e9b171" />
            <span className="text-2xl text-[#e9b171] px-3">Contact Me</span>
            <Code size={32} color="#e9b171" />
          </p>
        </div>
        <section className="flex justify-center">
          <div className="w-4/5 text-white max-sm:break-keep">
            <div className="italic max-sm:break-keep">
              Feel free to send an e-mail
              <span className="border-b mx-2 text-[#e9b171] border-[#e9b171]">
                <Link
                  to="/email"
                  onClick={() =>
                    (window.location = "mailto:oguajuromauld5@gmail.com")
                  }
                >
                  @romauld.com
                </Link>
              </span>
            </div>
            <p> Alternatively, you can also drop-in a mail here!</p>
          </div>
        </section>
        <div className="flex justify-center">
          <form action="#" className="w-4/5" onSubmit={sendEmail}>
            <div className="w-3/5 max-sm:w-full pt-4 pb-3 relative">
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={changeValue}
                className="inputTag text-white outline-none w-full px-3 h-10 outline-0 appearance-none  border-b-2 border-[#64ffda] bg-[#101c30] rounded-none"
                required
              />
              <label
                htmlFor="username"
                className="text-[#64ffda] absolute inset-x-0 floating-label"
              >
                Name
              </label>
            </div>
            <div className="w-3/5 max-sm:w-full relative">
              <br />
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={changeValue}
                className="inputTag text-white outline-none w-full px-3 h-10 outline-0 appearance-none  border-b-2 border-[#64ffda] bg-[#101c30] rounded-none"
                required
              />
              <label
                htmlFor="email"
                className="text-[#64ffda] absolute inset-x-0 floating-label"
              >
                Email
              </label>
            </div>
            <div className="w-3/5 max-sm:w-full relative">
              <br />
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={changeValue}
                className="inputTag text-white w-full px-3 h-10 outline-none appearance-none  border-b-2 border-[#64ffda] bg-[#101c30] rounded-none"
                required
              ></textarea>
              <label
                htmlFor="email"
                className="text-[#64ffda] absolute inset-x-0 floating-label"
              >
                Message
              </label>
            </div>
            <div className="h-24 flex items-center">
              <button className="text-[#e9b171] border border-[#e9b171] px-3 py-1 font-semibold hover:text-sm" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
