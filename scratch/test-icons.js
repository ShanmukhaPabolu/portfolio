// Test other libraries
const libraries = {
  di: "react-icons/di",
  fa: "react-icons/fa",
  bs: "react-icons/bs",
  tb: "react-icons/tb"
};

for (const [key, path] of Object.entries(libraries)) {
  try {
    const lib = require(path);
    const keys = Object.keys(lib);
    const javaMatches = keys.filter(k => k.toLowerCase().includes("java"));
    const vscodeMatches = keys.filter(k => k.toLowerCase().includes("vscode") || k.toLowerCase().includes("visualstudio") || k.toLowerCase().includes("code"));
    console.log(`--- ${key} (${path}) ---`);
    if (javaMatches.length > 0) console.log(`Java:`, javaMatches);
    if (vscodeMatches.length > 0) console.log(`VS Code:`, vscodeMatches);
  } catch (err) {
    console.log(`Failed to load ${path}:`, err.message);
  }
}
