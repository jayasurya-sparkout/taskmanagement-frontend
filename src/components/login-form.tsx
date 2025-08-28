"use client"

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
import { FcGoogle } from "react-icons/fc";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
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
            Welcome Back 👋
          </CardTitle>
          <CardDescription className="text-base">
            Login to continue managing your tasks
          </CardDescription>
        </CardHeader>
        <CardContent className="m-auto w-full max-w-md">
          <form className="flex flex-col gap-6">
            {/* Email */}
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
                <a
                  href="#"
                  className="ml-auto text-sm font-medium text-muted-foreground hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <Input id="password" className="focus-visible:ring-0" type="password" required />
            </div>

            <Button type="submit" className="w-full text-base cursor-pointer">
              Login
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

          {/* Footer */}
          <div className="mt-6 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="font-medium underline underline-offset-4">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
