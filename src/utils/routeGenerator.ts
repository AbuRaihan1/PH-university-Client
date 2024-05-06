import { TUserPath, Troute } from "../types/sidebarItemTypes";

export const routeGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: Troute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return routes;
};

export default routeGenerator;
