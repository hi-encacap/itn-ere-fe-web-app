{ pkgs }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.corepack
  ];
  idx.extensions = [
    "esbenp.prettier-vscode"
    "bradlc.vscode-tailwindcss"
    "dbaeumer.vscode-eslint"
    "eamodio.gitlens"
    "PKief.material-icon-theme"
    "streetsidesoftware.code-spell-checker"
    "zhuangtongfa.material-theme"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "yarn"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
