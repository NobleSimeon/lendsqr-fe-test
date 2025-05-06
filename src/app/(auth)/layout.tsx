import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen relative md:flex">
      <header className="md:absolute top-10 left-9 z-10 p-8 pb-0">
        <Image
          src="/Group.svg"
          alt="lendsqr logo"
          width={174}
          height={36}
          className="h-9 w-auto"
        />
      </header>
      {/* Left section with logo and illustration */}
      <div className="hidden md:w-1/2 md:flex md:items-center md:justify-center">
          <Image
            src="/pablo-sign-in 1.png"
            alt=""
            width={600}
            height={338}
            className="max-w-full h-auto"
          />
      </div>

      {/* Right section with login form */}
      <main className="flex w-full md:w-1/2 items-center justify-center min-h-screen">{children}</main>
    </div>
  );
}
