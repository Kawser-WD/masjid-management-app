import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userCookie = request.cookies.get("user");

  if (!userCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const userData = JSON.parse(userCookie.value || "{}");

  const userValidate =
    userData?.phoneNumber === "0123456789" && userData?.password === "12345678";

  if (!userValidate) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/memberlists", "/donner-member-profile", "/accoundante"],
};
