import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import {
  LayoutDashboard,
  LogOut,
  FileText,
  Users,
  Activity,
} from "lucide-react";

interface NavItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

interface PengujiDashboardProps {
  children?: React.ReactNode;
  activePage: string;
}

export default function PengujiDashboard({
  children,
  activePage,
}: PengujiDashboardProps) {
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      path: "/penguji/dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      label: "Daftar Peserta",
      path: "/penguji/peserta",
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "Stase 1",
      path: "/penguji/stase-1",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      label: "Stase 2",
      path: "/penguji/stase-2",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      label: "Stase 3",
      path: "/penguji/stase-3",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      label: "Stase 4",
      path: "/penguji/stase-4",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      label: "Stase 5",
      path: "/penguji/stase-5",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      label: "Stase 6",
      path: "/penguji/stase-6",
      icon: <FileText className="w-5 h-5" />,
    },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-blue-600">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8 text-white" />
            <div>
              <h2 className="text-white font-semibold">
                OSCE Rekam Medis
              </h2>
              <p className="text-blue-100 text-sm">Penguji</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activePage === item.label
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}