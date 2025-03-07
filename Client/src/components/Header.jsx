import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { TextInput } from 'flowbite-react'
import { AiOutlineSearch } from 'react-icons/ai'
import {FaMoon,FaSun} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import {signoutSuccess} from '../redux/user/userSlice'
import {toggleTheme} from '../redux/theme/themeSlice' 

export default function () {
    const path=useLocation().pathname  
    const dispatch=useDispatch()
    const {currentUser}=useSelector(state=>state.user) 
    const {theme}=useSelector(state=>state.theme)
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSignout=async()=>{
        try{
          const res=await fetch('/api/user/signout',{
            method:'POST',
          });
          const data=await res.json();
          if(!res.ok){
            console.log(data.message);
          }
          else {
            dispatch(signoutSuccess());
          }
        }
        catch(error){
          console.log(error.message);
        }
         
      };

    const handleSearch = (e) => {
      e.preventDefault();
      if(!searchTerm) return;
      
      const urlParams = new URLSearchParams();
      urlParams.set('searchTerm', searchTerm);
      urlParams.set('sort', 'desc');
      
      navigate(`/search?${urlParams.toString()}`);
      setSearchTerm('');
    };

  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
             <span className='px-2 py-1 bg-neutral-500 rounded-lg text-white'>Sarvajit's</span>
             Blog
        </Link>
        <form onSubmit={handleSearch}>
            <TextInput 
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </form>
        <Button 
            className='w-12 h-10 lg:hidden' 
            color='gray' 
            pill
            onClick={handleSearch}
        >
            <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' 
            color='gray' 
            pill 
            onClick={()=>dispatch(toggleTheme())}
            >
                {theme ==='light'?<FaSun />:<FaMoon />}  
                
            </Button>
            { currentUser ?(
                <Dropdown arrowIcon={false}
                inline
                label={<Avatar alt='user' img={currentUser.profilePicture} rounded></Avatar>}>
                <Dropdown.Header>
                    <span className='block text-sm'>@{currentUser.username}</span>
                    <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                </Dropdown.Header>
                <Link to='/dashboard?tab=profile'>
                <Dropdown.Item>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
                </Dropdown>
            ):(
                <Link to="/sign-in">
                <Button className='bg-neutral-500'outline>
                    Sign In
                </Button>
                </Link>  
                )
            }
            <Navbar.Toggle/>         
        </div>
        <Navbar.Collapse>
                <Navbar.Link active={path==="/"} as={'div'}>
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path==="/posts" || path==="/search"} as={'div'}>
                    <Link to='/search'>Posts</Link>
                </Navbar.Link>
                <Navbar.Link active={path==="/about"} as={'div'}>
                    <Link to='/about'>About</Link>
                </Navbar.Link>
                <Navbar.Link active={path==="/projects"} as={'div'}>
                    <Link to='/projects'>Projects</Link>
                </Navbar.Link>
            </Navbar.Collapse>   
    </Navbar>
  )
}
