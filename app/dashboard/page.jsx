"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { DashboardOverview } from "@/components/dashboard/dashboard-overview";
import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function DashboardPage() {
  const [mockUser, setMockUser] = useState(null);
  const [mockProfile, setMockProfile] = useState(null);

  useEffect(() => {
    // Fetch user data (email and id) from Supabase

    const fetchUserData = async () => {
      const { data, error: authError } = await supabase.auth.getUser();
      if (authError || !data?.user) {
        console.error("Auth Error:", authError);
        return;
      }

      console.log("Fetched User:", data.user);
      setMockUser(data.user);

      // Fetch profile data from Supabase

      const { data: profileData, error: profileError } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", data.user.id)
        .single();
      if (profileError) {
        console.error("Profile Error:", profileError);
        toast.error("Error fetching profile data");
        return;
      }

      console.log("Fetched Profile:", profileData);
      setMockProfile(profileData);
    };

    const fetchProfileData = async () => {};

    fetchUserData();
    // fetchProfileData();
  }, []);

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

  return (
    <>
      {!mockUser && !mockProfile && <div>Loading...</div>}
      {mockUser && mockProfile && (
        <DashboardLayout user={mockUser} profileData={mockProfile}>
          <DashboardOverview
            user={mockUser}
            profile={mockProfile}
            formations={mockFormations}
            services={mockServices}
          />
        </DashboardLayout>
      )}
    </>
  );
}
