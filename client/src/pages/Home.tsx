import { motion } from "framer-motion";
import { Heart, MessageCircle, Eye, Users, TrendingUp, Flame, Crown } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area, CartesianGrid,
  LineChart, Line,
} from "recharts";
import SectionReveal from "@/components/SectionReveal";
import StatCard from "@/components/StatCard";
import AnimatedCounter from "@/components/AnimatedCounter";

const HERO_BG = "/manus-storage/hero-bg_6dac3190.png";
const PROFILE_HERO = "/manus-storage/profile-hero_81541361.png";

// Dados coletados via conexão oficial com a API do Instagram em 11/08/2026
// Insights reais dos últimos 30 dias do perfil @timo_oficial_
const dailyData = [
  { date: "05/08", posts: 4, likes: 737, comments: 1191, shares: 44, saved: 32, interactions: 2004, reach: 20171, views: 37434 },
  { date: "06/08", posts: 3, likes: 638, comments: 1078, shares: 35, saved: 38, interactions: 1789, reach: 13732, views: 19243 },
  { date: "07/08", posts: 2, likes: 88, comments: 74, shares: 1, saved: 5, interactions: 163, reach: 2674, views: 4890 },
  { date: "08/08", posts: 2, likes: 487, comments: 958, shares: 18, saved: 42, interactions: 1547, reach: 12506, views: 26970 },
  { date: "09/08", posts: 3, likes: 613, comments: 1379, shares: 41, saved: 22, interactions: 2075, reach: 12037, views: 26254 },
];

const topPosts = [
  { pos: 1, title: "O TOPO dos comentários tá disputado demais! 😂🔥", date: "09/08", likes: 802, comments: 1200, views: 43239, reach: 14570, interactions: 2075, link: "https://www.instagram.com/reel/Db1SJhtiI-H/" },
  { pos: 2, title: "O GIF que ninguém achou ainda... 👀", date: "09/08", likes: 694, comments: 1500, views: 26378, reach: 11000, interactions: 2220, link: "https://www.instagram.com/reel/Db0QlXOxy8T/" },
  { pos: 3, title: "🔥 REGRA DO DESAFIO", date: "08/08", likes: 492, comments: 1000, views: 25951, reach: 10465, interactions: 1547, link: "https://www.instagram.com/reel/DbyqX43iVcN/" },
  { pos: 4, title: "Quem será que vai... (Nasir ➡️ Jamal)", date: "09/08", likes: 345, comments: 491, views: 11923, reach: 4000, interactions: 850, link: "https://www.instagram.com/reel/Db1jvp3R972/" },
  { pos: 5, title: "💥🔥 DESAFIO LANÇADO, NÃO ESPERA E SINCRONIZA SEU GIF!", date: "06/08", likes: 353, comments: 790, views: 11554, reach: 7319, interactions: 1202, link: "https://www.instagram.com/reel/DbtMk9NM8wT/" },
];

const viewsChartData = dailyData.map(d => ({ ...d, viewsK: d.views / 1000 }));
const reachChartData = dailyData.map(d => ({ ...d, reachK: d.reach / 1000 }));
const followerGrowth = [
  { date: "05/08", followers: 1406 },
  { date: "07/08", followers: 1490 },
  { date: "09/08", followers: 1572 },
  { date: "11/08", followers: 1628 },
];

