// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { pasteToInterfaceCommand } from './commands/paste-to-interface';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "Convert2ts" is now active!');

  context.subscriptions.push(pasteToInterfaceCommand);

}

// This method is called when your extension is deactivated
export function deactivate() {}
