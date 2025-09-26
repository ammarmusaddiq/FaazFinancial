import React from "react";
import { useAuthContext } from "@/context/AppContext";
import { supabase } from "@/lib/supabaseClient";

const reviewFormations = () => {
  const { user } = useAuthContext();

  const { data: formations } = supabase
    .from("form_submissions")
    .select("*")
    .eq("user_id", user.id);
  console.log(formations);
  return <div>reviewFormations</div>;
};

export default reviewFormations;
