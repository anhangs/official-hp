
export const useViewTransition = <T extends (...args: any[]) => void>(
  callback: T
) => {
  console.log('useViewTransition');
  const startViewTransition = (...args: Parameters<T>): void | Promise<void> => {
    // HACK: View Transitions APIに未対応のブラウザ用
    if (!(document as any).startViewTransition) {
      console.log('View Transitions APIに未対応のブラウザ');
      callback(...args);
      return;
    }

    (document as any).startViewTransition(async () => {
      console.log('View Transitions APIに対応のブラウザ');
      Promise.resolve(callback(...args));
    });
  };
  return { startViewTransition };
};