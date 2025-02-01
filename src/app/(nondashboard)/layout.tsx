import { ReactNode } from "react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="nondashboard-layout">
      <Navbar />
      <main className="nondashboard-layout__main">{children}</main>
      <Footer />
    </div>
  );
}
