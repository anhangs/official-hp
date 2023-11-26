// ViewTransition インターフェース
interface ViewTransition {
  // トランジションの状態や操作に関連するメソッドやプロパティを定義
  // 例: ready, finished プロミスなど
}

// Document インターフェースの拡張
interface Document {
  startViewTransition(callback: UpdateCallback): ViewTransition;
}

type UpdateCallback = () => Promise<any> | void
// CSS関連の型定義
type ViewTransitionName = string;

interface CSSStyleDeclaration {
  viewTransitionName?: ViewTransitionName;
}
