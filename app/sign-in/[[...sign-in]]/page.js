import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <div>
        <Image
          src="/Banner.png"
          width={900}
          height={1000}
          className="object-contain h-full w-full"
          alt="banner image"
        />
        <div className="absolute top-20 right-0">
          <SignIn />
        </div>
      </div>
    </>
  );
}
