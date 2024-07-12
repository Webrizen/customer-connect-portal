"use client";
import { useState } from "react";
import Link from "next/link";
import { Button, Input, Spinner, Switch } from "@nextui-org/react";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { Toaster, toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [mobile, setMobile] = useState("");
  const { user, login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      router.push("/dashboard");
    } catch (err) {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    router.push("/dashboard");
  }

  return (
    <>
      <Toaster position="bottom-center" />
      <header className="p-2 bg-[rgba(225,225,225,0.1)] backdrop-blur-3xl z-50 sticky top-0">
      <div className="md:container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="h-8 w-auto whitespace-nowrap md:flex hidden gap-2 justify-start items-center p-1 rounded-md hover:bg-[rgba(225,225,225,0.05)]"
        >
          <Image
            src={Logo}
            placeholder="blur"
            alt="Logo"
            width={500}
            height={500}
            className="h-full w-auto"
          />
          <span>Customer Connect Portal</span>
        </Link>
        <div className="w-full flex justify-end items-center gap-2">
         
        </div>
      </div>
    </header>
      <div className="container relative md:min-h-screen h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative h-full flex-col bg-muted p-10 md:text-white text-slate-950 lg:flex dark:border-r dark:border-slate-700">
          <div className="absolute inset-0 bg-[url('/tablet-login-cuate.svg')] bg-center bg-[length:90%] bg-no-repeat" />
          <Link
            href="/"
            className="md:hidden relative md:top-0 -top-[15%] z-20 flex items-center text-lg font-medium bg-transparent backdrop-blur-3xl md:backdrop-blur-0 md:px-0 md:py-0 px-3 py-2 rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Customer Connect Portal.
          </Link>
          <div className="relative z-20 mt-auto"></div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                {isSelected
                  ? "Enter your mobile number to log in"
                  : "Enter your email and password to log in"}
              </p>
            </div>
            <Card className="w-full">
              <CardContent className="w-full py-4">
                <Switch
                  className="bg-[rgba(0,0,0,0.06)] px-4 py-2 rounded-lg mb-2"
                  isSelected={isSelected}
                  onValueChange={setIsSelected}
                  size="sm"
                >
                  Login using OTP using mobile number
                </Switch>
                <form className="w-full grid gap-4" onSubmit={handleSubmit}>
                  {isSelected ? (
                    <div className="grid gap-2">
                      <Input
                        id="mobile"
                        type="tel"
                        label="Mobile Number"
                        variant="underlined"
                        placeholder="+1234567890"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                      <div className="text-left text-sm">
                        Enter your one-time password.
                      </div>
                      <InputOTP maxLength={6}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  ) : (
                    <>
                      <div className="grid gap-2">
                        <Input
                          id="email"
                          type="email"
                          label="Email"
                          variant="underlined"
                          placeholder="example@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Input
                          id="password"
                          type="password"
                          label="Password"
                          variant="underlined"
                          placeholder="*********"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </>
                  )}
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
            <p className="px-8 text-center text-sm text-muted-foreground md:pb-0 pb-10">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms-and-conditions"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
