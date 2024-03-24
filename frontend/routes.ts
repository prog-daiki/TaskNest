/**
 * 一般公開されているルートの配列
 * これらのルートは認証を必要としません
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * 認証に使用されるルートの配列
 * これらのルートはログイン済みのユーザーを/homeにリダイレクトします
 * @type {string[]}
 */
export const authRoutes = ["/home"];

/**
 * API認証ルートのプレフィックス
 * このプレフィックスで始まるルートはAPI認証目的で使用されます
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * ログイン後のデフォルトリダイレクトパス
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/home";
