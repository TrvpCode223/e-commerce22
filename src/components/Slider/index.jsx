import React, { useMemo, useCallback } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = React.forwardRef(
  (
    {
      items = [],
      activeIndex = 0,
      centerMode = false,
      magnifiedIndex = 0,
      activeSlideCSS = "scale-75",
      autoPlay = false,  // Add autoPlay option
      autoPlayInterval = 2000,  // AutoPlay interval for changing slides
      ...props
    },
    ref
  ) => {

    // Vérifie si les items sont valides AVANT le return conditionnel
    const isValidItems = Array.isArray(items);

    // useCallback pour éviter les recalculs inutiles
    const isSmall = useCallback((index) => {
      const computedIndex = activeIndex + magnifiedIndex;
      return computedIndex >= items.length
        ? index !== computedIndex - items.length
        : index !== computedIndex;
    }, [activeIndex, magnifiedIndex, items.length]);

    // useMemo pour optimiser le rendu des slides
    const sliderItems = useMemo(() => {
      return centerMode && isValidItems
        ? items.map((child, index) =>
            React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, isSmall(index) ? activeSlideCSS : ""]
                .filter(Boolean)
                .join(" "),
            })
          )
        : items;
    }, [items, centerMode, isSmall, activeSlideCSS, isValidItems]);

    // Retourne null si les items ne sont pas valides
    if (!isValidItems) {
      console.error("Slider: 'items' must be an array.");
      return null;
    }

    return (
      <AliceCarousel
        items={sliderItems}
        infinite
        ref={ref}
        {...props}
        autoPlay={autoPlay}  // Apply autoPlay prop here
        autoPlayInterval={autoPlayInterval}  // Set autoplay interval
        disableButtonsControls
        renderDotsItem={({ isActive }) => (
          <span
            className={`inline-block h-2 w-2 rounded-full mx-1 ${isActive ? "bg-blue-500" : "bg-gray-300"}`}
          />
        )}
      />
    );
  }
);

export { Slider };
