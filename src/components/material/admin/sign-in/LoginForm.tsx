"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { signIn } from '@/lib/auth';
import { useRouter } from 'next/navigation';


export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export default function LoginForm() {

  const router = useRouter();
      // const searchParams = useSearchParams();
      // const continueTo = searchParams.get("continueTo") ?? "/admin/dashboard";

      async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
            event.preventDefault();
            const form = event.currentTarget;
            const username = form.username.value;
            const password = form.password.value;
            const rememberMe = form.rememberMe.checked;
            try {
                  await signIn(username, password, rememberMe);
                  router.replace("/admin/analytics")
            } catch (e) {
                  console.error(e);
            }
      }
  return (
    <form onSubmit={handleSubmit}>
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="email">Email</label>
          <Input name='username' id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <label htmlFor="password">Password</label>
          <Input name="password" id="password" type="password" required />
        </div>
        <div className="block mt-4">
                            <label className="flex items-center">
                                <input type="checkbox" id="rememberMe" name="rememberMe" className='rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500' />
                                <span className="ms-2 text-sm text-gray-600">Remember Me</span>
                            </label>
                        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-around">
        <Button className="w-[45%] bg-transparent text-gray-700 font-semibold hover:bg-transparent">back</Button>
        <Button type="submit" className="w-[45%]">Sign in</Button>
      </CardFooter>
    </Card>
    </form>
  )
}
