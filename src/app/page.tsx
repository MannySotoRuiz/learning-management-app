import Landing from "@/app/(marketing)/landing/page";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export default function Home() {
  return (
    <div className="nondashboard-layout">
      <Navbar />
      <main className="nondashboard-layout__main">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
