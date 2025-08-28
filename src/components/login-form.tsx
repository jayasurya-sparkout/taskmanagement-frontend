"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { FcGoogle } from "react-icons/fc"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen px-4",
        className
      )}
      {...props}
    >
      <Card className="w-full shadow-xl rounded-2xl border">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">
            {isLogin ? "Welcome Back 👋" : "Create an Account ✨"}
          </CardTitle>
          <CardDescription className="text-base">
            {isLogin
              ? "Login to continue managing your tasks"
              : "Sign up to get started with your account"}
          </CardDescription>
        </CardHeader>

        <CardContent className="m-auto w-full max-w-md">
          <form className="flex flex-col gap-6">
            {/* Show Name only in Register */}
            {!isLogin && (
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  className="focus-visible:ring-0"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="focus-visible:ring-0"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                {isLogin && (
                  <a
                    href="#"
                    className="ml-auto text-sm font-medium text-muted-foreground hover:underline"
                  >
                    Forgot password?
                  </a>
                )}
              </div>
              <Input
                id="password"
                className="focus-visible:ring-0"
                type="password"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full text-base cursor-pointer"
            >
              {isLogin ? "Login" : "Sign Up"}
            </Button>

            <div className="relative">
              <Separator />
              <span className="absolute inset-x-0 -top-3 mx-auto w-fit bg-background px-2 text-xs text-muted-foreground">
                OR
              </span>
            </div>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              <FcGoogle className="h-5 w-5" />
              Continue with Google
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            {isLogin ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="font-medium underline underline-offset-4 cursor-pointer"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="font-medium underline underline-offset-4 cursor-pointer"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
