module.exports = {
  apps: [
    {
      name: "encacap-re-acbuilding-stg",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "staging",
      },
    },
    {
      name: "encacap-re-acbuilding",
      script: "npm",
      args: "run start:prod",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
