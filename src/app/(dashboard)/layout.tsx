"use client";

import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";

import Loading from "@/components/loading";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [courseId, setCourseId] = useState<string | null>(null);
  const { user, isLoaded } = useUser();

  // handle use effect isCoursePage

  if (!isLoaded) return <Loading />;
  if (!user) return <div>Please sing in to access this page.</div>;

  return (
    <SidebarProvider>
      <div className="dashboard">
        <AppSidebar />
        {/* sidebar will go here */}
        <div className="dashboard__content">
          {/* chapter sidebar will go */}
          <div className={cn("dashboard__main")} style={{ height: "100vh" }}>
            <main className="dashboard__body">{children}</main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
