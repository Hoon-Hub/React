import React from 'react'
import SidebarLink from './SidebarLink'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { HomeIcon } from '@heroicons/react/solid'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/outline'
const Sidebar = () => {
  return (
    <div className="fixed hidden h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start">
      <div className="hoverAnimation flex h-14 w-14 items-center justify-center p-0 xl:ml-24">
        <img src="https://rb.gy/ogau5a" width="30" height="30" />
      </div>
      <div className="mt-4 mb-2.5 space-y-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notification" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsHorizontalIcon} />
      </div>
      <button className="ml-auto hidden h-[52px] w-56 rounded-full bg-[#1d9bf0] text-lg font-bold text-white shadow-md hover:bg-[#1a8cd8] xl:inline">
        Tweet
      </button>
      <div className="item-center hoverAnimation mt-auto flex justify-center text-[#d9d9d9] xl:ml-auto xl:-mr-5">
        <AccountCircleIcon className="h-10 w-10 rounded-full xl:mr-2.5" />
        <div className="hidden leading-5 xl:inline">
          <h4 className="font-bold">Sanghoon 9400</h4>
          <p className="text-[#6e767d]">@firebase12345</p>
        </div>

        <DotsHorizontalIcon className="my-auto ml-10 hidden h-5 xl:inline" />
      </div>
    </div>
  )
}

export default Sidebar
