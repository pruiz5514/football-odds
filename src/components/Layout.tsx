import React from 'react'

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({children}) => {
  return (
    <div className='w-full min-h-[calc(100vh-80px)] bg-bgGray px-4 py-6 md:px-10 flex flex-col'>
        {children}
    </div>
  )
}

export default Layout