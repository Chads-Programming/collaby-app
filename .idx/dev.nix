{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    
  
 "bradlc.vscode-tailwindcss"
 "dsznajder.es7-react-js-snippets"
 "esbenp.prettier-vscode"
 "formulahendry.auto-rename-tag"];
  idx.previews = {
    previews = {
      web = {
        command = [
          "echo",
          ":V",
          "&",
          "npm"
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
