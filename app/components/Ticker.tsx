import "./styles/Ticker.css";
import Image from "next/image";


export type TickerProps = {
  multiplier: number;
  text: string;
}

const logoSize = 60;


export const Ticker = ({ multiplier, text }: TickerProps) => (
  <div className="ticker">
    <div className="ticker__track">
      {/* Group A: conteúdo visível */}
      <div className="ticker__group">
        {new Array(multiplier).fill(null).map((_, i) => (
          <p className="ticker__text text-lg leading-8 text-zinc-600 dark:text-zinc-400" key={`a-${i}`}>
            <div className="flex items-center gap-4">
              {text}
              <Image
                className="ml-auto mr-auto"
                src="/brasaooficialcolorido.png"
                alt="Next.js logo"
                width={logoSize}
                height={logoSize}
                priority
              />
            </div>

          </p>
        ))}
      </div>

      {/* Group B: duplicata, apenas para loop perfeito */}
      <div className="ticker__group" aria-hidden="true">
        {new Array(multiplier).fill(null).map((_, i) => (
          <p className="ticker__text text-lg leading-8 text-zinc-600 dark:text-zinc-400" key={`b-${i}`}>
            <div className="flex items-center gap-4">
              {text}
              <Image
                className="ml-auto mr-auto"
                src="/brasaooficialcolorido.png"
                alt="Next.js logo"
                width={logoSize}
                height={logoSize}
                priority
              />
            </div>
          </p>
        ))}
      </div>
    </div>
  </div>
)