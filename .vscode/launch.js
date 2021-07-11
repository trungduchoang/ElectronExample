// Reference: https://www.electronjs.org/docs/tutorial/debugging-vscode
// Reference: https://www.electronjs.org/docs/tutorial/debugging-main-process

module.exports = {
  version: "0.2.0",
  configurations: [
    {
      name: "Debug Main Process",
      type: "node",
      request: "launch",
      cwd: "${workspaceFolder}",
      runtimeExecutable:
        "${workspaceFolder}/node_modules/.bin/electron-forge-vscode-win",
      windows: {
        name: "Debug Main Process on Windows",
        type: "node",
        request: "launch",
        runtimeExecutable:
          "${workspaceFolder}/node_modules/.bin/electron-forge-vscode-win.cmd",
      },
      args: ["."],
      outputCapture: "std",
    },
  ],
};
