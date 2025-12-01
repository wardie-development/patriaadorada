import Image from "next/image";
import { Ticker } from "@/app/components/Ticker";
import AnchorHeading from "@/app/components/AnchorHeading";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex min-h-screen w-full max-w-3xl flex-col justify-between py-12 px-6 sm:px-16 bg-white dark:bg-black">
        <header className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1
            className="text-3xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 text-center w-full">
            Pátria Adorada.
          </h1>
          <p className="mt-2 text-base text-zinc-700 dark:text-zinc-300 w-full text-center">
            Faça o Brasil bom de uma vez por todas.
          </p>
          <aside aria-label="Aviso em destaque" className="mt-6 w-full">
            <div className="flex flex-col items-center sm:items-start">
              <Ticker
                multiplier={3}
                text="Não seja de esquerda. Não seja de direita. Esses dois conceitos estão deturpados no Brasil. Cobre políticos. Não aceite ser exploração do governo."
              />
            </div>
          </aside>
        </header>

        <main className="mt-10">
          <article>
            <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
              Não estou tentando te vender nada.
              <br />
              <br />Não preciso de muito para te colocar nos trilhos. Você só precisa entender que não é Partido X contra Partido Y.
              Não é <strong>Lula</strong> contra <strong>Bolsonaro</strong>.
              <br />
              <br />Somo nós, <strong>JUNTOS</strong>, a favor da nossa <strong>Pátria Amada</strong>.
            </p>

            <figure className="mt-8 flex justify-center">
              <Image
                className="ml-auto mr-auto"
                src="/bandeira-do-brasil.webp"
                alt="Bandeira do Brasil tremulando, símbolo da República Federativa do Brasil"
                width={500}
                height={333}
                priority
              />
              <figcaption className="sr-only">Bandeira do Brasil</figcaption>
            </figure>

            <section aria-labelledby="aprenda-sobre-suas-financas" className="mt-10">
              <AnchorHeading
                id="aprenda-sobre-suas-financas"
                className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"
              >
                Aprenda sobre as suas finanças
              </AnchorHeading>
              <ol className="mt-2 flex list-decimal flex-col gap-2 pl-6">
                <li className="text-zinc-700 dark:text-zinc-300">Não gaste o que não tem.</li>
                <li className="text-zinc-700 dark:text-zinc-300">Não compre o que não precisa.</li>
                <li className="text-zinc-700 dark:text-zinc-300">Invista (nem que sejam alguns reais) todos os meses.</li>
                <li className="text-zinc-700 dark:text-zinc-300">Se usar cartão de crédito, use sempre com planejamento e nunca gaste mais do que pode pagar no mês.</li>
              </ol>
            </section>

            <section aria-labelledby="aprenda-sobre-politicos" className="mt-10">
              <AnchorHeading
                id="aprenda-sobre-politicos"
                className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"
              >
                Aprenda sobre políticos
              </AnchorHeading>
              <ol className="mt-2 flex list-decimal flex-col gap-2 pl-6">
                <li className="text-zinc-700 dark:text-zinc-300">Eles usam o SEU dinheiro.</li>
                <li className="text-zinc-700 dark:text-zinc-300">
                  Jamais apoie, independente de qualquer coisa, quem usa <strong>Fundão Eleitoral</strong>.
                </li>
                <li className="text-zinc-700 dark:text-zinc-300">Eles PRECISAM ser cobrados por nós.</li>
                <li className="text-zinc-700 dark:text-zinc-300">Eles sempre falarão o que te faz feliz intimamente.</li>
              </ol>
            </section>

            <section aria-labelledby="eduque-se" className="mt-10">
              <AnchorHeading
                id="eduque-se"
                className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"
              >
                Eduque-se
              </AnchorHeading>
              <ol className="mt-2 flex list-decimal flex-col gap-2 pl-6">
                <li className="text-zinc-700 dark:text-zinc-300">Faça cursos de valor na internet, pagos ou de graça no YouTube.</li>
                <li className="text-zinc-700 dark:text-zinc-300">Leia livros de valor.</li>
                <li className="text-zinc-700 dark:text-zinc-300">Planeje-se financeiramente para começar uma faculdade ou outra formação que aumente suas oportunidades.</li>
                <li className="text-zinc-700 dark:text-zinc-300">Trate o seu vício em conteúdo fácil e rápido.</li>
              </ol>
            </section>

            <section aria-labelledby="tenha-menos-odio" className="mt-10">
              <AnchorHeading
                id="tenha-menos-odio"
                className="text-2xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50"
              >
                Tenha menos ódio
              </AnchorHeading>
              <ol className="mt-2 flex list-decimal flex-col gap-2 pl-6">
                <li className="text-zinc-700 dark:text-zinc-300">Tenha empatia pelo próximo.</li>
                <li className="text-zinc-700 dark:text-zinc-300">Faça a sua parte como cidadão.</li>
                <li className="text-zinc-700 dark:text-zinc-300">Faça caridade e ajude pessoas.</li>
                <li className="text-zinc-700 dark:text-zinc-300">Seja uma pessoa que resolve problemas, não que causa mais problemas.</li>
              </ol>
            </section>

            <aside aria-label="Aviso em destaque" className="mt-10">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <Ticker
                  multiplier={3}
                  text="Não seja de esquerda. Não seja de direita. Esses dois conceitos estão deturpados no Brasil. Cobre políticos. Não aceite ser exploração do governo."
                />
              </div>
            </aside>

            <section className="mt-10">
              <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                Com atos simples assim, você se torna um cidadão mais consciente e justo.
              </p>
            </section>
          </article>
        </main>

        <footer className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-6">
          <address className="not-italic text-center sm:text-left text-zinc-700 dark:text-zinc-300">
            <a href="mailto:contato@patriaadorada.com" className="underline hover:no-underline">
              contato@patriaadorada.com
            </a>
          </address>
        </footer>
      </div>
    </div>
  );
}
