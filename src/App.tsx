import { Repositories, Repository } from "@saber2pr/types-github-api";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import Layout from "./Layout";

export const EthereumJS = {
  login: "ethereumjs",
  id: 16297473,
  node_id: "MDEyOk9yZ2FuaXphdGlvbjE2Mjk3NDcz",
  url: "https://api.github.com/orgs/ethereumjs",
  repos_url: "https://api.github.com/orgs/ethereumjs/repos",
  events_url: "https://api.github.com/orgs/ethereumjs/events",
  hooks_url: "https://api.github.com/orgs/ethereumjs/hooks",
  issues_url: "https://api.github.com/orgs/ethereumjs/issues",
  members_url: "https://api.github.com/orgs/ethereumjs/members{/member}",
  public_members_url:
    "https://api.github.com/orgs/ethereumjs/public_members{/member}",
  avatar_url: "https://avatars.githubusercontent.com/u/16297473?v=4",
  description:
    "Ethereum Javascript Community - Your Javascript Gateway to Ethereum",
  name: "EthereumJS",
  company: null,
  blog: "https://github.com/ethereumjs/ethereumjs-monorepo",
  location: "Sealed into the Genesis Block",
  email: null,
  twitter_username: "EFJavaScript",
  is_verified: false,
  has_organization_projects: true,
  has_repository_projects: true,
  public_repos: 47,
  public_gists: 0,
  followers: 0,
  following: 0,
  html_url: "https://github.com/ethereumjs",
  created_at: "2015-12-15T00:30:49Z",
  updated_at: "2021-06-17T10:05:33Z",
  type: "Organization",
};

export const ReposContext = createContext<Repository[]>([]);
// export const ReadmeContext = createContext<string[]>([]);

export default function App() {
  const [repos, setRepos] = useState<Repositories>([]);

  async function init() {
    const repos = await fetch("https://api.github.com/orgs/ethereumjs/repos");
    const json: Repositories = await repos.json();
    try {
      setRepos(json);
    } catch (err) {
      console.log(err, "tha's why");
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <ReposContext.Provider value={repos}>
      <Layout />
</ReposContext.Provider>
      </>
  );
}
