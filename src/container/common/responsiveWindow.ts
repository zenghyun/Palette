export const debounce = (func: (...args: unknown[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout | undefined;
  return (...args: unknown[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

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
      tablet: 550,
      phone: 520,
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

export const UserListResponsive = (width: number) => {
  let windowHeight;
  let windowItem;

  switch (true) {
    case width > 350 && width <= 520:
      windowHeight = 550;
      windowItem = 150;
      break;
    case width > 310 && width <= 350:
      windowHeight = 350;
      windowItem = 100;
      break;
    case width <= 310:
      windowHeight = 300;
      windowItem = 90;
      break;
    default:
      windowHeight = 680;
      windowItem = 200;
  }

  return [windowHeight, windowItem];
};

export const PostResponsive = (width: number) => {
  let windowHeight;
  let windowItem;

  switch (true) {
    case width > 410 && width < 540:
      windowHeight = 700;
      windowItem = 330;
      break;
    case width <= 410 : 
    windowHeight = 450;
    windowItem = 330;
    break;
    default:
      windowHeight = 800;
      windowItem = 330;
  }

  return [windowHeight, windowItem];
};
