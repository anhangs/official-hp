import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useViewTransition } from "./useViewTransition";

export const useTransitionRouterPush = () => {
  const router = useRouter();
  const routerPush = useCallback(
    (to: string) => {
      router.push(to);
    },
    [router]
  );
  const { startViewTransition: routerPushWithTransition } =
    useViewTransition(routerPush);

  return { routerPushWithTransition };
};