module.exports = {
  extends: ["config:base"],
  //
  // options for self-hosted https://docs.renovatebot.com/self-hosted-configuration/
  gitAuthor: "Renovate Bot <renovate-bot@trovaprezzi.com>",
  trustLevel: "high",
  // platform: 'gitlab',
  //
  // repo options https://docs.renovatebot.com/configuration-options/
  //
  dependencyDashboard: true,
  labels: ["dependencies"],
};
