import {
  withAuth,
  NextRequestWithAuth,
  NextAuthMiddlewareOptions,
} from "next-auth/middleware";
import { NextResponse } from "next/server";

const middleware = (request: NextRequestWithAuth) => {
  console.log("[MIDDLEWARE_NEXTAUTH_TOKEN]: ", request.nextauth.token);

  const isPrivate = request.nextUrl.pathname.startsWith("/private");
  const isAdminUser = request.nextauth.token?.role === "admin";

  if (isPrivate && !isAdminUser) {
    return NextResponse.rewrite(new URL("/denid", request.url));
  }
};

const callbacksOptions: NextAuthMiddlewareOptions = {};

export default withAuth(middleware, callbacksOptions);

export const config = {
  matcher: "/private",
};
