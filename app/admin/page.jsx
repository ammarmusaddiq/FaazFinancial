// // import { createServerClient } from "@/lib/supabase/server";

// import { redirect } from "next/navigation";
// import { AdminLayout } from "@/components/admin/admin-layout";
// import { AdminOverview } from "@/components/admin/admin-overview";
// import { supabase } from "@/lib/supabaseClient";

// export default async function AdminPage() {
//   // const supabase = createServerClient();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   console.log("user from getUser", user);

//   // if (!user) {
//   //   redirect("/auth/login2");
//   // }

//   // Check if user is admin
//   const { data: { userRole } } = await supabase
//     .from("users")
//     .select("role")
//     .eq("user_id", user?.id)
//     .single();

//   if (!userRole || userRole?.role !== "admin") {
//     redirect("/dashboard");
//   }

//   return (
//     <AdminLayout>
//       <AdminOverview />
//     </AdminLayout>
//   );
// }

/* ----------- Updated code ----------- */

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AdminLayout } from "@/components/admin/admin-layout";
import { AdminOverview } from "@/components/admin/admin-overview";
import { supabase } from "@/lib/supabaseClient";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkUserRole = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/dashboard");
        return;
      }

      const { data, error } = await supabase
        .from("users")
        .select("role")
        .eq("user_id", user.id)
        .single();

      if (error || !data || data.role !== "admin") {
        router.push("/dashboard");
      } else {
        setIsAdmin(true);
      }

      setLoading(false);
    };

    checkUserRole();
  }, [router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!isAdmin) {
    return null; // prevent flicker before redirect
  }

  return (
    <AdminLayout>
      <AdminOverview />
    </AdminLayout>
  );
}
