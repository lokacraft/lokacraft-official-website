import LoginForm from "@/components/material/admin/sign-in/LoginForm"


export const description =
  "A simple login form with email and password. The submit button says 'Sign in'."

export default function Login() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  )
}
