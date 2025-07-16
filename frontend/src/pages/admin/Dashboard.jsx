import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  })

  const {axios} = useAppContext();

  const fetchDashbaord = async () => {
    try {
      const {data} = await axios.get('api/admin/dashboard');
      data.success ? setDashboardData(data.dashboardData) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchDashbaord()
  }, [])

  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
      <div className='flex flex-wrap gap-4'>
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashBoardIcon1} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-800'>{dashboardData.blogs}</p>
            <p className='text-gray-600 font-light'>Blogs</p>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashBoardIcon2} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-800'>{dashboardData.comments}</p>
            <p className='text-gray-600 font-light'>Comments</p>
          </div>
        </div>
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashBoardIcon3} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-800'>{dashboardData.drafts}</p>
            <p className='text-gray-600 font-light'>Drafts</p>
          </div>
        </div>
      </div>
      <div>
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-800'>
          <img src={assets.dashBoardIcon4} alt="" />
          <p>Latest Blogs</p>
        </div>
        <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
          <table className='w-full text-sm text-gray-600'>
            <thead className='text-xs text-gray-800 text-left uppercase'>
              <tr>
                <th scope='col' className='px-2 py-4 xl:px-6'> # </th>
                <th scope='col' className='px-2 py-4'> Blog Title </th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'> Date </th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'> Status </th>
                <th scope='col' className='px-2 py-4'> Action</th>
              </tr>
            </thead>
            <tbody>
              {
                dashboardData.recentBlogs.map((blog, index) => {
                  return  <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashbaord} index={index+1}/>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard