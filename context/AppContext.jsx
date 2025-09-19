"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabaseClient";
import toast from "react-hot-toast";
import { NextResponse } from "next/server";

export const AuthContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); //supabase user
  const [session, setSession] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  //   const [session, setSession] = useState(null); //supabase session
  //   const [profile, setProfile] = useState(null); //supabase profile
  //   const [loading, setLoading] = useState(true); //loading state
  //   const [isAdmin, setIsAdmin] = useState(false); //admin state

  const login = async () => {};
  const signup = async () => {};

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setIsAdmin(false);
  };

  const loadRole = async (userId) => {
    if (!userId) {
      setIsAdmin(false);
      return;
    }
    const { data, error } = await supabase
      .from("users")
      .select("role")
      .eq("user_id", userId)
      .single();
    if (!error && data?.role === "admin") {
      setIsAdmin(true);
      console.log("isAdmin data", data);
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    let subscription;
    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
      await loadRole(session?.user?.id);
      setLoading(false);

      const { data } = supabase.auth.onAuthStateChange(async (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        await loadRole(session?.user?.id);
      });
      subscription = data.subscription;
    };
    init();
    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, []);

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
    <AuthContext.Provider value={{ user, session, isAdmin, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AuthContext);
};
