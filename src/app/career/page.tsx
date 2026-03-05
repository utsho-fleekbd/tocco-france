import { Metadata } from "next";

import { CareerForm } from "./_components/career-form";

export const metadata: Metadata = {
  title: "Career",
};

export default function CareerPage() {
  return <CareerForm />;
}
