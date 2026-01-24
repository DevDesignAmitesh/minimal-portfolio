"use client";

import BlogPost from "@/src/pages/BlogPost";

export default async function blog({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  return <BlogPost slug={slug} />;
}
