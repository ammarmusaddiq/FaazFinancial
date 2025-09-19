"use client";

import { redirect } from "next/navigation";
import { AdminLayout } from "@/components/admin/admin-layout";
import { AdminOverview } from "@/components/admin/admin-overview";
import { supabase } from "../../lib/supabaseClient";

export default async function AdminPage() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login2");
  }

  // Check if user is admin
  const { data: profile } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <AdminLayout>
      <AdminOverview />
    </AdminLayout>
  );
}
