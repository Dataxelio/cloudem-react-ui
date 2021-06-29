import React, { useRef, useEffect } from "react";

export function useCombinedRefs<T extends HTMLElement = HTMLElement>(
  innerRef: React.MutableRefObject<T | null>,
  externRef: React.ForwardedRef<T>
): React.RefObject<T> {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    if (!!targetRef.current) {
      if (!!innerRef) {
        innerRef.current = targetRef.current;
      }

      if (!!externRef) {
        if (typeof externRef === "function") {
          externRef(targetRef.current);
        } else {
          externRef.current = targetRef.current;
        }
      }
    }
  }, [innerRef, externRef]);

  return targetRef;
}
