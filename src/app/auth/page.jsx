"use client";
import { useState } from "react";
import Link from "next/link";
import { Button, Input, Spinner } from "@nextui-org/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Login successful!");
      router.push("/dashboard");
    } catch (err) {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full min-h-screen flex justify-center items-center">
     <Toaster position="bottom-center" />
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="w-full grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                label="Email"
                variant="underlined"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="password"
                type="password"
                label="password"
                required
                variant="underlined"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#00aeef] rounded text-white"
            >
               {loading ? <Spinner /> : "Login"}
            </Button>
          </form>
          <div className="flex justify-center mt-3 items-center">
            <Link href="#" className="text-sm underline">
              Forgot your password?
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
