// debounce timer 설정
export const debounce = (func: (...args: unknown[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout | undefined;
  return (...args: unknown[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// 반응형 넓이 정의
export const widthBreakpoints = {
  desktop: 1200,
  tablet: 768,
  phone: 576,
  smallPhone: 390,
  default: 200,
};

export const setWidth = (
  windowWidth: number,
  dataType: "POST" | "USER" | "NEWS" | "DEFAULT"
) => {
  const widthByDataType = {
    POST: {
      desktop: 800,
      tablet: 540,
      phone: 410,
      smallPhone: 340,
      default: 300,
    },
    USER: {
      desktop: 795,
      tablet: 520,
      phone: 550,
      smallPhone: 350,
      default: 310,
    },
    NEWS: {
      desktop: 800,
      tablet: 540,
      phone: 530,
      smallPhone: 340,
      default: 320,
    },
    DEFAULT: {
      desktop: 800,
      tablet: 600,
      phone: 400,
      smallPhone: 340,
      default: 200,
    },
  };

  const widthConfig = widthByDataType[dataType] || widthByDataType["DEFAULT"];
  const breakpoint =
    windowWidth >= widthBreakpoints.desktop
      ? "desktop"
      : windowWidth >= widthBreakpoints.tablet
      ? "tablet"
      : windowWidth >= widthBreakpoints.phone
      ? "phone"
      : windowWidth >= widthBreakpoints.smallPhone
      ? "smallPhone"
      : "default";

  return widthConfig[breakpoint];
};
