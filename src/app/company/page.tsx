import { CEO } from "./_components/ceo";
import { Intro } from "./_components/intro";
import { Mission } from "./_components/mission";
import { Vision } from "./_components/vision";

export default function CompanyPage() {
  return (
    <div
      className="mt-24 py-24 w-full max-w-300 mx-0 md:mx-auto px-6 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-10"
      style={{ perspective: 1500 }}
    >
      <div className="col-span-1 md:col-span-2">
        <Intro />
      </div>

      <Mission />
      <Vision />

      <div className="col-span-1 md:col-span-2">
        <CEO />
      </div>
    </div>
  );
}
