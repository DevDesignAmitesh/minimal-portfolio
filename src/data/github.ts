export const githubUser = "DevDesignAmitesh";

const revalidate = 60 * 60 * 6;

// Optional: set GITHUB_TOKEN in the deploy env to lift the 60 req/hour unauthenticated API limit.
const apiHeaders: HeadersInit = {
  Accept: "application/vnd.github+json",
  ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
};

interface GithubRepo {
  name: string;
  description: string | null;
}

// One API call for every repo, so the whole site costs a single request per revalidation.
export const getRepoDescriptions = async (): Promise<Map<string, string>> => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUser}/repos?per_page=100`,
      { headers: apiHeaders, next: { revalidate } },
    );
    if (!response.ok) return new Map();

    const repos: GithubRepo[] = await response.json();
    return new Map(
      repos
        .filter((repo) => repo.description)
        .map((repo) => [repo.name.toLowerCase(), repo.description as string]),
    );
  } catch {
    return new Map();
  }
};

export const getReadme = async (repo: string): Promise<string | null> => {
  try {
    const response = await fetch(
      `https://raw.githubusercontent.com/${githubUser}/${repo}/HEAD/README.md`,
      { next: { revalidate } },
    );
    return response.ok ? await response.text() : null;
  } catch {
    return null;
  }
};

export const repoUrl = (repo: string) => `https://github.com/${githubUser}/${repo}`;

// Relative links/images in a README point into the repo, so resolve them against it.
export const repoBlobBase = (repo: string) => `${repoUrl(repo)}/blob/HEAD/`;
export const repoRawBase = (repo: string) =>
  `https://raw.githubusercontent.com/${githubUser}/${repo}/HEAD/`;

// GitHub's auto-generated social card, used as a thumbnail when a project has no video poster.
export const repoPreviewImage = (repo: string) =>
  `https://opengraph.githubassets.com/1/${githubUser}/${repo}`;
