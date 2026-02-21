import Image from 'next/image';
import { ShieldAlert, Fingerprint, Activity, Crosshair, Terminal } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 font-mono uppercase selection:bg-white selection:text-black">
      <div className="max-w-6xl mx-auto border border-white/20 relative p-1">
        {/* Corner markers */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white -translate-x-1 -translate-y-1" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white translate-x-1 -translate-y-1" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white -translate-x-1 translate-y-1" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white translate-x-1 translate-y-1" />

        <header className="border-b border-white/20 p-4 flex justify-between items-end">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">DOSSIER // 892-X</h1>
            <p className="text-white/50 text-sm tracking-widest">CLASSIFIED INTELLIGENCE DATABASE</p>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-xs text-white/50 mb-1">CLEARANCE LEVEL: <span className="text-white">OMEGA</span></p>
            <p className="text-xs text-white/50">STATUS: <span className="text-white animate-pulse">ACTIVE</span></p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-white/20">
          
          {/* Left Column - Portrait */}
          <div className="md:col-span-4 bg-black p-4 flex flex-col">
            <div className="relative aspect-[3/4] w-full border border-white/20 mb-4 overflow-hidden group">
              <div className="absolute inset-0 z-10 scanlines pointer-events-none opacity-50" />
              <Image
                src="https://picsum.photos/800/1066?grayscale"
                alt="Subject Portrait"
                fill
                className="object-cover halftone transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 right-2 z-20 bg-black/80 px-2 py-1 border border-white/20 text-[10px] tracking-widest">
                IMG_REF_0492
              </div>
              <div className="absolute top-2 left-2 z-20">
                <Crosshair className="w-6 h-6 text-white/50" />
              </div>
            </div>
            
            <div className="space-y-4 flex-grow">
              <div className="border border-white/20 p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-white/50">BIOMETRICS</span>
                  <Fingerprint className="w-4 h-4 text-white/50" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="block text-white/30">BLOOD TYPE</span>
                    <span>O-NEGATIVE</span>
                  </div>
                  <div>
                    <span className="block text-white/30">HEIGHT</span>
                    <span>188 CM</span>
                  </div>
                  <div>
                    <span className="block text-white/30">WEIGHT</span>
                    <span>82 KG</span>
                  </div>
                  <div>
                    <span className="block text-white/30">EYES</span>
                    <span>HAZEL</span>
                  </div>
                </div>
              </div>
              
              <div className="border border-white/20 p-3 bg-white text-black">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold">THREAT LEVEL</span>
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div className="text-2xl font-bold tracking-tighter">CRITICAL</div>
              </div>
            </div>
          </div>

          {/* Middle Column - Metadata */}
          <div className="md:col-span-5 bg-black p-4 flex flex-col gap-4">
            <div>
              <h2 className="text-xs text-white/50 mb-1 border-b border-white/20 pb-1">SUBJECT IDENTIFICATION</h2>
              <div className="text-3xl font-bold tracking-tight mb-1">UNKNOWN / "SILHOUETTE"</div>
              <p className="text-sm text-white/70">LAST KNOWN ALIAS: VICTOR REZNOV</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-[10px] text-white/50 mb-1">AFFILIATION</h3>
                <p className="text-sm">NO KNOWN TIES</p>
              </div>
              <div>
                <h3 className="text-[10px] text-white/50 mb-1">ORIGIN</h3>
                <p className="text-sm">REDACTED</p>
              </div>
              <div>
                <h3 className="text-[10px] text-white/50 mb-1">KNOWN LANGUAGES</h3>
                <p className="text-sm">EN, RU, ZH, AR</p>
              </div>
              <div>
                <h3 className="text-[10px] text-white/50 mb-1">SPECIALTIES</h3>
                <p className="text-sm">INFILTRATION, CQC</p>
              </div>
            </div>

            <div className="flex-grow">
              <h2 className="text-xs text-white/50 mb-2 border-b border-white/20 pb-1">OPERATIONAL HISTORY</h2>
              <div className="space-y-3 text-xs">
                <div className="flex gap-4">
                  <span className="text-white/50 w-20 shrink-0">2023.11.04</span>
                  <p>Spotted in Geneva. Suspected involvement in the <span className="bg-white text-black px-1">ECHO PROTOCOL</span> breach.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-white/50 w-20 shrink-0">2024.02.18</span>
                  <p>Intercepted communications suggest movement towards Eastern Europe. <span className="text-white/50">[DATA CORRUPTED]</span></p>
                </div>
                <div className="flex gap-4">
                  <span className="text-white/50 w-20 shrink-0">2025.09.22</span>
                  <p>Confirmed sighting at Sector 4 facility. Multiple casualties reported. Target acquired highly sensitive materials.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-white/50 w-20 shrink-0">2026.01.15</span>
                  <p>Current whereabouts unknown. Presumed armed and extremely dangerous.</p>
                </div>
              </div>
            </div>
            
            <div className="border border-white/20 p-3 font-sans normal-case text-sm text-white/80 leading-relaxed">
              <span className="font-mono uppercase text-xs text-white/50 block mb-2">ANALYST NOTES</span>
              Subject exhibits highly advanced tactical training. Avoid direct engagement. If spotted, immediately notify command via secure channel Alpha-7. Do not attempt apprehension without a full strike team.
            </div>
          </div>

          {/* Right Column - Terminal/Logs */}
          <div className="md:col-span-3 bg-black p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-4 border-b border-white/20 pb-2">
              <Terminal className="w-4 h-4 text-white/50" />
              <span className="text-xs text-white/50">SYSTEM LOGS</span>
            </div>
            
            <div className="flex-grow overflow-hidden relative">
              <div className="absolute inset-0 overflow-y-auto scrollbar-hide space-y-2 text-[10px] text-white/60">
                <div className="opacity-50">&gt; INITIALIZING SECURE CONNECTION...</div>
                <div className="opacity-50">&gt; HANDSHAKE ESTABLISHED.</div>
                <div className="opacity-50">&gt; DECRYPTING DOSSIER 892-X...</div>
                <div className="text-white">&gt; WARNING: UNAUTHORIZED ACCESS ATTEMPT DETECTED.</div>
                <div className="opacity-50">&gt; REROUTING TRACE...</div>
                <div className="opacity-50">&gt; TRACE FAILED.</div>
                <div className="opacity-50">&gt; DOWNLOADING ASSETS... [OK]</div>
                <div className="opacity-50">&gt; LOADING BIOMETRICS... [OK]</div>
                <div className="opacity-50">&gt; SYNCING TIMELINE... [OK]</div>
                <div className="text-white animate-pulse">&gt; AWAITING COMMAND_</div>
                <br/>
                <div className="opacity-30">0x00F8A 0x11B2C 0x99D4E</div>
                <div className="opacity-30">0x88A1F 0x00000 0xFFFFF</div>
                <div className="opacity-30">SYS_MEM_DUMP_COMPLETE</div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex items-center justify-between text-[10px] mb-4">
                <span className="text-white/50">NETWORK STATUS</span>
                <span className="flex items-center gap-1">
                  <Activity className="w-3 h-3 text-white" />
                  SECURE
                </span>
              </div>
              
              <div className="flex justify-between items-end">
                <div className="text-[8px] text-white/30 font-mono leading-tight">
                  <div>ID: 892-X-774</div>
                  <div>AUTH: OMEGA-9</div>
                  <div>ENC: AES-256-GCM</div>
                </div>
                <div className="w-24 h-6 border-l-2 border-r-2 border-white/30 flex justify-between px-1 items-center opacity-50">
                  <div className="w-1 h-full bg-white" />
                  <div className="w-2 h-full bg-white" />
                  <div className="w-1 h-full bg-white" />
                  <div className="w-3 h-full bg-white" />
                  <div className="w-1 h-full bg-white" />
                  <div className="w-1 h-full bg-white" />
                  <div className="w-2 h-full bg-white" />
                </div>
              </div>
            </div>
          </div>

        </div>
        
        <footer className="border-t border-white/20 p-2 mt-1 flex justify-between text-[10px] text-white/30">
          <span>DEPT. OF DEFENSE // CLASSIFIED</span>
          <span>DO NOT DISTRIBUTE</span>
        </footer>
      </div>
    </div>
  );
}
