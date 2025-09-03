import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    title: "Analisa On-Chain & Teknis",
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
      {/* ... (kode bagian navbar, hero, features, market, artikel, newsletter tetap sama) ... */}

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
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Menu</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                <li><a href="#features" className="hover:underline">Fitur</a></li>
                <li><a href="#market" className="hover:underline">Market</a></li>
                <li><a href="#artikel" className="hover:underline">Artikel</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Sosial</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Telegram</a></li>
                <li><a href="#">Discord</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                <li><a href="#">Ketentuan</a></li>
                <li><a href="#">Privasi</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} CryptoScope. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
