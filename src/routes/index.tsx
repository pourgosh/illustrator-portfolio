import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

type RouterProps = {
  path: string;
  element: ReactElement;
};

export const Router = ({ path, element }: RouterProps) => {
  return (
    <>
      <Routes>
        <Route path={path} element={element} />
      </Routes>
    </>
  );
};
