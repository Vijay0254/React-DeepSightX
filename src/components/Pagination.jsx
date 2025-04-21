import React from 'react'
import { useNavigate } from 'react-router-dom'

const Pagination = ({ totalPosts, postsPerPage, pageNumber }) => {

    const navigate = useNavigate()
    let pages = []
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }

    function handlePageChange(pageNumber){
        navigate(`/hospitals/${pageNumber}`)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className='flex justify-center flex-wrap items-center gap-4 mt-5'>
            {pages.map((element) =>(
                <button onClick={() =>handlePageChange(element)} key={element} className={`bg-[#F2F2F2] text-[#000000] cursor-pointer font-semibold px-4 py-2 rounded-md hover:bg-[#000000] hover:text-[#FFFFFF] ${element == pageNumber ? "bg-black text-white" : "bg-white text-black"}`}>{element}</button>
            ))}
        </div>
    )
}

export default Pagination