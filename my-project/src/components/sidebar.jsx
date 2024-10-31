// Sidebar.js
import { FaUser, FaCog, FaChartBar, FaBox, FaUserFriends, FaShippingFast } from 'react-icons/fa';

const menuItems = [
  { label: 'Sales', icon: FaChartBar, href: '#' },
  { label: 'Profile', icon: FaUser, href: '#' },
  { label: 'Settings', icon: FaCog, href: '#' },
  { label: 'Users', icon: FaUserFriends, href: '#' },
  { label: 'Orders', icon: FaBox, href: '#' },
  { label: 'Track Order', icon: FaShippingFast, href: '#' },
  { label: 'Products', icon: FaBox, href: '#' },
];

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 flex flex-col w-64 bg-white border-r border-neutral-200">
      <div className="flex items-center justify-between h-[96px] px-8">
        <a href="https://www.loopple.com">
          <img
            src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/logos/loopple.svg"
            alt="Logo"
            className="h-10"
          />
        </a>
      </div>
      <div className="border-b border-dashed border-neutral-200"></div>
      <div className="p-5">
        <UserProfile />
        <nav className="mt-5 space-y-2">
          {menuItems.map((item, idx) => (
            <MenuItem key={idx} label={item.label} href={item.href} Icon={item.icon} />
          ))}
        </nav>
      </div>
    </aside>
  );
}

function UserProfile() {
  return (
    <div className="flex items-center px-5 py-3">
      <img
        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
        alt="Avatar"
        className="w-10 h-10 rounded-full"
      />
      <div className="ml-3">
        <a href="#" className="block text-lg font-medium text-secondary hover:text-primary">Robert Jason</a>
        <span className="text-sm text-secondary-dark">SEO Manager</span>
      </div>
    </div>
  );
}

function MenuItem({ label, href, Icon }) {
  return (
    <a href={href} className="flex items-center px-4 py-3 rounded-lg text-stone-500 hover:bg-neutral-100 hover:text-dark">
      <Icon className="w-5 h-5 mr-3" />
      <span className="text-[1.15rem]">{label}</span>
    </a>
  );
}

export default Sidebar;
