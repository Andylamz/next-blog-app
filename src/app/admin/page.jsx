import { redirect } from "next/navigation";

function page() {
  redirect("/admin/addProduct");
  return null;
}

export default page;
