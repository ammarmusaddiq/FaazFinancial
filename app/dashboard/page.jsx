"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { DashboardOverview } from "@/components/dashboard/dashboard-overview";
import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { session, isAdmin, loading } = useAppContext();
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (loading) return; // Wait for context to load

    if (!session) {
      router.push("/auth/login2");
      return;
    }

    if (isAdmin) {
      router.push("/admin");
      return;
    }

    if (!session?.user?.id) return;
    
    const fetchProfile = async () => {
      const { data: profileData, error: profileError } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", session.user.id)
        .single();
      if (profileError) {
        console.error("Profile Error:", profileError);
        toast.error("Error fetching profile data");
        return;
      }
      console.log("Fetched Profile:", profileData);
      setProfile(profileData);
    };
    fetchProfile();
  }, [session, isAdmin, loading, router]);

  // const mockUser = {
  //   id: "1",
  //   email: "user@example.com",
  //   name: "John Doe",
  // };

  // const mockProfile = {
  //   first_name: "John",
  //   last_name: "Doe",
  //   company_name: "Example Corp",
  // };

  const mockFormations = [
    {
      id: "1",
      business_name: "My LLC",
      business_type: "LLC",
      state: "Delaware",
      status: "completed",
      created_at: new Date().toISOString(),
    },
  ];

  const mockServices = [
    {
      id: "1",
      service_name: "EIN Application",
      status: "completed",
      created_at: new Date().toISOString(),
    },
  ];

  // Show loading while checking auth or fetching profile
  if (loading || !session || isAdmin || !profile) {
    return <div>Loading...</div>;
  }

  return (
    <DashboardLayout user={session.user} profileData={profile}>
      <DashboardOverview
        user={session.user}
        profile={profile}
        formations={mockFormations}
        services={mockServices}
      />
    </DashboardLayout>
  );
}
