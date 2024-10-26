import { authMiddleware } from "@clerk/nextjs";

// Temporary check to ensure the secret key is loading
console.log("CLERK_SECRET_KEY:", process.env.CLERK_SECRET_KEY);

export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!_next/static|favicon.ico|.*\\..*).*)", "/(api|trpc)(.*)"],
};
