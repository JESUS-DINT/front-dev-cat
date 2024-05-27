import { Outlet } from "react-router-dom";
import HeaderComponent from "components/organisms/header/header";
const BaseLayout = () => {
  return (
    <div className="min-h-full">
      <HeaderComponent />
      <main className="min-h-full sm:px-0 w-full">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default BaseLayout;
