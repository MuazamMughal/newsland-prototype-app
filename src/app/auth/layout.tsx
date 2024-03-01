import React, { Children } from 'react'

const Authlayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=' h-screen bg-slate-50  flex items-center justify-center'>
      {children}
    </div>
  )
}

export default Authlayout