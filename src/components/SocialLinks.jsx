/* eslint-disable no-useless-concat */
import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi";
import {BsPersonLinesFill} from "react-icons/bs";

const SocialLinks = () => {

    const Links =[
        {
            id :1,
            child: (
                <>
                    LinkedIn <FaLinkedin  size={23}/>
                </>
            ),
            href: "https://www.linkedin.com/in/nasir-hussain-776771209/",
            style: 'rounded-tr-md'
        },
        {
            id :2,
            child: (
                <>
                    GitHub <FaGithub  size={23}/>
                </>
            ),
            href: "https://github.com/NasirHussain5226",
        },
        {
            id :3,
            child: (
                <>
                    Mail <HiOutlineMail  size={23}/>
                </>
            ),
            href: "mailto:codingwithhussain@gmail.com",
        },
        {
            id :4,
            child: (
                <>
                    Resume <BsPersonLinesFill  size={23}/>
                </>
            ),
            href: "/Nasir Hussain Resume.pdf",
            style: 'rounded-br-md',
            download: true,
        }
    ];
  return (
    <div className='hidden lg:flex flex-col top-[45%] left-0 fixed z-50'>
        <ul>

            {Links.map(({id, child, href, style, download}) =>(
                 <li key={id} className={"flex justify-between items-center w-32 h-12 px-4 ml-[-80px] hover:ml-[-5px] hover:bg-gradient-to-r from-pink-400 to-pink-700 duration-500 bg-gray-700 hover:rounded-md" + " " + style }>
                    <a 
                    href={href} 
                    className="flex justify-between items-center w-full text-white"
                    download={download}
                    target='_blank' 
                    rel="noreferrer"
                    >
                   
                    <>
                    {child}
                    </>
                    </a>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks