import React from 'react'
import { NavBar } from './(components)/Navbar'

export const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className={`light flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
        Sidebar
        <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-200 md:pl-24`}> {/*md middle point between Sidebar and dashboard*/}
            <NavBar/>
            {children}
        </main>
    </div>
  )
}