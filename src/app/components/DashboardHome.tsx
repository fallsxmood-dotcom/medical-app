import { Users, FileText, CheckCircle, Clock } from "lucide-react";

interface DashboardHomeProps {
  role: "peserta" | "penguji";
}

export default function DashboardHome({ role }: DashboardHomeProps) {
  const pesertaStats = [
    { label: "Stase Selesai", value: "4/6", icon: CheckCircle, color: "bg-green-500" },
    { label: "Stase Aktif", value: "2", icon: Clock, color: "bg-blue-500" },
    { label: "Total Nilai", value: "85.5", icon: FileText, color: "bg-purple-500" },
  ];

  const pengujiStats = [
    { label: "Total Peserta", value: "24", icon: Users, color: "bg-blue-500" },
    { label: "Sudah Dinilai", value: "18", icon: CheckCircle, color: "bg-green-500" },
    { label: "Belum Dinilai", value: "6", icon: Clock, color: "bg-orange-500" },
  ];

  const stats = role === "peserta" ? pesertaStats : pengujiStats;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-blue-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Selamat datang di Aplikasi Simulasi OSCE Rekam Medis
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-semibold text-blue-900">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-4 rounded-full`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
        <h2 className="text-blue-900 mb-4">Aktivitas Terbaru</h2>
        <div className="space-y-4">
          {role === "peserta" ? (
            <>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 p-2 rounded-full">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Stase 6 - Statistik</p>
                  <p className="text-sm text-gray-600">Tugas diselesaikan pada 18 Feb 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-gray-400 p-2 rounded-full">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Stase 5 - Manajemen Data</p>
                  <p className="text-sm text-gray-600">Tugas diselesaikan pada 15 Feb 2026</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <div className="bg-blue-600 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Muhammad Rizki - Stase 6</p>
                  <p className="text-sm text-gray-600">Dinilai pada 18 Feb 2026 - Nilai: 88/100</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-gray-400 p-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Siti Aminah - Stase 5</p>
                  <p className="text-sm text-gray-600">Dinilai pada 17 Feb 2026 - Nilai: 92/100</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
