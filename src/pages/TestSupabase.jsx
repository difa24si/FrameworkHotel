import { useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function TestSupabase() {

  useEffect(() => {

    async function test() {

      const { data, error } = await supabase
        .from("users")
        .select("*");

      console.log("DATA :", data);
      console.log("ERROR :", error);

    }

    test();

  }, []);

  return <h1>Test Supabase</h1>;
}