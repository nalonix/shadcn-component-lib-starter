import AlertDemo from "@/examples/ui/alert"

import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"
import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

import CardDemo2 from "./demos/card-2"
import CardDemo3 from "./demos/card-3"
import CommandDemo from "./demos/command"

export default function ExampleComponents() {
  return (
    <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10 gap-5 not-prose">
      <div className="flex flex-col gap-5">
        <AlertDemo />
        <CardDemo2 />
      </div>
      <div className="lg:flex hidden flex-col gap-5">
        <CardDemo3 />
      </div>
      <div className="sm:flex hidden flex-col gap-5">
        <CommandDemo />
        <CardDemo />
      </div>
    </div>
  )
}

const CardDemo = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label autoFocus={false} htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                autoFocus={false}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label autoFocus={false} htmlFor="password">
                  Password
                </Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required autoFocus={false} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="#" className="underline underline-offset-4">
            Sign up
          </a>
        </div>
      </CardFooter>
    </Card>
  )
}
