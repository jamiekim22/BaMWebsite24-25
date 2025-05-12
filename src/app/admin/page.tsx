// src/app/admin/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import LogoutButton from "./Logout";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.isAdmin) {
    // not logged in → bounce to default NextAuth UI
    redirect(`/api/auth/signin?callbackUrl=/admin`);
  }
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">🔒 Admin Dashboard</h1>
      <LogoutButton />
      <p>Welcome, only you can see this page.</p>
    </div>
  );
}
