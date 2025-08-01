import React from "react";
import BottomNav from "@/_components/buttonNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <main className="dashboard-content">{children}</main>
      <BottomNav />
    </div>
  );
}
