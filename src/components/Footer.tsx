import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center flex flex-col justify-center items-center p-4 bg-background border-t-[1px] border-t-primary/10 shadow-md h-18">
      <div className="mb-2">
        <Link
          href="/privacy-policy"
          className="text-foreground hover:underline mx-2"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-of-service"
          className="text-foreground hover:underline mx-2"
        >
          Terms of Service
        </Link>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Anderson Soares Martins. All rights
        reserved.
      </p>
    </footer>
  );
}
