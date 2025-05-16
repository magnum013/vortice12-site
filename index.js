import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-violet-950 text-white flex flex-col items-center justify-center px-6 py-12 space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center"
      >
        Projeto Ômega — Vórtice 12
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-lg md:text-xl max-w-2xl text-center italic"
      >
        “Você chegou onde o ritmo começou.”
      </motion.p>

      <section className="space-y-6 w-full max-w-3xl">
        {[
          { title: '📜 Manifesto', text: 'O Vórtice 12 nasce da ruptura simbólica com a matemática tradicional. Aqui, cada número vibra, cada NFT carrega um fragmento vivo, e o infinito pulsa em ciclos conscientes.' },
          { title: '🔢 A Matemática do 12', text: 'O ciclo do 12 não é apenas uma extensão — é uma estrutura rítmica perfeita onde paridade, simetria e regeneração se encontram. Essa matemática viva guia o Projeto Ômega.' },
          { title: '🧩 Os NFTs da Jornada', text: 'Cada NFT representa uma faceta única do Vórtice: do Prólogo ao Código Final. Edição limitada, verdade funcional e valor simbólico completo.' },
          { title: '🧠 Sobre o Criador', text: 'Luan Borges é o fundador do Projeto Ômega e criador da Matemática do 12. Suas obras unem ciência, arte e simbologia viva.' },
          { title: '✉️ Contato', text: 'Email oficial: somos.omega12@gmail.com', center: true }
        ].map(({ title, text, center }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3 + i * 0.1 }}
            className={`bg-violet-800 p-6 rounded-2xl shadow-lg${center ? ' text-center' : ''}`}
          >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className={title.includes('Contato') ? 'font-mono' : ''}>{text}</p>
            {title.includes('NFTs') && (
              <button className="mt-4 bg-white text-violet-950 font-bold py-2 px-4 rounded-full hover:bg-violet-200 animate-pulse">
                Desbloquear a Primeira Faceta
              </button>
            )}
          </motion.div>
        ))}
      </section>

      <footer className="text-sm text-center text-violet-400 mt-12">
        Criado por Luan Borges · Vórtice 12 · 2025
      </footer>
    </main>
  );
}