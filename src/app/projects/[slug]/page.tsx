import { notFound } from "next/navigation";
import { getAllProjects, getProjectData, ProjectData } from "@/util/mdx";
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
// import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

// const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  const allProjects = getAllProjects();
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const project = getProjectData(slug);

  if (!project) {
    notFound();
  }
  
  // ダミーのビューカウント
  const views = Math.floor(Math.random() * 1000);

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <MDXRemote
          source={project.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </article>
    </div>
  );
}
