import { useState } from "react";
import { Button } from "./ui/button";
import { Download, Save, RefreshCw, Plus, Trash2 } from "lucide-react";
import { Input } from "./ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface PatientData {
  id: string;
  tanggal: string;
  ruang: string;
  pasienMasuk: number;
  pasienKeluar: number;
  lamaDirawat: number;
  sisaPasien: number;
}

export default function Stase6Page() {
  const [data, setData] = useState<PatientData[]>([
    {
      id: "1",
      tanggal: "2026-02-01",
      ruang: "Ruang A",
      pasienMasuk: 15,
      pasienKeluar: 8,
      lamaDirawat: 3,
      sisaPasien: 7,
    },
    {
      id: "2",
      tanggal: "2026-02-02",
      ruang: "Ruang B",
      pasienMasuk: 12,
      pasienKeluar: 10,
      lamaDirawat: 4,
      sisaPasien: 2,
    },
    {
      id: "3",
      tanggal: "2026-02-03",
      ruang: "Ruang C",
      pasienMasuk: 18,
      pasienKeluar: 15,
      lamaDirawat: 2,
      sisaPasien: 3,
    },
    {
      id: "4",
      tanggal: "2026-02-04",
      ruang: "Ruang A",
      pasienMasuk: 20,
      pasienKeluar: 12,
      lamaDirawat: 5,
      sisaPasien: 8,
    },
    {
      id: "5",
      tanggal: "2026-02-05",
      ruang: "Ruang D",
      pasienMasuk: 16,
      pasienKeluar: 14,
      lamaDirawat: 3,
      sisaPasien: 2,
    },
  ]);

  const handleSave = () => {
    alert("Data berhasil disimpan!");
  };

  const handleExport = () => {
    alert("Export ke Excel akan dilakukan...");
  };

  const handleGenerateTemplate = () => {
    const newData: PatientData = {
      id: String(data.length + 1),
      tanggal: "",
      ruang: "",
      pasienMasuk: 0,
      pasienKeluar: 0,
      lamaDirawat: 0,
      sisaPasien: 0,
    };
    setData([...data, newData]);
  };

  const handleUpdateCell = (
    id: string,
    field: keyof PatientData,
    value: string | number
  ) => {
    setData(
      data.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const handleDelete = (id: string) => {
    setData(data.filter((row) => row.id !== id));
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-blue-900 mb-2">Stase 6 – Statistik</h1>
        <p className="text-gray-600">
          Kelola data statistik pasien rawat inap
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Save className="w-4 h-4 mr-2" />
          Simpan
        </Button>
        <Button
          onClick={handleExport}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          Export Excel
        </Button>
        <Button
          onClick={handleGenerateTemplate}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Generate Template Baru
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-600 hover:bg-blue-600">
                <TableHead className="text-white font-semibold">Tanggal</TableHead>
                <TableHead className="text-white font-semibold">Ruang</TableHead>
                <TableHead className="text-white font-semibold">Pasien Masuk</TableHead>
                <TableHead className="text-white font-semibold">Pasien Keluar</TableHead>
                <TableHead className="text-white font-semibold">Lama Dirawat</TableHead>
                <TableHead className="text-white font-semibold">Sisa Pasien</TableHead>
                <TableHead className="text-white font-semibold">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow
                  key={row.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <TableCell>
                    <Input
                      type="date"
                      value={row.tanggal}
                      onChange={(e) =>
                        handleUpdateCell(row.id, "tanggal", e.target.value)
                      }
                      className="border-gray-300"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="text"
                      value={row.ruang}
                      onChange={(e) =>
                        handleUpdateCell(row.id, "ruang", e.target.value)
                      }
                      className="border-gray-300"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={row.pasienMasuk}
                      onChange={(e) =>
                        handleUpdateCell(
                          row.id,
                          "pasienMasuk",
                          parseInt(e.target.value) || 0
                        )
                      }
                      className="border-gray-300"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={row.pasienKeluar}
                      onChange={(e) =>
                        handleUpdateCell(
                          row.id,
                          "pasienKeluar",
                          parseInt(e.target.value) || 0
                        )
                      }
                      className="border-gray-300"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={row.lamaDirawat}
                      onChange={(e) =>
                        handleUpdateCell(
                          row.id,
                          "lamaDirawat",
                          parseInt(e.target.value) || 0
                        )
                      }
                      className="border-gray-300"
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={row.sisaPasien}
                      onChange={(e) =>
                        handleUpdateCell(
                          row.id,
                          "sisaPasien",
                          parseInt(e.target.value) || 0
                        )
                      }
                      className="border-gray-300"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(row.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 text-sm text-gray-500">
        Total {data.length} baris data
      </div>
    </div>
  );
}
