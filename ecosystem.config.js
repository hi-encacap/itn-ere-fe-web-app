module.exports = {
  apps: [
    {
      name: "encacap-re-acbuilding-stg",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "staging",
        RE_ACB_APP_PORT: 3014,
      },
    },
    {
      name: "encacap-re-acbuilding",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        RE_ACB_APP_PORT: 3014,
      },
    },
  ],
};
