const defaultGitIgnoreRules = `
# Ignore node_modules directory
node_modules/

#Environment variables files
.env

# Ignore log files
*.log

# Ignore os files
.DS_Store
Thumbs.db

# Ignore ide specific files
.vscode/
.idea/
*.iml
`;

export default defaultGitIgnoreRules;
