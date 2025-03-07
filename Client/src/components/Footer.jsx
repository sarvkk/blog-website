import { Footer} from "flowbite-react";
import { Link } from "react-router-dom";
import {BsLinkedin ,BsInstagram, BsGithub, BsTwitterX} from 'react-icons/bs'

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
         <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link 
                to="/" 
                className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white "
                >
                    <span className="px-2 py-1 bg-neutral-500 rounded-lg text-white">
                        Sarvajit's
                        </span>
                        Blog
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-7 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title='About'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                        href='https://www.sarvajit.com.np'
                        target="_blank"
                        rel='noopener noreferrer'>
                            Me
                        </Footer.Link>
                        <Footer.Link
                        href='/about'
                        target="_blank"
                        rel='noopener noreferrer'>
                            Sarvajit's Blog
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Follow me'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                        href='https://www.github.com/sarvkk'
                        target="_blank"
                        rel='noopener noreferrer'>
                            Github
                        </Footer.Link>
                        <Footer.Link
                        href='https://www.x.com/sarvajit_1'
                        target="_blank"
                        rel='noopener noreferrer'>
                            X
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Legal'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                        href='#'
                        >
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link
                        href='#'>
                            Terms &amp; Conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href='#' by="Sarvajit's Blog" year={new Date().getFullYear()}/>
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href="https://instagram.com/sarvaajitk" icon={BsInstagram}/>
                    <Footer.Icon href="https://linkedin.com/in/sarvajit-khadka-660b68245?utm_source=share&utm_cam=paign=share_via&utm_content=profile&utm_medium=ios_app" icon={BsLinkedin}/>
                    <Footer.Icon href="https://github.com/sarvkk" icon={BsGithub}/>
                    <Footer.Icon href="https://x.com/sarvajit_1" icon={BsTwitterX}/>
                </div>
            </div>
         </div> 
    </Footer>
  )
}
