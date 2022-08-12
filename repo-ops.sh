function node-project {
  git init
#   npx license $(npm get init.license) -o "$(npm get init.author.name)" > LICENSE
  npx gitignore node
  npx covgen "$(npm get init.author.email)"
  npm init -y
  git add -A
  git commit -m "Initial commit"
}

function node-ts-project {
    tsc --init
    node-project
}

function push {
    git add .
    git commit -m "$1"
    git push
}