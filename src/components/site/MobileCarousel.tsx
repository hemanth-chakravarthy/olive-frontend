import { type ReactNode } from "react";
import deviceFrame from "@/assets/Device.svg";

export function MobileCarousel({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-[196px] sm:w-[224px] aspect-[484/979] ${className}`}>
      {/* Dynamic Island (Camera Area) - Opaque */}
      <div className="absolute top-[3.2%] left-1/2 -translate-x-1/2 w-[34%] h-[4.2%] bg-[#080808] rounded-full z-30 flex items-center justify-end pr-[1.5%]">
        <div className="w-[15%] aspect-square rounded-full bg-[#1a1a1a] border border-white/5 shadow-inner" />
      </div>

      {/* Device Frame - Transparent */}
      <img 
        src={deviceFrame} 
        alt="" 
        className="absolute inset-0 w-full h-full z-20 pointer-events-none drop-shadow-2xl opacity-20" 
      />
      
      <div className="absolute inset-[3%] rounded-[2.5rem] overflow-hidden bg-transparent z-10">
        <div className="h-full overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
