const vscode = require('vscode')

/** @param {vscode.ExtensionContext} context */
async function activate(context) {
 let disposable = vscode.commands.registerCommand(
  "googlre.searcher",
  async function () {
   const searchQuery = await vscode.window.showInputBox({
    placeHolder: "Search query",
    prompt: "Search my snippets on Codever",
    value: ""
   })

   vscode.env.openExternal('https://www.bing.com/search?q=' + searchQuery)
  }
 )

 context.subscriptions.push(disposable)
}
function deactivate() {}

module.exports = {
 activate,
 deactivate
}