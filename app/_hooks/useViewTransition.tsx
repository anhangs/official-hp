
export const useViewTransition = <T extends (...args: any[]) => void>(
  callback: T
) => {
  const startViewTransition = (...args: Parameters<T>) => {
    // HACK: View Transitions APIに未対応のブラウザ用
    if (!(document as any).startViewTransition) {
      callback(...args);
      return;
    }

    (document as any).startViewTransition(async () => {
      await Promise.resolve(callback(...args));
    });
  };
  return { startViewTransition };
};