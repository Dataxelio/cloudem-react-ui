import React, { useState, useEffect } from "react";
import { usePopper } from "react-popper";

export const ButtonWithTooltip = () => {
  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom",
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      { name: "offset", options: { offset: [0, 10] } },
    ],
  });

  // const originalTransform = styles.arrow.transform;
  // const additionnalArrowStyle: React.CSSProperties = {
  //   transform: originalTransform + " rotate(45deg)",
  // };

  const additionnalArrowStyle: React.CSSProperties = { transform: styles.arrow.transform };

  useEffect(() => {
    const popAttr = { ...attributes.popper };
    const popPlacement = popAttr["data-popper-placement"];
    console.log("data-popper-placement = " + popPlacement);

    console.log("additionnal arrow style (before) = " + additionnalArrowStyle.transform);
    additionnalArrowStyle.transform += " rotate(45deg)";
    console.log("additionnal arrow style (after) = " + additionnalArrowStyle.transform);
  });

  return (
    <>
      <button
        className="bg-gray-200 text-sm text-gray-900 border border-gray-900 px-5 py-2 rounded-sm"
        type="button"
        ref={setReferenceElement}
      >
        Reference element
      </button>

      <div
        className="bg-gray-900 text-xs text-gray-200 px-5 py-2 rounded-md"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        Popper element
        <div
          className="bg-gray-400 w-[10px] h-[10px]"
          ref={setArrowElement}
          style={{ ...styles.arrow, ...additionnalArrowStyle }}
        />
      </div>
    </>
  );
};
