import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Bitcoin, LineChart as LineChartIcon, Newspaper, ShieldCheck, Zap, Moon, Sun, ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Regulasi & Keamanan",
    desc: "Pantau perkembangan regulasi dan praktik keamanan terkini di dunia kripto.",
  },
  {
    icon: <LineChartIcon className="h-6 w-6" />,
    title: "Analisa On‑Chain & Teknis",
    desc: "Chart interaktif, indikator tren, serta insight siklus pasar.",
  },
  {
    icon: <Newspaper className="h-6 w-6" />,
    title: "Berita & Edukasi",
    desc: "Rangkuman berita, glossary, dan artikel edukatif untuk semua level.",
  },
];

const ArticleCard = () => (
  <Card className="rounded-2xl shadow-sm border-0 bg-gradient-to-b from-slate-900/60 to-slate-900/20 text-slate-100">
    <CardHeader>
      <div className="flex items-center gap-2">
        <Badge className="bg-emerald-500/20 text-emerald-300">Analisa</Badge>
        <Badge variant="outline" className="border-slate-600 text-slate-300">BTC</Badge>
      </div>
      <CardTitle className="text-xl md:text-2xl font-semibold leading-tight">
        Potensi Bitcoin Menuju $130.000: Katalis, Risiko, & Skenario Harga
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 text-slate-300">
      <p>
        Bitcoin tetap memimpin pasar kripto. Dengan katalis seperti <span className="text-slate-100 font-medium">ETF spot</span>,
        <span className="text-slate-100 font-medium"> halving</span>, dan adopsi institusional, target psikologis
        <span className="text-slate-100 font-medium"> $100k</span> menjadi pintu menuju <span className="text-slate-100 font-medium">$120k–$130k</span>.
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Supply shock pasca halving memperketat pasokan.</li>
        <li>ETF spot menambah likuiditas & akses institusi.</li>
        <li>Makro: inflasi & diversifikasi aset mendorong permintaan.</li>
      </ul>
      <p className="text-sm text-slate-400">
        Disclaimer: Bukan nasihat keuangan. Lakukan riset dan manajemen risiko.
      </p>
    </CardContent>
    <CardFooter>
      <Button size="sm" className="gap-2">
        Baca Artikel Lengkap <ArrowRight className="h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
);

export default function CryptoLanding() {
  const [dark, setDark] = useState(true);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true"
        );
        const data = await res.json();
        setPrices([
          {
            symbol: "BTC",
            name: "Bitcoin",
            price: data.bitcoin.usd,
            change: data.bitcoin.usd_24h_change,
            icon: <Bitcoin className="h-5 w-5" />,
          },
          {
            symbol: "ETH",
            name: "Ethereum",
            price: data.ethereum.usd,
            change: data.ethereum.usd_24h_change,
            icon: <TrendingUp className="h-5 w-5" />,
          },
          {
            symbol: "SOL",
            name: "Solana",
            price: data.solana.usd,
            change: data.solana.usd_24h_change,
            icon: <TrendingUp className="h-5 w-5" />,
          },
        ]);
      } catch (e) {
        console.error("Failed to fetch prices", e);
      }
    }
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100 selection:bg-emerald-200/60 selection:text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/40 border-b border-slate-200/40 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
              <Bitcoin className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">CryptoScope</span>
            <Badge className="ml-2 hidden md:inline-flex bg-emerald-500/20 text-emerald-300">Beta</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 dark:text-slate-300">
            <a href="#features" className="hover:text-slate-900 dark:hover:text-white">Fitur</a>
            <a href="#market" className="hover:text-slate-900 dark:hover:text-white">Market</a>
            <a href="#artikel" className="hover:text-slate-900 dark:hover:text-white">Artikel</a>
            <a href="#langganan" className="hover:text-slate-900 dark:hover:text-white">Langganan</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} className="rounded-2xl">
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button size="sm" className="rounded-2xl">Mulai</Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 bg-emerald-400/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 h-96 w-96 bg-sky-400/10 blur-3xl rounded-full" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <Badge className="w-fit bg-emerald-500/15 text-emerald-300 flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              Tren Kripto Hari Ini
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
              Analisa BTC Menuju <span className="text-emerald-400">$130K</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-xl">
              Bangun keunggulan Anda dengan data pasar, analisa teknikal, dan insight makro — semua dalam satu place.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="rounded-2xl gap-2">
                Lihat Market <TrendingUp className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-2xl gap-2">
                Baca Analisa <Newspaper className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-2xl border-0 shadow-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <LineChartIcon className="h-5 w-5" /> Live Snapshot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {prices.map((c) => (
                    <div key={c.symbol} className="flex items-center justify-between rounded-xl border border-slate-200/50 dark:border-slate-800 p-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">{c.icon}</div>
                        <div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{c.name}</p>
                          <p className="font-semibold">{c.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${c.price?.toLocaleString()}</p>
                        <p className={
                          "text-xs " + (c.change >= 0 ? "text-emerald-500" : "text-rose-500")
                        }>
                          {c.change >= 0 ? "+" : ""}
                          {c.change?.toFixed(2)}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
              <Card className="rounded-2xl border-slate-200/50 dark:border-slate-800">
                <CardHeader>
                  <div className="p-2 w-fit rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-500">{f.icon}</div>
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 dark:text-slate-300">{f.desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MARKET SECTION */}
      <section id="market" className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <Card className="lg:col-span-2 rounded-2xl border-0 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <TrendingUp className="h-5 w-5" /> Market Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 text-sm">(Integrasi chart live bisa ditambahkan dengan API Coingecko Pro)</p>
            </CardContent>
          </Card>

          <ArticleCard />
        </div>
      </section>

      {/* ARTICLE LIST */}
      <section id="artikel" className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold tracking-tight">Artikel Terbaru</h2>
          <p className="text-slate-600 dark:text-slate-300">Analisa, panduan, dan rangkuman berita pilihan.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="rounded-2xl border-slate-200/50 dark:border-slate-800">
              <CardHeader>
                <Badge className="w-fit bg-sky-500/15 text-sky-300">Edukasi</Badge>
                <CardTitle className="text-lg">Memahami Halving & Dampaknya</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 dark:text-slate-300">
                Ringkasan sederhana tentang mekanisme halving, supply issuance, dan kaitannya dengan siklus harga.
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="rounded-2xl gap-2">Baca <ArrowRight className="h-4 w-4" /></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="langganan" className="mx-auto max-w-3xl px-4 pb-20">
        <Card className="rounded-2xl border-0 bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-fuchsia-500/10">
          <CardHeader>
            <CardTitle className="text-xl">Dapatkan Insight Mingguan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Berlangganan newsletter kami untuk ringkasan market, indikator penting, dan artikel edukasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input placeholder="Email kamu" className="rounded-2xl" />
              <Button className="rounded-2xl gap-2"><Zap className="h-4 w-4" /> Langganan</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/50 dark:border-slate-800 py-10">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                <Bitcoin className="h-5 w-5" />
              </div>
              <span className="font-semibold tracking-tight">CryptoScope</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Konten bersifat informatif & edukatif. Bukan nasihat investasi. DYOR.
            </p>
