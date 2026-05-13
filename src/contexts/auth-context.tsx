import type { Session } from "@supabase/supabase-js";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

import type { AuthContextValue } from "@/contexts/auth";
import { AuthContext } from "@/contexts/auth";
import { supabase } from "@/lib/supabase";

export function AuthProvider({ children }: { children: ReactNode }) {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session);
            setLoading(false);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, nextSession) => {
            setSession(nextSession);
            setLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const value = useMemo<AuthContextValue>(
        () => ({
            user: session?.user ?? null,
            session,
            loading,
            async signIn(email, password) {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (error) {
                    throw error;
                }
            },
            async signInWithGoogle() {
                const { error } = await supabase.auth.signInWithOAuth({
                    provider: "google",
                    options: {
                        redirectTo: `${window.location.origin}/pulso/feed`,
                    },
                });

                if (error) {
                    throw error;
                }
            },
            async signUp(name, username, email, password) {
                const { error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            name,
                            username,
                        },
                    },
                });

                if (error) {
                    throw error;
                }
            },
            async signOut() {
                const { error } = await supabase.auth.signOut();

                if (error) {
                    throw error;
                }
            },
        }),
        [loading, session],
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
