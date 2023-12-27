import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-light dark:bg-dark">
      <div className="flex flex-row justify-between items-center h-20 px-5">
        <h2>Disney Plus</h2>
        <ThemeToggle />
      </div>
    </main>
  );
}
