import {
  Content,
  Contents,
  Org,
  Repositories,
  Repository,
  User
} from "@saber2pr/types-github-api";
import React, { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import Layout from "./Layout";
import { Owner } from "./types/githubApiTypes";

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



// export const ReposContext = createContext<Repository[]>([]);
// export const ReadmeContext = createContext<string[]>([]);

export default function App() {
  // const [repos, setRepos] = useState<Repository[]>([]);
  // const [contents, setContents] = useState<string[]>([]);
//   const init = async () => {
//     // const api = "https://api.github.com/orgs/ethereumjs/";
//     // const response = await fetch(api);
//     // const jsonData: Owner = await response.json();
//     // setOrg(jsonData);
// try {
//   const _repos = await fetch(org.repos_url)
//   const repos: Repository[] = await (_repos).json();
//   setRepos(repos);
// } catch (err) {
//   console.log((err as any).message)
// }

//     // const _contents: string[] = [];
//     // for (const repo of repos) {
//     //   const c = await fetch(repo.contents_url)
//     //   const j: Contents = await (c).json()
//     //   _contents.push(
//     //     j[0].content ?? ""
//     //   );
//     // }
//     // setContents(
//     //   _contents.map((c) => {
//     //     return Buffer.from(c, "base64").toString("ascii");
//     //   })
//     // );
//   };

//   useEffect(() => {
//     init();
//   });

  return (
    <>
{/* <ReadmeContext.Provider value={contents}> */}
              <Layout />
            {/* </ReadmeContext.Provider> */}
          {/* </ReposContext.Provider>
          )}
        </OrgContext.Provider>
      )} */}
    </>
  );
}
