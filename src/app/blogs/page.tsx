import Blogs from "@/src/components/sections/Blogs";

export const metadata = {
  title: "Blogs",
  description: "Notes on distributed systems, deployment, and building things by Amitesh Singh.",
};

export default function BlogsPage() {
  return <Blogs showAll />;
}
