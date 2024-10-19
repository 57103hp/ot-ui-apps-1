import { Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import { LoadingBackdrop, BasePage } from "ui";

const DownloadsPage = lazy(() => import("./DownloadsPage"));

function DownloadsWrapper() {
  const location = useLocation();
  return (
    <BasePage
      title="Data downloads | Eligere"
      description="Data downloads | Eligere"
      location={location}
    >
      <Suspense fallback={<LoadingBackdrop />}>
        <DownloadsPage />
      </Suspense>
    </BasePage>
  );
}

export default DownloadsWrapper;
