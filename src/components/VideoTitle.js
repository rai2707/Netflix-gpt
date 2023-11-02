import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview.slice(0,150)}</p>
        <div className='my-4 md:m-0'>
            <button className=" relative  bg-white text-black p-1 md:p-2 ps-14 px-4 md:px-12 text-xl rounded-lg hover:bg-opacity-80" > <span className='absolute left-6 md:left-4 top-1.5 md:top-1 text-2xl md:text-4xl'><BsFillPlayFill /></span> Play</button>

            <button className="hidden md:inline-block mx-2 relative bg-gray-500 text-white p-2 ps-14 px-12 text-xl rounded-lg bg-opacity-50  " > <span className='absolute left-5 top-2 text-3xl'><AiOutlineInfoCircle /></span> More Info</button>

            {/* <button className=" mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg "><AiOutlineInfoCircle className='flex'/> More Info</button> */}
        </div>
    </div>
  )
}

export default VideoTitle;