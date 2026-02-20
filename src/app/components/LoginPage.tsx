import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Activity } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState<string>("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (role === "peserta") {
      navigate("/peserta/dashboard");
    } else if (role === "penguji") {
      navigate("/penguji/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Login Card */}
      <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-600 p-4 rounded-full">
            <Activity className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-center text-blue-900 mb-8">
          Aplikasi Simulasi OSCE<br />Rekam Medis
        </h1>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Role Selection */}
          <div className="space-y-2">
            <Label htmlFor="role" className="text-gray-700">Role</Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger id="role" className="bg-gray-50 border-gray-300">
                <SelectValue placeholder="Pilih role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="peserta">Peserta</SelectItem>
                <SelectItem value="penguji">Penguji</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username" className="text-gray-700">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-50 border-gray-300"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border-gray-300"
              required
            />
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-lg"
            disabled={!role || !username || !password}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
