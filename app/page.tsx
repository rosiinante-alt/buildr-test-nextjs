export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black text-center">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
          🚀 Buildr Test App
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
          Successfully deployed to Netcup via Coolify
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-500">
          Domain: buildr-test.001746.xyz
        </p>
      </main>
    </div>
  );
}
