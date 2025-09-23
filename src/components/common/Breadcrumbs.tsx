import { Link, useLocation, useParams } from "react-router-dom";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { mockUser } from "../common/mockUser";
import { mockProducts } from "../Product-Details-Page/mockProduct";
import React from "react";

function BreadcrumbsComponent() {
  const location = useLocation();
  const { id } = useParams<{ id?: string }>();
  const { t } = useTranslation();

  // "/products/1" → ["products", "1"]
  const paths = useMemo(
    () => location.pathname.split("/").filter(Boolean),
    [location.pathname]
  );

  // (products / user)
  const getEntityName = (type: string, id: string): string | undefined => {
    if (type === "product") {
      const numericId = Number(id);
      return mockProducts.find((p) => p.id === numericId)?.title;
    }
    if (type === "user") {
      return mockUser.id === Number(id)
        ? `${mockUser.firstName} ${mockUser.lastName}`
        : undefined;
    }
    return undefined;
  };

  const entityName = useMemo(() => {
    if (!id || paths.length < 2) return undefined;
    const type = paths[0]; //(products أو user)
    return getEntityName(type, id);
  }, [id, paths]);

  return (
    <nav
      className="text-sm text-gray-500 my-10 sm:my-15"
      aria-label="Breadcrumb"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex space-x-2">
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link to="/" className="hover:underline" itemProp="item">
            <span itemProp="name">{t("home")}</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {paths.map((path, index) => {
          const fullPath = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;

          // id
          const name = id && path === id && entityName ? entityName : path;

          return (
            <li
              key={index}
              className="flex items-center space-x-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <span>/</span>
              {isLast ? (
                <span
                  className="font-semibold text-black capitalize"
                  itemProp="name"
                >
                  {t(name.charAt(0).toLowerCase() + name.slice(1))}
                </span>
              ) : (
                <Link
                  to={fullPath}
                  className="hover:underline capitalize"
                  itemProp="item"
                >
                  {name}
                </Link>
              )}
              <meta itemProp="position" content={`${index + 2}`} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

// 🔹 wrap with React.memo
const Breadcrumbs = React.memo(BreadcrumbsComponent);

export default Breadcrumbs;
