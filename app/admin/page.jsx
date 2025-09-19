"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AdminLayout } from "@/components/admin/admin-layout";
import { AdminOverview } from "@/components/admin/admin-overview";
import { useAppContext } from "@/context/AppContext";

export default function AdminPage() {
  const { session, isAdmin, loading } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (loading) return; // Wait for context to load

    if (!session) {
      router.push("/auth/login2");
      return;
    }

    if (!isAdmin) {
      router.push("/dashboard");
      return;
    }
  }, [session, isAdmin, loading, router]);

  // Show loading while checking auth
  if (loading || !session || !isAdmin) {
    return <div>Loading...</div>;
  }

  return (
    <AdminLayout>
      <AdminOverview />
    </AdminLayout>
  );
}
