import {BsFillPlayFill} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'

const VideoTitle = ({title, overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/3">{overview.slice(0,150)}</p>
        <div >
            <button className=" relative  bg-white text-black p-2 ps-14 px-12 text-xl rounded-lg hover:bg-opacity-80" > <span className='absolute left-5 top-1.5 text-4xl'><BsFillPlayFill /></span> Play</button>
            <button className=" mx-2 relative bg-gray-500 text-white p-2 ps-14 px-12 text-xl rounded-lg bg-opacity-50  " > <span className='absolute left-5 top-2 text-3xl'><AiOutlineInfoCircle /></span> More Info</button>
            {/* <button className=" mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg "><AiOutlineInfoCircle className='flex'/> More Info</button> */}
        </div>
    </div>
  )
}

export default VideoTitle;