import { createBrowserRouter } from "react-router";
import LoginPage from "./components/LoginPage";
import PesertaDashboard from "./components/PesertaDashboard";
import PengujiDashboard from "./components/PengujiDashboard";
import Stase6Page from "./components/Stase6Page";
import PengujiEvaluationPage from "./components/PengujiEvaluationPage";
import DashboardHome from "./components/DashboardHome";

// Peserta Routes
function PesertaDashboardPage() {
  return (
    <PesertaDashboard activePage="Dashboard">
      <DashboardHome role="peserta" />
    </PesertaDashboard>
  );
}

function PesertaStase6Page() {
  return (
    <PesertaDashboard activePage="Stase 6">
      <Stase6Page />
    </PesertaDashboard>
  );
}

function PesertaStasePlaceholder({ staseNumber }: { staseNumber: number }) {
  return (
    <PesertaDashboard activePage={`Stase ${staseNumber}`}>
      <div className="p-8">
        <h1 className="text-blue-900 mb-4">Stase {staseNumber}</h1>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <p className="text-gray-600">Konten untuk Stase {staseNumber} akan ditampilkan di sini.</p>
        </div>
      </div>
    </PesertaDashboard>
  );
}

function PesertaRiwayatPage() {
  return (
    <PesertaDashboard activePage="Riwayat Nilai">
      <div className="p-8">
        <h1 className="text-blue-900 mb-4">Riwayat Nilai</h1>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <p className="text-gray-600">Riwayat nilai akan ditampilkan di sini.</p>
        </div>
      </div>
    </PesertaDashboard>
  );
}

// Penguji Routes
function PengujiDashboardPage() {
  return (
    <PengujiDashboard activePage="Dashboard">
      <DashboardHome role="penguji" />
    </PengujiDashboard>
  );
}

function PengujiStase6Page() {
  return (
    <PengujiDashboard activePage="Stase 6">
      <PengujiEvaluationPage />
    </PengujiDashboard>
  );
}

function PengujiStasePlaceholder({ staseNumber }: { staseNumber: number }) {
  return (
    <PengujiDashboard activePage={`Stase ${staseNumber}`}>
      <div className="p-8">
        <h1 className="text-blue-900 mb-4">Evaluasi Stase {staseNumber}</h1>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <p className="text-gray-600">Halaman evaluasi untuk Stase {staseNumber} akan ditampilkan di sini.</p>
        </div>
      </div>
    </PengujiDashboard>
  );
}

function PengujiPesertaPage() {
  return (
    <PengujiDashboard activePage="Daftar Peserta">
      <div className="p-8">
        <h1 className="text-blue-900 mb-4">Daftar Peserta</h1>
        <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
          <p className="text-gray-600">Daftar peserta akan ditampilkan di sini.</p>
        </div>
      </div>
    </PengujiDashboard>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/peserta/dashboard",
    Component: PesertaDashboardPage,
  },
  {
    path: "/peserta/stase-1",
    element: <PesertaStasePlaceholder staseNumber={1} />,
  },
  {
    path: "/peserta/stase-2",
    element: <PesertaStasePlaceholder staseNumber={2} />,
  },
  {
    path: "/peserta/stase-3",
    element: <PesertaStasePlaceholder staseNumber={3} />,
  },
  {
    path: "/peserta/stase-4",
    element: <PesertaStasePlaceholder staseNumber={4} />,
  },
  {
    path: "/peserta/stase-5",
    element: <PesertaStasePlaceholder staseNumber={5} />,
  },
  {
    path: "/peserta/stase-6",
    Component: PesertaStase6Page,
  },
  {
    path: "/peserta/riwayat",
    Component: PesertaRiwayatPage,
  },
  {
    path: "/penguji/dashboard",
    Component: PengujiDashboardPage,
  },
  {
    path: "/penguji/peserta",
    Component: PengujiPesertaPage,
  },
  {
    path: "/penguji/stase-1",
    element: <PengujiStasePlaceholder staseNumber={1} />,
  },
  {
    path: "/penguji/stase-2",
    element: <PengujiStasePlaceholder staseNumber={2} />,
  },
  {
    path: "/penguji/stase-3",
    element: <PengujiStasePlaceholder staseNumber={3} />,
  },
  {
    path: "/penguji/stase-4",
    element: <PengujiStasePlaceholder staseNumber={4} />,
  },
  {
    path: "/penguji/stase-5",
    element: <PengujiStasePlaceholder staseNumber={5} />,
  },
  {
    path: "/penguji/stase-6",
    Component: PengujiStase6Page,
  },
]);