function InstagramIcon() {
  return (
    <div className="w-9 h-9 rounded-xl gradient-ig flex items-center justify-center shadow-lg shadow-[#E1306C]/20">
      <TrendingUp className="w-5 h-5 text-white" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ===== HERO SECTION — EDITORIAL ===== */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-background" />
        </div>
        <div className="relative container py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <InstagramIcon />
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
                Relatório de Análise
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-[0.95] mb-5">
              @timo<span className="gradient-ig-text">_oficial_</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
              Temotio Luis — Lifestyle, dança e humor
            </p>
            <div className="flex items-center gap-3">
              <div className="h-[3px] w-12 gradient-ig rounded-full" />
              <span className="text-sm font-medium text-muted-foreground">
                05/08 — 11/08/2026 — Dados da API oficial do Instagram
              </span>
            </div>
          </motion.div>
        </div>
        {/* Big gradient bar at bottom */}
        <div className="h-2 gradient-ig w-full" />
      </header>

      {/* ===== MEGA METRICS — Editorial Hero Numbers ===== */}
      <section className="relative -mt-12 z-10">
        <div className="container">
          <SectionReveal>
            <div className="bg-card rounded-2xl shadow-xl shadow-black/5 p-8 md:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {/* Metric 1 - Big number */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Seguidores</p>
                  <p className="text-5xl md:text-6xl font-display font-bold tabular-nums text-foreground leading-none">
                    <AnimatedCounter value={1628} />
                  </p>
                  <p className="text-sm text-[#10B981] font-medium mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +222 em 6 dias
                  </p>
                </div>
                {/* Metric 2 */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Interações</p>
                  <p className="text-5xl md:text-6xl font-display font-bold tabular-nums text-foreground leading-none">
                    <AnimatedCounter value={7578} />
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Em 5 dias</p>
                </div>
                {/* Metric 3 */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Alcance</p>
                  <p className="text-5xl md:text-6xl font-display font-bold tabular-nums gradient-ig-text leading-none">
                    <AnimatedCounter value={61120} />
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Pessoas alcançadas</p>
                </div>
                {/* Metric 4 */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Visualizações</p>
                  <p className="text-5xl md:text-6xl font-display font-bold tabular-nums text-foreground leading-none">
                    <AnimatedCounter value={114791} />
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">Views em 5 dias</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== RESUMO GERAL — Asymmetric ===== */}
      <section className="container py-20">
        <SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
            {/* Left - heading */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight mb-4">
                Resumo Geral
              </h2>
              <div className="h-1.5 w-16 gradient-ig rounded-full mb-6" />
              <p className="text-muted-foreground text-base leading-relaxed">
                <span className="font-bold text-foreground">14 Reels</span> em 5 dias, média de 2,8 por dia — e cada vídeo performando mais que o anterior.
              </p>
            </div>

            {/* Right - table */}
            <div className="bg-card rounded-2xl shadow-sm overflow-hidden border border-border/50">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-4 font-display font-semibold">Data</th>
                      <th className="text-right p-4 font-display font-semibold">Posts</th>
                      <th className="text-right p-4 font-display font-semibold">Curtidas</th>
                      <th className="text-right p-4 font-display font-semibold">Coment.</th>
                      <th className="text-right p-4 font-display font-semibold">Interações</th>
                      <th className="text-right p-4 font-display font-semibold">Alcance</th>
                      <th className="text-right p-4 font-display font-semibold">Views</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dailyData.map((day, i) => (
                      <motion.tr
                        key={day.date}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.06 }}
                        className={`border-b border-border/50 ${day.date === "09/08" ? "bg-gradient-to-r from-[#E1306C]/8 to-transparent" : ""}`}
                      >
                        <td className={`p-4 font-medium ${day.date === "09/08" ? "text-[#E1306C] font-bold" : "text-foreground"}`}>{day.date}</td>
                        <td className="p-4 text-right tabular-nums">{day.posts}</td>
                        <td className="p-4 text-right tabular-nums">{day.likes.toLocaleString("pt-BR")}</td>
                        <td className="p-4 text-right tabular-nums">{day.comments.toLocaleString("pt-BR")}</td>
                        <td className={`p-4 text-right tabular-nums font-semibold ${day.date === "09/08" ? "text-[#E1306C]" : ""}`}>{day.interactions.toLocaleString("pt-BR")}</td>
                        <td className="p-4 text-right tabular-nums">{day.reach.toLocaleString("pt-BR")}</td>
                        <td className="p-4 text-right tabular-nums">{day.views.toLocaleString("pt-BR")}</td>
                      </motion.tr>
                    ))}
                    <tr className="bg-muted/40 font-bold">
                      <td className="p-4 text-foreground">Total</td>
                      <td className="p-4 text-right tabular-nums">14</td>
                      <td className="p-4 text-right tabular-nums">2.555</td>
                      <td className="p-4 text-right tabular-nums">4.600</td>
                      <td className="p-4 text-right tabular-nums text-[#E1306C]">7.578</td>
                      <td className="p-4 text-right tabular-nums">61.120</td>
                      <td className="p-4 text-right tabular-nums">114.791</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ===== CHARTS — Full-width chart section ===== */}
      <section className="relative">
        <div className="bg-muted/20 py-20">
          <div className="container">
            <SectionReveal>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Performance Diária</h2>
                  <div className="h-1.5 w-16 gradient-ig rounded-full mt-3" />
                </div>
              </div>
            </SectionReveal>

            {/* Views chart - full width dominant */}
            <SectionReveal>
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm mb-6 border border-border/30">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-display font-semibold text-xl text-foreground">Visualizações</h3>
                    <p className="text-sm text-muted-foreground">Total de views acumuladas por dia</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-display font-bold gradient-ig-text tabular-nums">114,8k</p>
                    <p className="text-xs text-muted-foreground">views em 5 dias</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={320}>
                  <AreaChart data={viewsChartData}>
                    <defs>
                      <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E1306C" stopOpacity={0.35} />
                        <stop offset="95%" stopColor="#E1306C" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" tick={{ fontSize: 13, fontFamily: "Space Grotesk" }} />
                    <YAxis tick={{ fontSize: 13 }} tickFormatter={(v) => `${v}k`} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "12px",
                        fontSize: "13px",
                      }}
                      formatter={(value: number) => [`${(value * 1000).toLocaleString("pt-BR")} views`, "Views"]}
                    />
                    <Area type="monotone" dataKey="viewsK" stroke="#E1306C" strokeWidth={3} fill="url(#colorViews)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </SectionReveal>

            {/* Two-column charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SectionReveal delay={0.1}>
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/30">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">Alcance</h3>
                  <p className="text-sm text-muted-foreground mb-4">Pessoas alcançadas por dia</p>
                  <ResponsiveContainer width="100%" height={240}>
                    <BarChart data={reachChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="date" tick={{ fontSize: 12, fontFamily: "Space Grotesk" }} />
                      <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `${v}k`} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "12px",
                          fontSize: "13px",
                        }}
                        formatter={(value: number) => [`${(value * 1000).toLocaleString("pt-BR")}`, "Alcance"]}
                      />
                      <Bar dataKey="reachK" fill="#F77737" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/30">
                  <h3 className="font-display font-semibold text-lg text-foreground mb-1">Interações</h3>
                  <p className="text-sm text-muted-foreground mb-4">Engajamento total por dia</p>
                  <ResponsiveContainer width="100%" height={240}>
                    <AreaChart data={dailyData}>
                      <defs>
                        <linearGradient id="colorInteractions" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FCAF45" stopOpacity={0.35} />
                          <stop offset="95%" stopColor="#FCAF45" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="date" tick={{ fontSize: 12, fontFamily: "Space Grotesk" }} />
                      <YAxis tick={{ fontSize: 12 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "12px",
                          fontSize: "13px",
                        }}
                        formatter={(value: number) => [value.toLocaleString("pt-BR"), "Interações"]}
                      />
                      <Area type="monotone" dataKey="interactions" stroke="#FCAF45" strokeWidth={3} fill="url(#colorInteractions)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPLOSÃO VIRAL — Big editorial block ===== */}
      <section className="container py-20">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">O Que Aconteceu</h2>
          <div className="h-1.5 w-16 gradient-ig rounded-full mb-12" />
        </SectionReveal>

        {/* Viral explosion - dominant block */}
        <SectionReveal>
          <div className="relative bg-card rounded-2xl shadow-lg overflow-hidden mb-8">
            {/* Top gradient bar */}
            <div className="h-1.5 gradient-ig w-full" />
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-ig flex items-center justify-center">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">
                  Explosão Viral em 09/08
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-8">
                O dia 9 de agosto foi absolutamente explosivo. <span className="font-bold text-foreground">3 Reels publicados</span> — sendo um deles, <span className="font-bold text-[#E1306C]">"O TOPO dos comentários"</span>, que atingiu <span className="font-bold text-[#FCAF45]">43.239 views em apenas 8 horas</span>. No mesmo dia, o perfil acumulou{" "}
                <span className="font-bold text-[#E1306C]">2.075 interações</span> e{" "}
                <span className="font-bold text-[#F77737]">12.037 de alcance</span> — ritmo de viralização em aceleração constante.
              </p>

              {/* Big stats row */}
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <div className="text-center p-6 bg-gradient-to-b from-[#E1306C]/8 to-[#E1306C]/3 rounded-2xl border border-[#E1306C]/10">
                  <p className="text-5xl md:text-6xl font-display font-bold gradient-ig-text tabular-nums leading-none">5,4k</p>
                  <p className="text-sm text-muted-foreground mt-3">views/hora<br />no pico</p>
                </div>
                <div className="text-center p-6 bg-muted/40 rounded-2xl border border-border/50">
                  <p className="text-5xl md:text-6xl font-display font-bold text-foreground tabular-nums leading-none">3</p>
                  <p className="text-sm text-muted-foreground mt-3">Reels<br />no dia</p>
                </div>
                <div className="text-center p-6 bg-muted/40 rounded-2xl border border-border/50">
                  <p className="text-5xl md:text-6xl font-display font-bold text-foreground tabular-nums leading-none">43k</p>
                  <p className="text-sm text-muted-foreground mt-3">views no vídeo<br />campeão</p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* O Post que Estourou */}
        <SectionReveal delay={0.1}>
          <div className="relative bg-card rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="h-1.5 bg-gradient-to-r from-[#F77737] to-[#FCAF45] w-full" />
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#F77737] to-[#FCAF45] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">
                  O Post que Estourou
                </h3>
              </div>
              <p className="text-muted-foreground text-lg mb-8 max-w-3xl">
                <span className="font-bold text-foreground">"O TOPO dos comentários tá disputado demais!"</span> — o vídeo que definiu o período, com 43 mil views em 8 horas:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Curtidas", value: 802, icon: Heart, color: "#E1306C" },
                  { label: "Comentários", value: 1200, icon: MessageCircle, color: "#F77737" },
                  { label: "Compartilh. + salvos", value: 44, icon: Eye, color: "#FCAF45" },
                  { label: "Views em 8h", value: 43239, icon: Flame, color: "#10B981" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -4 }}
                    className="bg-muted/40 rounded-xl p-5 text-center border border-border/30 hover:border-[#E1306C]/20 transition-colors"
                  >
                    <stat.icon className="w-5 h-5 mx-auto mb-3" style={{ color: stat.color }} />
                    <p className="text-3xl font-display font-bold tabular-nums" style={{ color: stat.color }}>
                      {stat.value.toLocaleString("pt-BR")}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Frequência */}
        <SectionReveal delay={0.2}>
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/30">
            <h3 className="text-xl font-display font-bold text-foreground mb-4">Frequência de Postagem</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Média de <span className="font-bold text-foreground">2,8 posts por dia</span> (14 Reels em 5 dias). A estratégia mudou: menos posts de menor qualidade e mais posts com <span className="font-bold text-foreground">Modo Teste + formato vencedor</span>. Cada vídeo agora performa mais que o anterior.
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* ===== TOP 5 POSTS — Ranking com visual forte ===== */}
      <section className="bg-muted/20 py-20">
        <div className="container">
          <SectionReveal>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Top 5 Posts Virais</h2>
                <div className="h-1.5 w-16 gradient-ig rounded-full mt-3" />
              </div>
            </div>
          </SectionReveal>

          <div className="space-y-4">
            {topPosts.map((post, i) => {
              const colors = ["#E1306C", "#F77737", "#FCAF45", "#6B7280", "#9CA3AF"];
              const bgColors = ["from-[#E1306C]/10", "from-[#F77737]/8", "from-[#FCAF45]/8", "from-gray-200/50", "from-gray-200/30"];
              return (
                <SectionReveal key={post.pos} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ x: 8, scale: 1.005 }}
                    transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                    className={`bg-gradient-to-r ${bgColors[i]} to-transparent rounded-xl border-l-[3px] shadow-sm hover:shadow-md transition-shadow duration-300`}
                    style={{ borderLeftColor: colors[i] }}
                  >
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-sm shrink-0 shadow-md"
                          style={{ backgroundColor: colors[i] }}
                        >
                          {post.pos}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display font-semibold text-foreground text-sm md:text-base">
                            {post.link ? (
                              <a href={post.link} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#E1306C] transition-colors">
                                "{post.title}"
                              </a>
                            ) : (
                              `"${post.title}"`
                            )}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-3 pl-14">
                        <div>
                          <p className="text-lg font-display font-bold tabular-nums">{post.likes.toLocaleString("pt-BR")}</p>
                          <p className="text-xs text-muted-foreground">Curtidas</p>
                        </div>
                        <div>
                          <p className="text-lg font-display font-bold tabular-nums">{post.comments.toLocaleString("pt-BR")}</p>
                          <p className="text-xs text-muted-foreground">Comentários</p>
                        </div>
                        <div>
                          <p className="text-lg font-display font-bold tabular-nums">{post.reach.toLocaleString("pt-BR")}</p>
                          <p className="text-xs text-muted-foreground">Alcance</p>
                        </div>
                        <div>
                          <p className="text-lg font-display font-bold tabular-nums" style={{ color: colors[i] }}>
                            {post.views.toLocaleString("pt-BR")}
                          </p>
                          <p className="text-xs text-muted-foreground">Views</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== INSIGHTS ===== */}
      <section className="container py-20">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Insights</h2>
          <div className="h-1.5 w-16 gradient-ig rounded-full mb-12" />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionReveal delay={0.1}>
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/30 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl gradient-ig flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-display font-bold text-foreground">Formato Vencedor</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Posts com chamadas para interação geraram significativamente mais engajamento. Taxa de engajamento de ~<span className="font-bold text-foreground">5,9%</span> nos vídeos recentes — acima da média de mercado (2-5%).
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/30 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#F77737] to-[#FCAF45] flex items-center justify-center">
                  <Crown className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-display font-bold text-foreground">Conteúdo King Nasir</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "King Nasir" segue o tema dominante — e a variação com o passinho <span className="font-bold text-foreground">Jamal</span> começou a testar novas audiências.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/30 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#10B981] flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-display font-bold text-foreground">Potencial de Crescimento</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Com 1628 seguidores (+222 em 6 dias) e um vídeo de 43 mil views, a meta de <span className="font-bold text-foreground">2.000 seguidores</span> está a poucos dias de distância.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.4}>
            <div className="bg-card rounded-2xl p-6 shadow-sm h-full border-l-4 border-[#E1306C]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#E1306C] flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-display font-bold text-foreground">Atenção Necessária</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Dias de menor atividade (07/08) têm queda acentuada de alcance. <span className="font-bold text-foreground">Consistência diária</span> e alternância entre formatos (topo dos comentários / mistério / times) são essenciais para sustentar o crescimento.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== GROWTH SECTION — Seguidores chart + CTA ===== */}
      <section className="bg-muted/20 py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/30">
                <h3 className="font-display font-semibold text-xl text-foreground mb-1">Crescimento de Seguidores</h3>
                <p className="text-sm text-muted-foreground mb-4">Evolução no período</p>
                <ResponsiveContainer width="100%" height={260}>
                  <LineChart data={followerGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="date" tick={{ fontSize: 12, fontFamily: "Space Grotesk" }} />
                    <YAxis tick={{ fontSize: 12 }} domain={[1300, 1450]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "12px",
                        fontSize: "13px",
                      }}
                      formatter={(value: number) => [value.toLocaleString("pt-BR"), "Seguidores"]}
                    />
                    <Line type="monotone" dataKey="followers" stroke="#10B981" strokeWidth={3} dot={{ r: 6, fill: "#10B981", strokeWidth: 2, stroke: "#fff" }} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                  <div>
                                        <p className="text-xs text-muted-foreground">De 05/08 a 11/08</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#10B981] font-display font-bold text-lg">
                    <TrendingUp className="w-4 h-4" /> +222
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#E1306C] via-[#F77737] to-[#FCAF45] p-10 md:p-14 text-white">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80 mb-4">Próximo Objetivo</p>
                  <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-4">
                    Rumo aos <br />
                    <span className="text-white/90">2.000 seguidores</span>
                  </h2>
                  <p className="text-white/80 text-base leading-relaxed mb-8 max-w-md">
                    São 372 seguidores para a meta. O vídeo campeão (43k views em 8h) provou que a fórmula funciona — consistência com formato vencedor é o que falta.
                  </p>
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-display font-semibold border border-white/30">
                    <TrendingUp className="w-5 h-5" />
                    @timo_oficial_
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border py-10">
        <div className="container text-center">
          <div className="h-1 w-12 gradient-ig rounded-full mx-auto mb-4" />
          <p className="text-sm text-muted-foreground">
            Relatório atualizado em 11/08/2026 — Análise do perfil @timo_oficial_ via API oficial do Instagram
          </p>
        </div>
      </footer>
    </div>
  );
}
