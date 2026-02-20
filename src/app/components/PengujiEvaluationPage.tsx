import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Save, CheckCircle, FileSpreadsheet } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface RubricItem {
  id: string;
  komponen: string;
  skor: number;
  maxSkor: number;
}

export default function PengujiEvaluationPage() {
  const [participantName] = useState("Muhammad Rizki");
  const [stase] = useState("Stase 6");

  const [rubric, setRubric] = useState<RubricItem[]>([
    { id: "1", komponen: "Kelengkapan Data", skor: 0, maxSkor: 20 },
    { id: "2", komponen: "Akurasi Perhitungan", skor: 0, maxSkor: 25 },
    { id: "3", komponen: "Format dan Struktur", skor: 0, maxSkor: 15 },
    { id: "4", komponen: "Analisis Statistik", skor: 0, maxSkor: 20 },
    { id: "5", komponen: "Kesimpulan dan Rekomendasi", skor: 0, maxSkor: 20 },
  ]);

  // Sample Excel preview data
  const excelPreview = [
    { tanggal: "2026-02-01", ruang: "Ruang A", pasienMasuk: 15, pasienKeluar: 8, lamaDirawat: 3, sisaPasien: 7 },
    { tanggal: "2026-02-02", ruang: "Ruang B", pasienMasuk: 12, pasienKeluar: 10, lamaDirawat: 4, sisaPasien: 2 },
    { tanggal: "2026-02-03", ruang: "Ruang C", pasienMasuk: 18, pasienKeluar: 15, lamaDirawat: 2, sisaPasien: 3 },
  ];

  const totalNilai = rubric.reduce((sum, item) => sum + item.skor, 0);
  const maxTotal = rubric.reduce((sum, item) => sum + item.maxSkor, 0);

  const handleScoreChange = (id: string, value: number) => {
    setRubric(
      rubric.map((item) => {
        if (item.id === id) {
          // Ensure score doesn't exceed max score
          const newScore = Math.min(Math.max(0, value), item.maxSkor);
          return { ...item, skor: newScore };
        }
        return item;
      })
    );
  };

  const handleSave = () => {
    alert("Nilai berhasil disimpan!");
  };

  const handleFinalize = () => {
    if (confirm("Apakah Anda yakin ingin memfinalisasi nilai? Nilai tidak dapat diubah setelah difinalisasi.")) {
      alert("Nilai berhasil difinalisasi!");
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-blue-900 mb-2">Evaluasi Peserta</h1>
        <div className="flex gap-4 text-gray-600">
          <span>Peserta: <strong>{participantName}</strong></span>
          <span>•</span>
          <span>Materi: <strong>{stase}</strong></span>
        </div>
      </div>

      {/* Section 1: Excel Preview */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FileSpreadsheet className="w-5 h-5 text-blue-600" />
          <h2 className="text-blue-900">Preview Hasil Excel Peserta</h2>
        </div>
        
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {excelPreview.map((row, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <TableCell>{row.tanggal}</TableCell>
                  <TableCell>{row.ruang}</TableCell>
                  <TableCell>{row.pasienMasuk}</TableCell>
                  <TableCell>{row.pasienKeluar}</TableCell>
                  <TableCell>{row.lamaDirawat}</TableCell>
                  <TableCell>{row.sisaPasien}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Section 2: Rubric Assessment */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-6 mb-6">
        <h2 className="text-blue-900 mb-4">Rubrik Penilaian</h2>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-600 hover:bg-blue-600">
                <TableHead className="text-white font-semibold">Komponen Penilaian</TableHead>
                <TableHead className="text-white font-semibold">Skor Maksimal</TableHead>
                <TableHead className="text-white font-semibold">Skor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rubric.map((item, index) => (
                <TableRow key={item.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <TableCell className="font-medium">{item.komponen}</TableCell>
                  <TableCell className="text-center">{item.maxSkor}</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      min={0}
                      max={item.maxSkor}
                      value={item.skor}
                      onChange={(e) =>
                        handleScoreChange(item.id, parseInt(e.target.value) || 0)
                      }
                      className="w-24 border-gray-300"
                    />
                  </TableCell>
                </TableRow>
              ))}
              {/* Total Row */}
              <TableRow className="bg-blue-50 font-semibold">
                <TableCell className="text-blue-900">Total Nilai</TableCell>
                <TableCell className="text-center text-blue-900">{maxTotal}</TableCell>
                <TableCell>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block font-semibold">
                    {totalNilai} / {maxTotal}
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Button
          onClick={handleSave}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Save className="w-4 h-4 mr-2" />
          Simpan Nilai
        </Button>
        <Button
          onClick={handleFinalize}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Finalisasi
        </Button>
      </div>
    </div>
  );
}
