"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";
import toast from "react-hot-toast";
import { NextResponse } from "next/server";

export const AuthContext = createContext();

export const AppContextProvider = ({ cildren }) => {
  const [user, setUser] = useState(null); //supabase user
  //   const [session, setSession] = useState(null); //supabase session
  //   const [profile, setProfile] = useState(null); //supabase profile
  //   const [loading, setLoading] = useState(true); //loading state
  //   const [isAdmin, setIsAdmin] = useState(false); //admin state

  const login = async () => {};
  const signup = async () => {};

  const logout = async () => {
    setUser(null);
  };

  //   const fetchUserData = async (user_id) => {
  //     try {
  //       const { data, error } = await supabase
  //         .from("users")
  //         .select("*")
  //         .eq("user_id", user_id)
  //         .single();

  //       setProfile(data);
  //       setLoading(false);

  //       if (data.role === "admin") {
  //         setIsAdmin(true);
  //       }

  //       return NextResponse.json({ success: true, data });
  //     } catch (error) {
  //       toast.error("Error fetching user data");
  //       return NextResponse.json({ success: false, error });
  //     }
  //   };

  //   useEffect(() => {
  //     const getSession = async () => {
  //       const { data } = await supabase.auth.getSession();
  //       setSession(data.session);
  //       setUser(data.session?.user ?? null);

  //       if (data.session?.user) {
  //         await fetchUserData(data.session?.user.id);
  //       }
  //       setLoading(false);
  //     };
  //     getSession();

  //     const {
  //       data: { subscription },
  //     } = supabase.auth.onAuthStateChange(async (_event, session) => {
  //       setSession(session);
  //       setUser(session?.user ?? null);

  //       if (session?.user) {
  //         await fetchUserData(session.user.id);
  //       } else {
  //         setProfile(null);
  //       }
  //     });

  //     return () => subscription.unsubscribe();
  //   }, []);

  return (
    <AuthContext.Provider value={{ user }}>{cildren}</AuthContext.Provider>
  );
};

// export const useAppContext = () => {
//   return useContext(AppContext);
// };
