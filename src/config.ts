import * as vscode from 'vscode';

export function getPath(): string {
    return vscode.workspace.getConfiguration('sidenotes').get('path', '')
}

export async function setPath(newPath: string){
    await vscode.workspace.getConfiguration('sidenotes').update('path', newPath, true);
}