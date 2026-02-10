import React from 'react'

const PaginationComponent = ({page,pageSize,setPage,totalCount}) => {
  const pagecount=Math.ceil(totalCount/pageSize)
  return (
    <div className='flex gap-3'>
      <button className='bg-white border border-slate-300 shadow-lg p-1 hover:bg-gray-300 disabled:bg-gray-400' disabled={page===1} onClick={()=>setPage(prev=>prev-1)}>Previous</button>
      <p className='bg-white border border-slate-300 shadow-lg p-1'>page {page} of {pagecount}</p>
      <button className='bg-white border border-slate-300 shadow-lg p-1  hover:bg-gray-300 disabled:bg-gray-400' disabled={page===pagecount} onClick={()=>setPage(prev=>prev+1)}>Next</button>
    </div>
  )
}

export default PaginationComponent