import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="w-full p-8 md:p-16 md:pt-0 flex items-center justify-center md:justify-start">
      <div className="w-full max-w-md">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-lendsqr-primary-accent mb-2">Welcome!</h1>
          <p className="text-lendsqr-primary-neutral-100">Enter details to login.</p>
        </div>

        <form className="space-y-6">
          <div>
            <Input
              type="email"
              placeholder="Email"
              className="h-12 border-lendsqr-primary-neutral/20 focus-visible:ring-lendsqr-primary-green"
            />
          </div>

          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              className="h-12 border-lendsqr-primary-neutral/20 focus-visible:ring-lendsqr-primary-green"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-lendsqr-primary-green text-xs font-bold uppercase"
            >
              Show
            </button>
          </div>

          <Link
            href="#"
            className="inline-block text-lendsqr-primary-green text-xs font-bold uppercase"
          >
            Forgot Password?
          </Link>

          <Button
            type="submit"
            className="w-full h-12 bg-lendsqr-primary-green hover:bg-lendsqr-primary-green-100/90 text-white"
          >
            LOG IN
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;