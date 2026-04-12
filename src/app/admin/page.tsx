import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createHash } from "crypto";
import CrmClient from "./CrmClient";

function getSessionToken() {
  return createHash("sha256")
    .update((process.env.ADMIN_PASSWORD || "") + "uksteelgutters_crm")
    .digest("hex");
}

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("uksg_admin");
  if (!session || session.value !== getSessionToken()) {
    redirect("/admin/login");
  }
  return <CrmClient />;
}
